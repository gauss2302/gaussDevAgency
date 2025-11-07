<template>
  <div>
    <div
      class="hero-section"
      :class="{ hovered: isHovered }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <video class="hero-video" autoplay loop muted playsinline preload="auto">
        <source src="/assets/background.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay">
        <!-- <div class="promo-left">
          <h3 class="promo-title">Innovative Solutions</h3>
        </div>
        <div class="promo-right">
          <h3 class="promo-title">Expert Team</h3>
        </div> -->
        <div class="hero-container">
          <h1 class="hero-title">innovate</h1>
        </div>
      </div>
    </div>
    <section class="body-section">
      <div class="carousel-wrapper">
        <div
          class="carousel-track"
          :style="{ transform: `translateY(-${currentIndex * (100 / titleCount)}%)` }"
        >
          <h2 class="body-title">BUILD</h2>
          <h2 class="body-title-2">SPEED</h2>
          <h2 class="body-title-3">REPEAT</h2>
        </div>
      </div>
    </section>
    <section class="features">
      <article
        v-for="(item, i) in features"
        :key="item.id"
        class="feature-section"
        :class="[i % 2 === 1 ? 'is-reversed' : '', themeClass(i), { 'in-view': inView[i] }]"
        :data-index="i"
        :style="staggerStyle(i)"
        :ref="(el) => setFeatureRef(el as HTMLElement, i)"
      >
        <div class="feature-copy">
          <h3 class="feature-kicker">{{ item.kicker }}</h3>
          <h2 class="feature-title">{{ item.title }}</h2>
          <p class="feature-desc">{{ item.desc }}</p>
          <ul class="feature-bullets">
            <li v-for="(b, bi) in item.bullets" :key="bi">{{ b }}</li>
          </ul>
          <router-link to="/services" class="feature-cta">DISCUSS</router-link>
        </div>
        <div class="feature-media">
          <img
            v-if="item.media.kind === 'image'"
            :src="item.media.src"
            :alt="item.title"
            class="feature-image"
            loading="lazy"
          />
          <video
            v-else
            class="feature-video"
            :poster="item.media.poster || ''"
            playsinline
            muted
            loop
            preload="metadata"
          >
            <source :src="item.media.src" type="video/mp4" />
          </video>
        </div>
      </article>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { FeatureItem } from '@/types/features'
import { ref, onMounted, onUnmounted } from 'vue'

const isHovered = ref(false)

const currentIndex = ref(0)
const titleCount = 3
let intervalId: number | undefined

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % titleCount
  }, 2000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const features = ref<FeatureItem[]>([
  {
    id: 1,
    kicker: 'Discovery & Strategy',
    title: 'Ship the right product, not just any product',
    desc: 'We align stakeholders, validate assumptions, and de-risk delivery with actionable roadmaps.',
    bullets: [
      'Product workshops (2–4h)',
      'User flows & scope definition',
      'Tech audit & feasibility',
      'ROI-driven roadmap',
    ],
    media: {
      kind: 'image',
      src: '/assets/fight.png',
    },
  },
  {
    id: 2,
    kicker: 'Web Applications',
    title: 'Robust web platforms that scale with you',
    desc: 'From MVP to multi-tenant SaaS—clean architectures and performance-first engineering.',
    bullets: [
      'Vue/React + TypeScript',
      'SSR/ISR & accessibility',
      'Observability & metrics',
      'Security baselines (OWASP)',
    ],
    media: {
      kind: 'image',
      src: '/assets/sit2.png',
    },
  },
  {
    id: 3,
    kicker: 'Mobile Apps',
    title: 'Native-like experience across devices',
    desc: 'Fast, fluid, and offline-ready apps with elegant UX and predictable releases.',
    bullets: [
      'Flutter cross-Platform development',
      'Recent tech stack for your idea',
      'Apple and Google Stores publication',
      'CI/CD with store pipelines',
    ],
    media: {
      kind: 'image',
      src: '/assets/mobile.png',
    },
  },
  {
    id: 4,
    kicker: 'DevOps & Cloud',
    title: 'Frictionless releases, predictable infra costs',
    desc: 'We automate from commit to production and keep your platform observable and secure.',
    bullets: ['Coolify and Dokloy', 'K8s/Docker, autoscaling', 'Grafana and Prometeus'],
    media: {
      kind: 'image',
      src: '/assets/leo-improved.png',
    },
  },
  // {
  //   id: 5,
  //   kicker: 'AI & Machine Learning',
  //   title: 'Practical AI that moves business metrics',
  //   desc: 'We integrate ML where it matters—recommendations, NLP, and computer vision.',
  //   bullets: [
  //     'Use-case validation',
  //     'Data pipelines & evals',
  //     'Human-in-the-loop',
  //     'Privacy & compliance',
  //   ],
  //   media: {
  //     kind: 'image',
  //     src: '/assets/leo-improved.png',
  //   },
  // },
  {
    id: 5,
    kicker: 'UI/UX & Design Systems',
    title: 'Interfaces that are clear, fast, and delightful',
    desc: 'We build modular systems, so your product stays consistent as it grows.',
    bullets: ['Design tokens & theming', 'Rapid prototyping', 'Usability testing'],
    media: {
      kind: 'image',
      src: '/assets/mobile.png',
    },
  },
])

const themes = ['theme-a', 'theme-b', 'theme-c', 'theme-d']
const themeClass = (i: number) => themes[i % themes.length]

// --- Scroll reveal for feature sections ---
const inView = ref<boolean[]>([])
const featureRefs = ref<HTMLElement[]>([])

const setFeatureRef = (el: HTMLElement | null, i: number) => {
  if (!el) return
  featureRefs.value[i] = el
}

const staggerStyle = (i: number) => ({
  // лёгкая лесенка — 60мс между карточками
  transitionDelay: `${Math.min(i * 60, 360)}ms`,
})

onMounted(() => {
  // если пользователь предпочитает минимум анимаций — всё сразу видно
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    inView.value = features.value.map(() => true)
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        const idx = Number(target.dataset.index)
        if (entry.isIntersecting) {
          inView.value[idx] = true
          io.unobserve(target) // анимируем один раз
        }
      })
    },
    {
      root: null,
      threshold: 0.2, // 20% внутри экрана — запускаем
      rootMargin: '0px 0px -10% 0px', // небольшой фокус на нижнем крае
    },
  )

  // наблюдаем все секции
  featureRefs.value.forEach((el) => el && io.observe(el))

  // на всякий — слушаем добавление новых (если список динамический)
  const reobserve = () => {
    featureRefs.value.forEach((el, i) => {
      if (el && !inView.value[i]) io.observe(el)
    })
  }
  // микротаск — чтобы успел заполниться featureRefs
  queueMicrotask(reobserve)

  onUnmounted(() => io.disconnect())
})
</script>
<style scoped>
.hero-section {
  background-color: #000000;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 4rem;
  transition:
    filter 0.3s ease,
    opacity 0.5s ease;
}

.hero-section.hovered .hero-video {
  filter: blur(5px);
}

.hero-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.promo-left,
.promo-right {
  position: absolute;
  top: 20%;
  width: 250px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #faeb92;
  border-radius: 0.5rem;
  transition: transform 0.5s ease;
}

.promo-left {
  left: 2rem;
  transform: translateX(-100%);
}

.promo-right {
  right: 2rem;
  transform: translateX(100%);
}

.hero-section.hovered .promo-left,
.hero-section.hovered .promo-right {
  transform: translateX(0);
}

.promo-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.hero-container {
  max-width: 1200px;
  text-align: left;
  padding: 2rem 2rem 2rem 4rem;
}

.hero-title {
  font-size: 10rem;
  font-weight: bold;
  color: #a62cb9;
  margin-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.hero-section:hover .hero-title {
  opacity: 1;
}

.body-section {
  background-color: #000000;
  padding: 3rem 0;
  text-align: center;
}

.carousel-wrapper {
  height: calc(7rem * 1.1);
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;
}

.body-title {
  font-size: 8rem;
  font-weight: bold;
  color: rgb(204, 102, 218);
  margin: 0;
  line-height: 1.1;
}

.body-title-2 {
  font-size: 8rem;
  font-weight: bold;
  color: rgb(250, 235, 146);
  margin: 0;
  line-height: 1.1;
}

.body-title-3 {
  font-size: 8rem;
  font-weight: bold;
  color: rgb(204, 102, 218);
  margin: 0;
  line-height: 1.1;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    transition: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-container {
    padding: 1rem 1rem 1rem 2rem;
    text-align: center;
  }

  .body-title,
  .body-title-2,
  .body-title-3 {
    font-size: 1.5rem;
  }

  .carousel-wrapper {
    height: calc(1.5rem * 1.1);
  }

  .promo-left,
  .promo-right {
    width: 150px;
    top: 10%;
  }

  .promo-title {
    font-size: 1rem;
  }
}

.features {
  background: #000;
}

.feature-section {
  --bg: #0b0b0f;
  --fg: #faeb92;
  --muted: #c9c9c9;
  --card: rgba(255, 255, 255, 0.04);
  --accent: linear-gradient(90deg, #9929ea, #cc66da);

  background: var(--bg);
  color: var(--fg);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2.5rem, 5vw, 5rem) clamp(1.25rem, 3vw, 2rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
}

.feature-section.is-reversed {
  grid-template-columns: 1fr 1.1fr;
}
.feature-section.is-reversed .feature-copy {
  order: 2;
}
.feature-section.is-reversed .feature-media {
  order: 1;
}

.feature-copy {
  z-index: 2;
}
.feature-kicker {
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  opacity: 0.85;
  margin-bottom: 0.5rem;
}
.feature-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1.1;
  font-weight: 800;
  margin: 0.25rem 0 1rem;
}
.feature-desc {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}
.feature-bullets {
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  color: var(--muted);
}
.feature-bullets li {
  margin: 0.25rem 0;
}

.feature-cta {
  display: inline-block;
  padding: 0.65rem 1.1rem;
  border-radius: 0.75rem;
  background: var(--accent);
  color: #0b0b0f;
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 8px 24px rgba(153, 41, 234, 0.25);
}
.feature-cta:hover {
  transform: translateY(-1px);
}

.feature-media {
  position: relative;
  display: grid;
  place-items: center;
}
.feature-image {
  width: 100%;
  max-width: 580px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
  transform: translateX(2vw);
}
.feature-section.is-reversed .feature-image {
  transform: translateX(-2vw);
}

.feature-media::after {
  content: '';
  position: absolute;
  inset: -2rem;
  border-radius: 2rem;
  pointer-events: none;
  background: radial-gradient(60% 60% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.35) 100%);
  mix-blend-mode: normal;
}

.theme-a {
  --bg: #000000;
  --fg: #faeb92;
  --muted: #d7d7bf;
  --accent: linear-gradient(90deg, #9929ea, #cc66da);
}
.theme-b {
  --bg: #000000;
  --fg: #e6f3ff;
  --muted: #c7d7e4;
  --accent: linear-gradient(90deg, #ff7ac6, #b86bff);
}
.theme-c {
  --bg: #000000;
  --fg: #ffe8f7;
  --muted: #e6cfe0;
  --accent: linear-gradient(90deg, #ff7ac6, #b86bff);
}
.theme-d {
  --bg: #000000;
  --fg: #e8ffe8;
  --muted: #cfe6cf;
  --accent: linear-gradient(90deg, #9929ea, #cc66da);
}

@media (prefers-reduced-motion: reduce) {
  .feature-cta {
    transition: none;
  }
  .feature-image {
    transform: none !important;
  }
}

@media (max-width: 1024px) {
  .feature-section,
  .feature-section.is-reversed {
    grid-template-columns: 1fr;
  }
  .feature-copy {
    order: 1 !important;
  }
  .feature-media {
    order: 2 !important;
  }
  .feature-image {
    transform: none;
    max-width: 100%;
  }
  .feature-section {
    gap: 2rem;
  }
}

/* --- Scroll reveal for feature sections --- */
.feature-section {
  /* изначально скрыта и сдвинута в сторону */
  opacity: 0;
  transform: translate3d(var(--reveal-offset, 4rem), 0, 0);
  will-change: transform, opacity;
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.2, 0.65, 0.2, 1);
}

/* правые/левых выезды: для "зеркальной" верстки используем отрицательный оффсет */
.feature-section.is-reversed {
  --reveal-offset: -4rem;
}

/* как только попала во вьюпорт — показываем */
.feature-section.in-view {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

/* лёгкий параллакс картинке при появлении — необязательно, но красиво */
.feature-section .feature-image,
.feature-section .feature-video {
  transition: transform 0.9s cubic-bezier(0.2, 0.65, 0.2, 1);
}
.feature-section.in-view .feature-image {
  transform: translateX(0);
}
.feature-section.is-reversed.in-view .feature-image {
  transform: translateX(0);
}

/* если пользователь отключил анимации — не двигаем */
@media (prefers-reduced-motion: reduce) {
  .feature-section {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .feature-section .feature-image,
  .feature-section .feature-video {
    transition: none !important;
  }
}
</style>
