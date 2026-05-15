<template>
  <div class="home">
    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <DottedSurface class="hero__dots" contained theme="dark" />
      <div class="hero__gradient" />

      <div class="hero__inner">
        <p class="hero__kicker" :class="{ visible: mounted }">Software Development Agency</p>

        <h1 class="hero__headline">
          <span class="hero__line" :class="{ visible: mounted }" style="--delay: 0.15s">We build digital</span>
          <span class="hero__line hero__line--accent" :class="{ visible: mounted }" style="--delay: 0.3s">products that</span>
          <span class="hero__line" :class="{ visible: mounted }" style="--delay: 0.45s">
            <span class="hero__rotating-word" :key="currentWord">{{ words[currentWord] }}</span>
          </span>
        </h1>

        <p class="hero__sub" :class="{ visible: mounted }" style="--delay: 0.6s">
          From zero to production — we design, engineer, and ship web &amp; mobile
          products with clean architecture and measurable outcomes.
        </p>

        <div class="hero__actions" :class="{ visible: mounted }" style="--delay: 0.75s">
          <router-link to="/contact" class="btn btn--primary">Start a project</router-link>
          <router-link to="/services" class="btn btn--ghost">Our services &rarr;</router-link>
        </div>
      </div>

      <div class="hero__stats" :class="{ visible: mounted }" style="--delay: 0.9s">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat__number">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════ MARQUEE ═══════════════ -->
    <section class="marquee-strip">
      <div class="marquee-strip__track">
        <span v-for="n in 2" :key="n" class="marquee-strip__set" :aria-hidden="n > 1">
          <span v-for="w in marqueeWords" :key="w + n" class="marquee-strip__word">{{ w }}</span>
        </span>
      </div>
    </section>

    <!-- ═══════════════ FEATURES TIMELINE ═══════════════ -->
    <section class="features">
      <div class="features__header">
        <p class="features__kicker">What we do</p>
        <h2 class="features__title">End-to-end capabilities,<br />one focused team</h2>
        <p class="features__desc">
          From discovery to post-launch growth — we cover every stage of the product lifecycle
          so you never have to juggle multiple vendors.
        </p>
      </div>

      <div class="tl">
        <div
          v-for="(item, i) in features"
          :key="item.id"
          class="tl__row"
          :ref="(el) => setSentinelRef(el as HTMLElement, i)"
        >
          <!-- Sticky meta column -->
          <div class="tl__meta">
            <div class="tl__icon" :class="{ active: activeFeature === i }">
              <span class="tl__icon-num">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="tl__meta-text">
              <span class="tl__meta-title">{{ item.kicker }}</span>
            </div>
          </div>

          <!-- Vertical line connector -->
          <div class="tl__line">
            <div class="tl__line-track" />
            <div class="tl__line-dot" :class="{ active: activeFeature === i }" />
          </div>

          <!-- Content card -->
          <article class="tl__card" :class="{ active: activeFeature === i }">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.kicker"
              class="tl__card-img"
              loading="lazy"
            />
            <div class="tl__card-body">
              <h3 class="tl__card-title" :class="{ active: activeFeature === i }">{{ item.title }}</h3>
              <p class="tl__card-desc" :class="{ active: activeFeature === i }">{{ item.desc }}</p>

              <div class="tl__card-expand" :class="{ open: activeFeature === i }">
                <div class="tl__card-expand-inner">
                  <div class="tl__card-bullets">
                    <ul>
                      <li v-for="(b, bi) in item.bullets" :key="bi">
                        <span class="tl__bullet-dot" />
                        <span>{{ b }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="tl__card-action">
                    <router-link to="/services" class="tl__card-link">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CTA ═══════════════ -->
    <section class="cta">
      <div class="cta__inner">
        <h2 class="cta__title">Ready to build<br />something remarkable?</h2>
        <p class="cta__sub">
          Tell us about your idea — we'll get back within 24 hours with a tailored proposal.
        </p>
        <router-link to="/contact" class="btn btn--primary btn--lg">Get in touch</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { FeatureItem } from '@/types/features'
import DottedSurface from '@/components/ui/DottedSurface.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const mounted = ref(false)
const currentWord = ref(0)
const words = ['scale.', 'convert.', 'delight.', 'last.']
let wordInterval: number | undefined

const stats = [
  { value: '40+', label: 'Projects shipped' },
  { value: '12', label: 'Engineers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<24h', label: 'Response time' },
]

const marqueeWords = [
  'Vue', 'React', 'TypeScript', 'Flutter', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Figma', 'CI/CD',
]

const features = ref<FeatureItem[]>([
  {
    id: 1,
    kicker: 'Discovery & Strategy',
    title: 'Ship the right product, not just any product',
    desc: 'We align stakeholders, validate assumptions, and de-risk delivery with actionable roadmaps.',
    bullets: [
      'Product workshops (2-4 h)',
      'User flows & scope definition',
      'Tech audit & feasibility',
      'ROI-driven roadmap',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    media: { kind: 'image', src: '' },
  },
  {
    id: 2,
    kicker: 'Web Applications',
    title: 'Robust web platforms that scale with you',
    desc: 'From MVP to multi-tenant SaaS — clean architectures and performance-first engineering.',
    bullets: [
      'Vue / React + TypeScript',
      'SSR / ISR & accessibility',
      'Observability & metrics',
      'Security baselines (OWASP)',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    media: { kind: 'image', src: '' },
  },
  {
    id: 3,
    kicker: 'Mobile Apps',
    title: 'Native-like experience across devices',
    desc: 'Fast, fluid, and offline-ready apps with elegant UX and predictable releases.',
    bullets: [
      'Flutter cross-platform',
      'Modern tech stack',
      'App Store & Play Store',
      'CI/CD with store pipelines',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    media: { kind: 'image', src: '' },
  },
  {
    id: 4,
    kicker: 'DevOps & Cloud',
    title: 'Frictionless releases, predictable infra costs',
    desc: 'We automate from commit to production and keep your platform observable and secure.',
    bullets: [
      'Docker & Kubernetes',
      'IaC with Terraform',
      'Grafana & Prometheus',
      'Cost-optimised scaling',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    media: { kind: 'image', src: '' },
  },
  {
    id: 5,
    kicker: 'UI/UX & Design Systems',
    title: 'Interfaces that are clear, fast, and delightful',
    desc: 'We build modular design systems so your product stays consistent as it grows.',
    bullets: [
      'Design tokens & theming',
      'Rapid prototyping',
      'WCAG 2.1+ accessibility',
      'Usability testing',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    media: { kind: 'image', src: '' },
  },
])

/* ── Scroll-driven active feature ── */
const activeFeature = ref(0)
const sentinelEls = ref<HTMLElement[]>([])
let rafId = 0

const setSentinelRef = (el: HTMLElement | null, i: number) => {
  if (!el) return
  sentinelEls.value[i] = el
}

const updateActiveByProximity = () => {
  const targetY = window.innerHeight / 3
  let bestIdx = 0
  let bestDist = Infinity

  sentinelEls.value.forEach((node, i) => {
    if (!node) return
    const rect = node.getBoundingClientRect()
    const mid = rect.top + rect.height / 2
    const dist = Math.abs(mid - targetY)
    if (dist < bestDist) {
      bestDist = dist
      bestIdx = i
    }
  })

  if (bestIdx !== activeFeature.value) {
    activeFeature.value = bestIdx
  }
  rafId = requestAnimationFrame(updateActiveByProximity)
}

onMounted(() => {
  requestAnimationFrame(() => { mounted.value = true })

  wordInterval = window.setInterval(() => {
    currentWord.value = (currentWord.value + 1) % words.length
  }, 2400)

  rafId = requestAnimationFrame(updateActiveByProximity)

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    if (wordInterval) clearInterval(wordInterval)
  })
})
</script>

<style scoped>
.home {
  background: var(--surface);
  color: #f0f0f0;
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: clamp(6rem, 14vh, 10rem) clamp(1.5rem, 5vw, 4rem) 0;
}

.hero__dots { z-index: 0; }

.hero__gradient {
  position: absolute; inset: 0; z-index: 1;
  background:
    radial-gradient(ellipse 70% 50% at 20% 40%, rgba(153, 41, 234, 0.18), transparent),
    radial-gradient(ellipse 50% 60% at 80% 60%, rgba(204, 102, 218, 0.12), transparent),
    linear-gradient(to bottom, transparent 60%, var(--surface) 100%);
  pointer-events: none;
}

.hero__inner {
  position: relative; z-index: 2; max-width: 920px; margin: 0 auto; text-align: center;
}

.hero__kicker, .hero__line, .hero__sub, .hero__actions, .hero__stats {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.2,0.6,0.2,1), transform 0.7s cubic-bezier(0.2,0.6,0.2,1);
  transition-delay: var(--delay, 0s);
}
.hero__kicker.visible, .hero__line.visible, .hero__sub.visible,
.hero__actions.visible, .hero__stats.visible {
  opacity: 1; transform: translateY(0);
}

.hero__kicker {
  display: inline-block; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--pink); border: 1px solid rgba(204,102,218,0.35); border-radius: 100px;
  padding: 0.35rem 1.1rem; margin-bottom: 2rem;
}

.hero__headline {
  font-size: clamp(2.6rem, 6.5vw, 5.2rem); font-weight: 800; line-height: 1.08;
  letter-spacing: -0.035em; margin: 0;
}
.hero__line { display: block; }
.hero__line--accent {
  background: linear-gradient(90deg, var(--gold), var(--pink));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.hero__rotating-word {
  display: inline-block; color: var(--cyan); -webkit-text-fill-color: var(--cyan);
  animation: word-in 0.45s cubic-bezier(0.2,0.6,0.2,1);
}
@keyframes word-in {
  from { opacity: 0; transform: translateY(18px) rotateX(-40deg); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0) rotateX(0); filter: blur(0); }
}

.hero__sub {
  max-width: 600px; margin: 1.8rem auto 0;
  font-size: clamp(1rem, 1.6vw, 1.15rem); line-height: 1.7; color: var(--muted);
}

.hero__actions {
  display: flex; gap: 1rem; justify-content: center; margin-top: 2.5rem; flex-wrap: wrap;
}

/* buttons */
.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.8rem 1.8rem; border-radius: 0.6rem; font-weight: 700; font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.btn--primary {
  background: linear-gradient(135deg, var(--purple), var(--pink)); color: #fff;
  box-shadow: 0 6px 28px rgba(153,41,234,0.35);
}
.btn--primary:hover { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(153,41,234,0.5); }
.btn--ghost {
  background: transparent; color: var(--gold); border: 1px solid rgba(250,235,146,0.25);
}
.btn--ghost:hover { background: rgba(250,235,146,0.06); border-color: rgba(250,235,146,0.5); }
.btn--lg { padding: 1rem 2.4rem; font-size: 1.05rem; }

/* stats bar */
.hero__stats {
  position: relative; z-index: 2; display: flex; justify-content: center;
  gap: clamp(2rem, 5vw, 4rem); margin-top: auto; padding: 3rem 0 2.5rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.stat__number {
  font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--gold), var(--pink));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.stat__label {
  font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted);
}

/* ═══════════════════════════════════════════
   MARQUEE STRIP
   ═══════════════════════════════════════════ */
.marquee-strip {
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 1.2rem 0; background: var(--surface);
}
.marquee-strip__track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
.marquee-strip__set { display: flex; gap: 3rem; padding-right: 3rem; }
.marquee-strip__word {
  font-size: 0.85rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(255,255,255,0.22); white-space: nowrap;
}
@keyframes marquee { to { transform: translateX(-50%); } }

/* ═══════════════════════════════════════════
   FEATURES TIMELINE
   ═══════════════════════════════════════════ */
.features {
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem);
  max-width: 960px; margin: 0 auto;
}

.features__header { margin-bottom: 3.5rem; }
.features__kicker {
  font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--pink); margin-bottom: 0.8rem;
}
.features__title {
  font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; line-height: 1.12;
  letter-spacing: -0.03em; color: #fff;
}
.features__desc {
  margin-top: 1rem; max-width: 560px; font-size: 1rem; line-height: 1.7; color: var(--muted);
}

/* ── Timeline layout ── */
.tl { display: flex; flex-direction: column; gap: 2.5rem; }

.tl__row {
  display: grid; grid-template-columns: 200px 40px 1fr; gap: 0; align-items: start;
}

/* Meta (left column) */
.tl__meta {
  position: sticky; top: 6rem; display: flex; align-items: center; gap: 0.75rem;
  padding-top: 0.75rem;
}
.tl__icon {
  width: 40px; height: 40px; border-radius: 0.6rem; display: grid; place-items: center;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.tl__icon.active {
  background: var(--purple); border-color: var(--purple);
  box-shadow: 0 4px 20px rgba(153,41,234,0.4);
}
.tl__icon-num {
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.05em; color: var(--muted);
  transition: color 0.3s ease;
}
.tl__icon.active .tl__icon-num { color: #fff; }

.tl__meta-title {
  font-size: 0.82rem; font-weight: 600; color: var(--muted); white-space: nowrap;
}

/* Vertical line (center column) */
.tl__line {
  display: flex; flex-direction: column; align-items: center; padding-top: 1rem;
  position: relative; min-height: 100%;
}
.tl__line-track {
  width: 1px; flex: 1; background: rgba(255,255,255,0.08);
}
.tl__line-dot {
  width: 8px; height: 8px; border-radius: 50%; position: absolute; top: 1.35rem;
  background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.08);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.tl__line-dot.active {
  background: var(--purple); border-color: var(--pink);
  box-shadow: 0 0 12px rgba(153,41,234,0.5);
}

/* Content card (right column) */
.tl__card {
  border-radius: 1rem; border: 1px solid rgba(255,255,255,0.07);
  background: rgba(255,255,255,0.02); overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}
.tl__card.active {
  border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.035);
  box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
}

.tl__card-img {
  width: 100%; height: 220px; object-fit: cover; display: block;
  filter: brightness(0.7) saturate(0.9);
  transition: filter 0.4s ease, height 0.4s ease;
}
.tl__card.active .tl__card-img {
  filter: brightness(0.85) saturate(1); height: 260px;
}

.tl__card-body { padding: 1.4rem 1.5rem; }

.tl__card-title {
  font-size: 1.15rem; font-weight: 700; line-height: 1.3; color: rgba(255,255,255,0.6);
  transition: color 0.3s ease; margin: 0 0 0.5rem;
}
.tl__card-title.active { color: #fff; }

.tl__card-desc {
  font-size: 0.88rem; line-height: 1.65; color: rgba(161,161,170,0.7);
  transition: color 0.3s ease;
  display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.tl__card-desc.active {
  color: var(--muted); -webkit-line-clamp: unset; line-clamp: unset; overflow: visible;
}

/* Expandable section */
.tl__card-expand {
  display: grid; grid-template-rows: 0fr; opacity: 0;
  transition: grid-template-rows 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease;
}
.tl__card-expand.open { grid-template-rows: 1fr; opacity: 1; }
.tl__card-expand-inner { overflow: hidden; }

.tl__card-bullets {
  margin-top: 1rem; padding: 1rem 1.2rem; border-radius: 0.6rem;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);
}
.tl__card-bullets ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.tl__card-bullets li {
  display: flex; align-items: flex-start; gap: 0.6rem;
  font-size: 0.85rem; line-height: 1.6; color: var(--muted);
}
.tl__bullet-dot {
  width: 6px; height: 6px; border-radius: 50%; background: rgba(153,41,234,0.5);
  flex-shrink: 0; margin-top: 0.45rem;
}

.tl__card-action { display: flex; justify-content: flex-end; margin-top: 1rem; }
.tl__card-link {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-size: 0.82rem; font-weight: 700; color: var(--gold); text-decoration: none;
  padding: 0.45rem 0.9rem; border-radius: 0.5rem;
  background: rgba(250,235,146,0.06); border: 1px solid rgba(250,235,146,0.15);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
.tl__card-link:hover {
  background: rgba(250,235,146,0.12); border-color: rgba(250,235,146,0.3);
  transform: translateY(-1px);
}
.tl__card-link svg { transition: transform 0.2s ease; }
.tl__card-link:hover svg { transform: translate(2px, -2px); }

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
.cta {
  padding: clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  text-align: center; position: relative; overflow: hidden;
}
.cta::before {
  content: ''; position: absolute; inset: -40%;
  background: radial-gradient(ellipse at center, rgba(153,41,234,0.1), transparent 65%);
  pointer-events: none;
}
.cta__inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
.cta__title {
  font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; line-height: 1.12;
  letter-spacing: -0.03em;
  background: linear-gradient(90deg, var(--gold), var(--pink));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 1rem;
}
.cta__sub { color: var(--muted); font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .hero { padding-top: 5rem; min-height: auto; }
  .hero__headline { font-size: clamp(2rem, 8vw, 3rem); }
  .hero__stats { flex-wrap: wrap; gap: 1.5rem; }

  .tl__row { grid-template-columns: 32px 1fr; }
  .tl__meta { display: none; }
  .tl__line { padding-top: 0.5rem; }
  .tl__line-dot { top: 0.85rem; }
  .tl__card-img { height: 160px; }
  .tl__card.active .tl__card-img { height: 180px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__kicker, .hero__line, .hero__sub, .hero__actions, .hero__stats {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
  .marquee-strip__track { animation: none !important; }
  .hero__rotating-word { animation: none !important; }
  .tl__card, .tl__card-expand, .tl__card-desc, .tl__card-title,
  .tl__icon, .tl__line-dot, .tl__card-img {
    transition: none !important;
  }
  .tl__card-expand { opacity: 1 !important; grid-template-rows: 1fr !important; }
  .tl__card-desc { -webkit-line-clamp: unset !important; line-clamp: unset !important; overflow: visible !important; }
}
</style>
