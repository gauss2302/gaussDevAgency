<template>
  <section
    class="contact-widget"
    :class="[{ compact }, rounded ? 'round-xl' : 'round-lg']"
    aria-labelledby="contact-heading"
  >
    <div class="contact-widget__header">
      <h2 v-if="title" id="contact-heading" class="contact-widget__title">{{ title }}</h2>
      <p v-if="subtitle" class="contact-widget__sub">{{ subtitle }}</p>
      <p v-if="hours" class="contact-widget__hours" aria-label="Working hours">
        <svg viewBox="0 0 24 24" class="contact-widget__clock" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .2.08.39.22.53l3.5 3.5a.75.75 0 0 0 1.06-1.06l-3.28-3.28V6Z"
          />
        </svg>
        <span>{{ hours }}</span>
      </p>
    </div>

    <div class="contact-widget__grid">
      <div class="contact-widget__media" v-if="imageSrc">
        <img :src="imageSrc" :alt="imageAlt || 'Contact image'" />
      </div>

      <div class="contact-widget__icons" role="list">
        <a
          v-if="email"
          role="listitem"
          class="contact-widget__tile"
          :href="`mailto:${email}`"
          @click="emit('click', { channel: 'email' })"
          aria-label="Email"
        >
          <span class="contact-widget__tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="contact-widget__icon">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5z"
              />
            </svg>
          </span>
          <span class="contact-widget__tile-body">
            <span class="contact-widget__tile-title">Email</span>
            <span class="contact-widget__tile-sub">{{ email }}</span>
          </span>
        </a>

        <a
          v-if="telegramUrl"
          role="listitem"
          class="contact-widget__tile"
          :href="telegramUrl"
          target="_blank"
          rel="noopener"
          @click="emit('click', { channel: 'telegram' })"
          aria-label="Telegram"
        >
          <span class="contact-widget__tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="contact-widget__icon">
              <path
                fill="currentColor"
                d="M9.03 15.88 8.9 18.6a1 1 0 0 0 1.6.84l2.32-1.7 3.6 2.65c.66.49 1.6.12 1.78-.68l3.03-13.6a1 1 0 0 0-1.36-1.14L2.6 10.2a1 1 0 0 0 .03 1.84l4.93 1.89 9.12-7.23-7.65 8.18z"
              />
            </svg>
          </span>
          <span class="contact-widget__tile-body">
            <span class="contact-widget__tile-title">Telegram</span>
            <span class="contact-widget__tile-sub">{{ telegramHandle || urlHost(telegramUrl) }}</span>
          </span>
        </a>

        <a
          v-if="linkedinUrl"
          role="listitem"
          class="contact-widget__tile"
          :href="linkedinUrl"
          target="_blank"
          rel="noopener"
          @click="emit('click', { channel: 'linkedin' })"
          aria-label="LinkedIn"
        >
          <span class="contact-widget__tile-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="contact-widget__icon">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3zM9.48 8.98H13v1.64h.06c.49-.93 1.69-1.91 3.48-1.91 3.72 0 4.41 2.45 4.41 5.63V21H17V14.6c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38V21H9.48z"
              />
            </svg>
          </span>
          <span class="contact-widget__tile-body">
            <span class="contact-widget__tile-title">LinkedIn</span>
            <span class="contact-widget__tile-sub">{{ urlHost(linkedinUrl) }}</span>
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
  imageSrc: '/assets/mobile.png',
  compact: false,
  rounded: false,
})

const emit = defineEmits<{
  (e: 'click', payload: { channel: 'email' | 'telegram' | 'linkedin' }): void
}>()

const urlHost = (url: string) => {
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
  color: var(--fg);
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 5vw, 4rem);
  background: transparent;
  isolation: isolate;
}

.contact-widget.compact {
  padding: 2rem clamp(1rem, 3vw, 2rem);
}

.contact-widget__header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-widget__title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0 0 0.4rem;
}

.contact-widget__sub {
  color: var(--muted);
  margin: 0 auto 0.6rem;
  max-width: 520px;
  font-size: 1rem;
  line-height: 1.65;
}

.contact-widget__hours {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--muted);
  margin: 0.5rem auto 0;
  font-size: 0.9rem;
}

.contact-widget__clock {
  width: 18px;
  height: 18px;
  opacity: 0.85;
}

.contact-widget__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(1.25rem, 3vw, 3rem);
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.contact-widget__media img {
  width: 100%;
  max-width: 560px;
  border-radius: 1.2rem;
  display: block;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.contact-widget__icons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tiles: same card style as Home features — subtle border, soft bg, purple glow on hover */
.contact-widget__tile {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.1rem 1.25rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  text-decoration: none;
  color: #f0f0f0;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

.round-xl .contact-widget__tile {
  border-radius: 1.2rem;
}

.round-lg .contact-widget__tile {
  border-radius: 1rem;
}

.contact-widget__tile:hover {
  border-color: rgba(204, 102, 218, 0.35);
  box-shadow: 0 16px 48px rgba(153, 41, 234, 0.12);
  transform: translateY(-2px);
}

.contact-widget__tile:active {
  transform: translateY(0);
}

.contact-widget__tile:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--surface), 0 0 0 5px rgba(153, 41, 234, 0.4);
}

.contact-widget__tile-icon {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.contact-widget__icon {
  width: 36px;
  height: 36px;
  color: var(--gold);
}

.contact-widget__tile-body {
  display: grid;
  gap: 0.2rem;
}

.contact-widget__tile-title {
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.2;
  color: #fff;
}

.contact-widget__tile-sub {
  color: var(--muted);
  font-size: 0.92rem;
}

.contact-widget.compact .contact-widget__tile-icon {
  width: 64px;
  height: 64px;
}

.contact-widget.compact .contact-widget__icon {
  width: 32px;
  height: 32px;
}

.contact-widget.compact .contact-widget__tile {
  padding: 1rem 1.1rem;
}

@media (max-width: 960px) {
  .contact-widget__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-widget__media {
    order: 2;
  }

  .contact-widget__icons {
    order: 1;
    align-items: stretch;
  }

  .contact-widget__media img {
    max-width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .contact-widget {
    padding: 2rem clamp(1rem, 4vw, 1.5rem) 3rem;
  }

  .contact-widget__header {
    margin-bottom: 1.5rem;
  }

  .contact-widget__title {
    font-size: 1.6rem;
  }

  .contact-widget__grid {
    gap: 1.25rem;
  }

  .contact-widget__tile {
    padding: 1rem;
    gap: 0.875rem;
  }

  .contact-widget__tile-icon {
    width: 60px;
    height: 60px;
  }

  .contact-widget__icon {
    width: 28px;
    height: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-widget__tile {
    transition: none;
  }
  .contact-widget__tile:hover,
  .contact-widget__tile:active {
    transform: none;
  }
}
</style>
