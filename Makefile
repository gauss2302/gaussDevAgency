# ──────────────────────────────────────────────────────────────────────
# gaussDevAgency — local dev + Docker workflow
#
# Run `make` (or `make help`) to see every target with a short
# description. Variables at the top can be overridden on the command
# line, e.g. `make logs SERVICE=nginx TAIL=200`.
# ──────────────────────────────────────────────────────────────────────

# Compose v2 ("docker compose") is the default. Override if you still
# have the old standalone binary: `make up COMPOSE='docker-compose'`.
COMPOSE   ?= docker compose
SERVICE   ?= nginx
CONTAINER ?= gaussdevagency_nginx
PNPM      ?= pnpm
TAIL      ?= 100

# The default goal: run `make` with no args -> print the help screen.
.DEFAULT_GOAL := help

# ──────────────────────────────────────────────────────────────────────
# Help
# ──────────────────────────────────────────────────────────────────────

.PHONY: help
help: ## Show this help
	@printf "\n  \033[1mgaussDevAgency\033[0m — make targets\n\n"
	@awk 'BEGIN {FS = ":.*?## "} \
	    /^## ─/ { sub(/^## /, ""); printf "\n  \033[2m%s\033[0m\n", $$0; next } \
	    /^[a-zA-Z_0-9.-]+:.*?## / { printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2 }' \
	  $(MAKEFILE_LIST)
	@printf "\n  Overridable vars: COMPOSE='$(COMPOSE)' SERVICE='$(SERVICE)' TAIL='$(TAIL)'\n\n"

## ─ Local development ────────────────────────────────────────────────

.PHONY: install dev build-local type-check format
install:        ## Install dependencies via pnpm (frozen lockfile)
	$(PNPM) install --frozen-lockfile

dev:            ## Start Vite dev server with hot reload (http://localhost:5173)
	$(PNPM) dev

build-local:    ## Build static bundle into ./dist (runs type-check + vite build)
	$(PNPM) build

type-check:     ## Run vue-tsc type check
	$(PNPM) type-check

format:         ## Run Prettier on src/
	$(PNPM) format

## ─ Docker: production stack ─────────────────────────────────────────

.PHONY: build up down restart rebuild hard-reset nuke logs logs-tail ps status sh nginx-test nginx-reload config-reload clean prune
build:          ## Build the Docker image (no container start)
	$(COMPOSE) build $(SERVICE)

up:             ## Start the container in the background
	$(COMPOSE) up -d $(SERVICE)

down:           ## Stop and remove the container (config + ssl volumes untouched)
	$(COMPOSE) down

restart:        ## Restart the container without rebuilding the image
	$(COMPOSE) restart $(SERVICE)

rebuild:        ## ★ Rebuild image and recreate container — the main "ship my changes" command
	$(COMPOSE) build $(SERVICE)
	$(COMPOSE) up -d --force-recreate $(SERVICE)

hard-reset:     ## Stop, remove orphans (incl. renamed _<hash>_ leftovers), and bring back up
	-$(COMPOSE) down --remove-orphans
	-docker rm -f $(CONTAINER) 2>/dev/null
	-docker ps -a --filter "name=_$(CONTAINER)" -q | xargs -r docker rm -f
	$(COMPOSE) up -d $(SERVICE)

nuke:           ## Nuke everything (orphans + image) and rebuild from scratch
	-$(COMPOSE) down --remove-orphans --rmi local
	-docker rm -f $(CONTAINER) 2>/dev/null
	-docker ps -a --filter "name=_$(CONTAINER)" -q | xargs -r docker rm -f
	$(COMPOSE) build --no-cache $(SERVICE)
	$(COMPOSE) up -d $(SERVICE)

logs:           ## Follow container logs (Ctrl-C to stop)
	$(COMPOSE) logs -f --tail=$(TAIL) $(SERVICE)

logs-tail:      ## Print the last $(TAIL) log lines and exit
	$(COMPOSE) logs --tail=$(TAIL) --no-color $(SERVICE)

ps:             ## Show container status + health
	$(COMPOSE) ps

status: ps      ## Alias for `ps`

sh:             ## Open an interactive shell inside the running container
	$(COMPOSE) exec $(SERVICE) sh

nginx-test:     ## Validate nginx config inside the container (nginx -t)
	$(COMPOSE) exec $(SERVICE) nginx -t

nginx-reload:   ## Reload nginx config without restarting the container
	$(COMPOSE) exec $(SERVICE) nginx -s reload

config-reload: nginx-reload ## Alias for `nginx-reload`

## ─ Deploy ───────────────────────────────────────────────────────────

.PHONY: pull deploy
pull:           ## git pull --ff-only from origin
	git pull --ff-only

deploy: pull rebuild ## ★ git pull + rebuild + recreate — full deploy from main

## ─ Housekeeping ─────────────────────────────────────────────────────

.PHONY: clean prune
clean:          ## Remove dangling Docker images and stopped containers
	docker image prune -f
	docker container prune -f

prune:          ## Aggressive cleanup: dangling images + unused volumes + builder cache
	docker image prune -f
	docker container prune -f
	docker volume prune -f
	docker builder prune -f
