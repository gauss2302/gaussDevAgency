<!-- <template>
  <section
    class="contact-widget"
    :class="[{ compact }, rounded ? 'round-xl' : 'round-lg']"
    aria-labelledby="contact-heading"
  >
    <div class="header">
      <h2 id="contact-heading" class="title">{{ title }}</h2>
      <p v-if="subtitle" class="sub">{{ subtitle }}</p>
    </div>

    <div class="grid">
      <div class="media" v-if="imageSrc">
        <img :src="imageSrc" :alt="imageAlt || 'Contact image'" />
        <p v-if="hours" class="hours" aria-label="Working hours">
          <svg viewBox="0 0 24 24" class="icon clock" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .2.08.39.22.53l3.5 3.5a.75.75 0 0 0 1.06-1.06l-3.28-3.28V6Z"
            />
          </svg>
          <span>{{ hours }}</span>
        </p>
      </div>

      <div class="icons" role="list">
        <a
          v-if="email"
          role="listitem"
          class="tile"
          :href="`mailto:${email}`"
          @click="$emit('click', { channel: 'email' })"
          aria-label="Email"
        >
          <span class="tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5z"
              />
            </svg>
          </span>
          <span class="tile-body">
            <span class="tile-title">Email</span>
            <span class="tile-sub">{{ email }}</span>
          </span>
        </a>

        <a
          v-if="telegramUrl"
          role="listitem"
          class="tile"
          :href="telegramUrl"
          target="_blank"
          rel="noopener"
          @click="$emit('click', { channel: 'telegram' })"
          aria-label="Telegram"
        >
          <span class="tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M9.03 15.88 8.9 18.6a1 1 0 0 0 1.6.84l2.32-1.7 3.6 2.65c.66.49 1.6.12 1.78-.68l3.03-13.6a1 1 0 0 0-1.36-1.14L2.6 10.2a1 1 0 0 0 .03 1.84l4.93 1.89 9.12-7.23-7.65 8.18z"
              />
            </svg>
          </span>
          <span class="tile-body">
            <span class="tile-title">Telegram</span>
            <span class="tile-sub">{{ telegramHandle || urlHost(telegramUrl) }}</span>
          </span>
        </a>

        <a
          v-if="linkedinUrl"
          role="listitem"
          class="tile"
          :href="linkedinUrl"
          target="_blank"
          rel="noopener"
          @click="$emit('click', { channel: 'linkedin' })"
          aria-label="LinkedIn"
        >
          <span class="tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3zM9.48 8.98H13v1.64h.06c.49-.93 1.69-1.91 3.48-1.91 3.72 0 4.41 2.45 4.41 5.63V21H17V14.6c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38V21H9.48z"
              />
            </svg>
          </span>
          <span class="tile-body">
            <span class="tile-title">LinkedIn</span>
            <span class="tile-sub">{{ urlHost(linkedinUrl) }}</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  email?: string
  telegramUrl?: string
  telegramHandle?: string
  linkedinUrl?: string
  hours?: string
  compact?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: '/sit2.png',
  compact: false,
  rounded: false,
})

defineEmits<{
  click: [payload: { channel: 'email' | 'telegram' | 'linkedin' }]
}>()

function urlHost(url: string): string {
  try {
    const u = new URL(url)
    return u.host.replace(/^www\./, '')
  } catch {
    return url
  }
}
</script>

<style scoped>
.contact-widget {
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --card: rgba(255, 255, 255, 0.05);
  --accent: linear-gradient(90deg, #9929ea, #cc66da);

  color: var(--ink);
  padding: 3rem 1rem 4rem;
  background: transparent;
  isolation: isolate;
}

.contact-widget.compact {
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  margin: 0 0 0.4rem;
}

.sub {
  color: var(--muted);
  margin: 0 auto;
  max-width: 560px;
}

.grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(1.25rem, 3vw, 3rem);
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  align-items: center;
}

.media img {
  width: 100%;
  max-width: 580px;
  border-radius: 1.25rem;
  display: block;
  object-fit: cover;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.45);
}

.hours {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--muted);
  margin-top: 0.75rem;
  font-size: 0.95rem;
}

.icon.clock {
  width: 18px;
  height: 18px;
  opacity: 0.9;
}

.icons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tile {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.1rem 1.25rem;
  border-radius: 1rem;
  background:
    linear-gradient(#0c0c10, #0c0c10) padding-box,
    var(--accent) border-box;
  border: 1px solid transparent;
  text-decoration: none;
  color: var(--ink);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.22s ease,
    opacity 0.16s ease;
}

.round-xl .tile {
  border-radius: 1.25rem;
}

.round-lg .tile {
  border-radius: 1rem;
}

.tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 56px rgba(153, 41, 234, 0.25);
}

.tile:active {
  transform: translateY(0);
  opacity: 0.95;
}

.tile:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(12, 12, 16, 0.9),
    0 0 0 6px rgba(153, 41, 234, 0.55);
}

.tile-icon {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 1rem;
  background: var(--card);
  border: 1px solid var(--stroke);
}

.icon {
  width: 40px;
  height: 40px;
}

.tile-body {
  display: grid;
  gap: 0.2rem;
}

.tile-title {
  font-weight: 800;
  font-size: 1.15rem;
  line-height: 1.2;
}

.tile-sub {
  color: var(--muted);
  font-size: 0.95rem;
}

.contact-widget.compact .tile-icon {
  width: 68px;
  height: 68px;
}

.contact-widget.compact .icon {
  width: 36px;
  height: 36px;
}

.contact-widget.compact .tile {
  padding: 1rem 1.1rem;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .icons {
    align-items: center;
  }
  .tile {
    max-width: 520px;
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile {
    transition: none;
  }
  .tile:hover,
  .tile:active {
    transform: none;
  }
}
</style> -->
