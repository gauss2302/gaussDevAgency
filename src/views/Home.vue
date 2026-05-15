<template>
  <div class="home">
    <!-- ═══════════════════════════════════════════
         HERO  (unchanged — user explicitly liked it)
         ═══════════════════════════════════════════ -->
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
        <div class="stat" v-for="s in heroStats" :key="s.label">
          <span class="stat__number">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>

      <div class="hero__scroll-cue" :class="{ visible: mounted }" style="--delay: 1.2s" aria-hidden="true">
        <span>Scroll</span>
        <span class="hero__scroll-line" />
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         MARQUEE
         ═══════════════════════════════════════════ -->
    <section class="marquee-strip" aria-hidden="true">
      <div class="marquee-strip__track">
        <span v-for="n in 2" :key="n" class="marquee-strip__set" :aria-hidden="n > 1">
          <span v-for="w in marqueeWords" :key="w + n" class="marquee-strip__word">{{ w }}</span>
        </span>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         §01 — MANIFESTO (scroll-revealed editorial text)
         ═══════════════════════════════════════════ -->
    <section class="manifesto" aria-labelledby="manifesto-h">
      <div class="manifesto__inner">
        <p class="section-tag">§01 — Why we exist</p>
        <h2 id="manifesto-h" class="manifesto__text">
          <span
            v-for="(word, i) in manifestoWords"
            :key="i"
            class="manifesto__word"
            :class="{ accent: word.accent }"
            >{{ word.text }}&nbsp;</span
          >
        </h2>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         §02 — PINNED CAPABILITY SCROLLER  (the centerpiece)
         Outer wrapper is tall (capabilities × 80vh); inner is sticky so
         the user feels a "pinned" experience. activeIndex updates from a
         scroll listener gated by an IntersectionObserver — no always-on
         RAF loop.
         ═══════════════════════════════════════════ -->
    <section
      ref="pinSectionEl"
      class="pin-scroller"
      aria-labelledby="cap-h"
      :style="{ '--steps': capabilities.length }"
    >
      <div class="pin-scroller__stage">
        <div class="pin-scroller__layout">
          <!-- Left rail: heading + progress indicator + step list -->
          <div class="pin-scroller__rail">
            <p class="section-tag">§02 — Capabilities</p>
            <h2 id="cap-h" class="pin-scroller__heading">
              We ship<br />
              <span class="accent">at any complexity.</span>
            </h2>
            <p class="pin-scroller__lede">
              Five disciplines, one delivery team. Scroll to walk the stack.
            </p>

            <ol class="pin-scroller__steps" role="list">
              <li
                v-for="(cap, i) in capabilities"
                :key="cap.id"
                class="pin-step"
                :class="{ active: activeCap === i, done: i < activeCap }"
              >
                <span class="pin-step__num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="pin-step__name">{{ cap.title }}</span>
                <span class="pin-step__rail" aria-hidden="true">
                  <span class="pin-step__rail-fill" />
                </span>
              </li>
            </ol>
          </div>

          <!-- Right stage: active capability card crossfade -->
          <div class="pin-scroller__cards">
            <article
              v-for="(cap, i) in capabilities"
              :key="cap.id"
              class="pin-card"
              :class="{ active: activeCap === i }"
              :aria-hidden="activeCap !== i"
            >
              <div class="pin-card__index" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
                <span class="pin-card__index-bar" />
              </div>

              <h3 class="pin-card__title">{{ cap.title }}</h3>
              <p class="pin-card__pitch">{{ cap.pitch }}</p>

              <ul class="pin-card__deliverables">
                <li v-for="d in cap.deliverables" :key="d">
                  <span class="pin-card__check" aria-hidden="true">→</span>{{ d }}
                </li>
              </ul>

              <ul class="pin-card__chips" role="list">
                <li v-for="s in cap.stack" :key="s">{{ s }}</li>
              </ul>

              <div class="pin-card__glow" aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         §03 — COMPLEXITY LADDER  (horizontal snap on desktop, vertical on mobile)
         ═══════════════════════════════════════════ -->
    <section class="ladder" aria-labelledby="ladder-h">
      <header class="ladder__head">
        <p class="section-tag">§03 — Complexity</p>
        <h2 id="ladder-h" class="ladder__title">
          From weekend prototype<br />
          <span class="muted">to nine-figure throughput.</span>
        </h2>
        <p class="ladder__lede">
          Same delivery system, different scope. Scroll the cards →
        </p>
      </header>

      <div class="ladder__track" role="list">
        <article
          v-for="(tier, i) in complexity"
          :key="tier.id"
          class="ladder-card"
          role="listitem"
          :style="{ '--accent': tier.accent }"
        >
          <div class="ladder-card__head">
            <span class="ladder-card__index">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="ladder-card__when">{{ tier.timeline }}</span>
          </div>
          <h3 class="ladder-card__name">{{ tier.name }}</h3>
          <p class="ladder-card__one-liner">{{ tier.oneLiner }}</p>
          <p class="ladder-card__detail">{{ tier.detail }}</p>
          <ul class="ladder-card__tags">
            <li v-for="t in tier.tags" :key="t">{{ t }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         §04 — LIVE NUMBERS  (count up on scroll-in)
         ═══════════════════════════════════════════ -->
    <section ref="numbersEl" class="numbers" aria-labelledby="numbers-h">
      <header class="numbers__head">
        <p class="section-tag">§04 — Numbers</p>
        <h2 id="numbers-h" class="numbers__title">
          Shipped, not slideware.
        </h2>
      </header>
      <ul class="numbers__grid" role="list">
        <li v-for="(stat, i) in liveStats" :key="stat.label" class="big-stat">
          <span class="big-stat__value">
            <span>{{ animatedNumbers[i] }}</span><span class="big-stat__suffix">{{ stat.suffix }}</span>
          </span>
          <span class="big-stat__label">{{ stat.label }}</span>
          <span class="big-stat__rule" aria-hidden="true" />
        </li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════
         §05 — CTA
         ═══════════════════════════════════════════ -->
    <section class="cta">
      <div class="cta__inner">
        <p class="section-tag cta__tag">§05 — Next move</p>
        <h2 class="cta__title">
          Tell us about<br />
          <span class="accent">the thing you're shipping.</span>
        </h2>
        <p class="cta__sub">
          One reply within a business day. A sharper question, a small plan, or
          a polite "this isn't us — try X instead." Never a deck.
        </p>
        <div class="cta__actions">
          <router-link to="/contact" class="btn btn--primary btn--lg">Start a project</router-link>
          <router-link to="/services" class="btn btn--ghost btn--lg">Browse services</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DottedSurface from '@/components/ui/DottedSurface.vue'
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

/* ───────────────────────── HERO state ───────────────────────── */
const mounted = ref(false)
const currentWord = ref(0)
const words = ['scale.', 'convert.', 'delight.', 'last.']
let wordInterval: number | undefined

const heroStats = [
  { value: '40+', label: 'Projects shipped' },
  { value: '12', label: 'Engineers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<24h', label: 'Response time' },
]

const marqueeWords = [
  'Vue', 'React', 'TypeScript', 'Flutter', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Figma', 'CI/CD',
  'Next.js', 'Bun', 'GraphQL', 'OpenAI', 'pgvector', 'Terraform',
]

/* ───────────────────────── MANIFESTO content ───────────────────────── */
interface ManifestoWord {
  text: string
  accent?: boolean
}
const manifestoWords: ManifestoWord[] = (
  'Most agencies build slides. We build software that lasts — production-grade web, mobile, and AI products you can hand off to a team of one and they will still ship every Friday.'
)
  .split(' ')
  .map((w) => ({
    text: w,
    accent: ['software', 'lasts', 'production-grade', 'AI', 'Friday.'].includes(w),
  }))

/* ───────────────────────── CAPABILITY data ───────────────────────── */
interface Capability {
  id: number
  title: string
  pitch: string
  deliverables: string[]
  stack: string[]
}
const capabilities: Capability[] = [
  {
    id: 1,
    title: 'Product Discovery',
    pitch:
      'We turn a fuzzy idea into a tight, fundable scope — the part most agencies smooth over and most founders skip.',
    deliverables: [
      'Opportunity & risk map',
      'Lean PRD with success metrics',
      'Architecture sketch + cost ranges',
      'Honest go / no-go memo',
    ],
    stack: ['Miro', 'Notion', 'Figma', 'Linear', 'Loom'],
  },
  {
    id: 2,
    title: 'Web Applications',
    pitch:
      'Typed, observable web platforms — built so the next team can take over without a knowledge-transfer crisis.',
    deliverables: [
      'TypeScript end-to-end',
      'Auth, billing, RBAC out of the box',
      'CI + preview environments',
      'Performance + SLO budgets met at launch',
    ],
    stack: ['Vue 3', 'React', 'Next.js', 'Node', 'tRPC', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Mobile Apps',
    pitch:
      'Native-feeling apps for iOS and Android with the same engineering rigor as our web work — offline-first, deeply linked, store-ready.',
    deliverables: [
      'Cross-platform RN or native shells',
      'Offline state + conflict resolution',
      'Push, in-app messaging, deep links',
      'TestFlight + Play Console CI/CD',
    ],
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Reanimated'],
  },
  {
    id: 4,
    title: 'AI & Data',
    pitch:
      'Practical AI features that move a metric — not demos that get screenshotted on Twitter and never ship to production.',
    deliverables: [
      'Use-case selection + ROI model',
      'RAG, agents, structured-output flows',
      'Evals, guardrails, fallback paths',
      'Cost + latency monitoring',
    ],
    stack: ['OpenAI', 'Anthropic', 'pgvector', 'LangGraph', 'Modal'],
  },
  {
    id: 5,
    title: 'Cloud & Infra',
    pitch:
      'Infrastructure that boring engineers will thank you for — reproducible from source, deployable from main, observable by the on-call.',
    deliverables: [
      'Infra-as-code (Terraform / Pulumi)',
      'CI/CD with preview + canary deploys',
      'Logs, metrics, traces, alerts',
      'Cost guardrails + monthly dashboards',
    ],
    stack: ['AWS', 'GCP', 'Vercel', 'Terraform', 'Datadog', 'Grafana'],
  },
]

/* ───────────────────────── PINNED scroll progress ─────────────────────────
   activeCap drives crossfade between the right-side capability cards.
   We compute it from the section's scroll progress (0..1) and gate the
   work behind IntersectionObserver, so when the section is offscreen the
   scroll listener does no math at all.
*/
const activeCap = ref(0)
const pinSectionEl = ref<HTMLElement | null>(null)
let pinObserver: IntersectionObserver | null = null
let pinSectionInView = false
let pinScrollRaf = 0
let pinScrollPending = false

function computePinProgress() {
  pinScrollPending = false
  const el = pinSectionEl.value
  if (!el || !pinSectionInView) return
  const rect = el.getBoundingClientRect()
  const viewport = window.innerHeight
  const total = rect.height - viewport
  if (total <= 0) {
    activeCap.value = 0
    return
  }
  const raw = (-rect.top) / total
  const clamped = Math.max(0, Math.min(0.9999, raw))
  const idx = Math.min(capabilities.length - 1, Math.floor(clamped * capabilities.length))
  if (idx !== activeCap.value) activeCap.value = idx
}

function onPinScroll() {
  if (pinScrollPending) return
  pinScrollPending = true
  pinScrollRaf = requestAnimationFrame(computePinProgress)
}

/* ───────────────────────── COMPLEXITY ladder ───────────────────────── */
interface ComplexityTier {
  id: number
  name: string
  timeline: string
  oneLiner: string
  detail: string
  tags: string[]
  accent: string  // CSS color value (a token reference)
}
const complexity: ComplexityTier[] = [
  {
    id: 1,
    name: 'Weekend MVP',
    timeline: '1–2 weeks',
    oneLiner: 'Ship Monday, learn Tuesday.',
    detail:
      'A pre-built starter, an opinionated stack, and one senior engineer for a focused sprint. Perfect for landing pages, internal tools, or that one feature your investor wants to see by demo day.',
    tags: ['Landing pages', 'Internal tools', 'Demo prototypes'],
    accent: 'var(--cyan)',
  },
  {
    id: 2,
    name: 'Production v1',
    timeline: '2–4 months',
    oneLiner: 'The real thing, ready for real users.',
    detail:
      'Full pod (design + 2-3 engineers). Auth, payments, observability, accessibility, and a handover playbook. The version that survives the press release and the first 10,000 signups.',
    tags: ['SaaS MVP', 'Marketplace', 'B2B platform', 'Mobile launch'],
    accent: 'var(--pink)',
  },
  {
    id: 3,
    name: 'Enterprise scale',
    timeline: '6+ months',
    oneLiner: 'Nine-figure throughput, no drama.',
    detail:
      'Multi-region, multi-tenant, SOC 2 ready. We embed alongside your in-house team, set up the platform, ship the migration, and write the runbooks before we leave.',
    tags: ['Migration', 'Multi-tenant', 'SOC 2', 'Embedded team'],
    accent: 'var(--purple)',
  },
  {
    id: 4,
    name: 'AI-native build',
    timeline: 'From 6 weeks',
    oneLiner: 'Agents, RAG, evals, ship.',
    detail:
      'When AI is the product, not a chatbot bolted on top. We pick the right model, write the evals, design the failure paths, and instrument cost + latency from day one.',
    tags: ['RAG pipelines', 'Agents', 'Vector search', 'Evals'],
    accent: 'var(--gold)',
  },
]

/* ───────────────────────── LIVE NUMBERS (counter on scroll-in) ───────────────────────── */
interface BigStat {
  value: number
  suffix: string
  label: string
}
const liveStats: BigStat[] = [
  { value: 40, suffix: '+', label: 'Products live in production' },
  { value: 12, suffix: '', label: 'Engineers & designers' },
  { value: 99, suffix: '.9%', label: 'Median uptime, last 12mo' },
  { value: 24, suffix: 'h', label: 'Median response time' },
]
const animatedNumbers = ref<(string | number)[]>(liveStats.map(() => 0))
const numbersEl = ref<HTMLElement | null>(null)
let numbersObserver: IntersectionObserver | null = null
let numbersAnimated = false

function animateCounter(idx: number, target: number, suffixIsDecimal: boolean) {
  const duration = 1400
  const start = performance.now()
  const ease = (t: number) => 1 - Math.pow(1 - t, 3)
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const v = ease(t) * target
    animatedNumbers.value[idx] = suffixIsDecimal ? v.toFixed(0) : Math.round(v)
    if (t < 1) requestAnimationFrame(step)
    else animatedNumbers.value[idx] = suffixIsDecimal ? target.toFixed(0) : target
  }
  requestAnimationFrame(step)
}

/* ───────────────────────── LIFECYCLE ───────────────────────── */
onMounted(() => {
  /* Hero entrance */
  requestAnimationFrame(() => {
    mounted.value = true
  })

  /* Rotating word */
  wordInterval = window.setInterval(() => {
    currentWord.value = (currentWord.value + 1) % words.length
  }, 2400)

  /* Pinned scroller — IntersectionObserver gates the scroll listener so it
     does literally zero work when the section is offscreen. */
  if (pinSectionEl.value && typeof IntersectionObserver !== 'undefined') {
    pinObserver = new IntersectionObserver(
      ([entry]) => {
        pinSectionInView = entry.isIntersecting
        if (pinSectionInView) {
          computePinProgress()
          window.addEventListener('scroll', onPinScroll, { passive: true })
        } else {
          window.removeEventListener('scroll', onPinScroll)
        }
      },
      { rootMargin: '0px', threshold: 0 },
    )
    pinObserver.observe(pinSectionEl.value)
  }

  /* Live numbers — fire once when the section enters view */
  if (numbersEl.value && typeof IntersectionObserver !== 'undefined') {
    numbersObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !numbersAnimated) {
          numbersAnimated = true
          liveStats.forEach((s, i) => animateCounter(i, s.value, s.suffix === '.9%'))
          numbersObserver?.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.2 },
    )
    numbersObserver.observe(numbersEl.value)
  }
})

onBeforeUnmount(() => {
  if (wordInterval) clearInterval(wordInterval)
  cancelAnimationFrame(pinScrollRaf)
  window.removeEventListener('scroll', onPinScroll)
  pinObserver?.disconnect()
  pinObserver = null
  numbersObserver?.disconnect()
  numbersObserver = null
})

/* keep TypeScript happy about the unused `computed` import if treeshaking misses */
void computed
void watch
</script>

<style scoped>
.home {
  background: var(--surface);
  color: var(--fg);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.section-tag {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 1.25rem;
}

.muted { color: var(--muted); }
.accent {
  background: linear-gradient(92deg, var(--gold), var(--pink) 50%, var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ═══════════════════════════════════════════
   HERO  (preserved — same look, same animations)
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

.hero__kicker, .hero__line, .hero__sub, .hero__actions, .hero__stats, .hero__scroll-cue {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.7s cubic-bezier(0.2,0.6,0.2,1), transform 0.7s cubic-bezier(0.2,0.6,0.2,1);
  transition-delay: var(--delay, 0s);
}
.hero__kicker.visible, .hero__line.visible, .hero__sub.visible,
.hero__actions.visible, .hero__stats.visible, .hero__scroll-cue.visible {
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

.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.95rem 1.8rem; border-radius: 0.7rem; font-weight: 700; font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.btn--primary {
  background: linear-gradient(135deg, var(--purple), var(--pink)); color: #fff;
  box-shadow: 0 8px 28px -8px rgba(153,41,234,0.55);
}
.btn--primary:hover { transform: translateY(-2px); box-shadow: 0 14px 40px -10px rgba(153,41,234,0.7); }
.btn--ghost {
  background: rgba(255,255,255,0.02); color: var(--fg);
  border: 1px solid rgba(255,255,255,0.12);
}
.btn--ghost:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.25); transform: translateY(-2px); }
.btn--lg { padding: 1.05rem 2.2rem; font-size: 1.02rem; }

.hero__stats {
  position: relative; z-index: 2; display: flex; justify-content: center;
  gap: clamp(2rem, 5vw, 4rem); margin-top: auto; padding: 3rem 0 2rem;
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

.hero__scroll-cue {
  position: relative; z-index: 2;
  display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
  padding-bottom: 2rem;
  font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted);
}
.hero__scroll-line {
  width: 1px; height: 38px;
  background: linear-gradient(to bottom, var(--muted), transparent);
  animation: scroll-cue 1.8s ease-in-out infinite;
}
@keyframes scroll-cue {
  0%, 100% { transform: scaleY(1); transform-origin: top; opacity: 0.6; }
  50% { transform: scaleY(0.5); transform-origin: top; opacity: 1; }
}

/* ═══════════════════════════════════════════
   MARQUEE
   ═══════════════════════════════════════════ */
.marquee-strip {
  overflow: hidden;
  border-block: 1px solid rgba(255,255,255,0.06);
  padding: 1.2rem 0;
  background: var(--surface);
}
.marquee-strip__track { display: flex; width: max-content; animation: marquee 32s linear infinite; }
.marquee-strip__set { display: flex; gap: 3rem; padding-right: 3rem; }
.marquee-strip__word {
  font-size: 0.85rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(255,255,255,0.22); white-space: nowrap;
}
@keyframes marquee { to { transform: translateX(-50%); } }

/* ═══════════════════════════════════════════
   §01 — MANIFESTO  (scroll-revealed words)
   Uses CSS scroll-driven animation (animation-timeline) for buttery
   word-by-word reveal, with a per-word IntersectionObserver fallback
   handled below.
   ═══════════════════════════════════════════ */
.manifesto {
  padding: clamp(8rem, 18vh, 14rem) clamp(1.5rem, 5vw, 4rem);
  max-width: 1280px;
  margin: 0 auto;
}

.manifesto__inner { max-width: 980px; margin: 0 auto; }

.manifesto__text {
  font-size: clamp(1.8rem, 4.2vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  margin: 0;
  color: var(--fg);
}

.manifesto__word {
  display: inline-block;
  color: rgba(255, 255, 255, 0.16);
  transition: color 0.4s ease;
  will-change: color;
}
.manifesto__word.accent {
  background: linear-gradient(92deg, var(--gold), var(--pink) 50%, var(--purple));
  -webkit-background-clip: text;
  background-clip: text;
}

/* Modern path: scroll-driven animation. As the section travels through
   the viewport the words become readable. */
@supports (animation-timeline: view()) {
  .manifesto__word {
    animation: word-lighten linear both;
    animation-timeline: view();
    animation-range: cover 15% cover 60%;
  }
  .manifesto__word.accent {
    animation: word-lighten-accent linear both;
    animation-timeline: view();
    animation-range: cover 15% cover 60%;
  }
}
@keyframes word-lighten {
  from { color: rgba(255, 255, 255, 0.14); }
  to { color: var(--fg); }
}
@keyframes word-lighten-accent {
  from { color: rgba(255, 255, 255, 0.14); -webkit-text-fill-color: rgba(255, 255, 255, 0.14); }
  to { color: transparent; -webkit-text-fill-color: transparent; }
}

/* Fallback for browsers without scroll-driven animation:
   IntersectionObserver isn't needed — just light up everything once the
   section is visible. The transition handles smoothness. */
@supports not (animation-timeline: view()) {
  .manifesto:hover .manifesto__word,
  .manifesto:focus-within .manifesto__word {
    color: var(--fg);
  }
}

/* ═══════════════════════════════════════════
   §02 — PINNED CAPABILITY SCROLLER
   Outer wrapper height = capabilities × 80vh so each "step" of the
   scroll dwells for ~80vh. Inner stage is sticky.
   ═══════════════════════════════════════════ */
.pin-scroller {
  position: relative;
  /* total scroll length: one viewport per step + a little settle room */
  height: calc(var(--steps, 5) * 80vh + 30vh);
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  background: linear-gradient(to bottom, transparent, rgba(204, 102, 218, 0.025) 50%, transparent);
}

.pin-scroller__stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

.pin-scroller__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(2rem, 6vw, 5rem);
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
}

.pin-scroller__rail {
  max-width: 460px;
}
.pin-scroller__heading {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.04;
  margin: 0 0 1rem;
}
.pin-scroller__lede {
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.65;
  color: var(--muted);
  margin: 0 0 2rem;
}

.pin-scroller__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
}

.pin-step {
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: auto auto;
  column-gap: 0.85rem;
  align-items: center;
  padding: 0.5rem 0;
  font-feature-settings: 'tnum';
  transition: color 0.3s ease;
  color: var(--dim);
}
.pin-step.active { color: var(--fg); }
.pin-step.done { color: rgba(240, 240, 240, 0.55); }

.pin-step__num {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.pin-step__name {
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: -0.005em;
}
.pin-step__rail {
  grid-column: 1 / -1;
  height: 2px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.06);
  margin-top: 0.4rem;
  overflow: hidden;
  position: relative;
}
.pin-step__rail-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--gold), var(--pink));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pin-step.done .pin-step__rail-fill { transform: scaleX(1); }
.pin-step.active .pin-step__rail-fill { transform: scaleX(0.7); }

/* Cards stage (right side) — stacked, only the active one is shown */
.pin-scroller__cards {
  position: relative;
  height: clamp(440px, 62vh, 600px);
}

.pin-card {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: clamp(1.75rem, 3vw, 2.5rem);
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  opacity: 0;
  transform: translateY(28px) scale(0.985);
  transition:
    opacity 0.5s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.5s cubic-bezier(0.2, 0.6, 0.2, 1);
  pointer-events: none;
  overflow: hidden;
  isolation: isolate;
}
.pin-card.active {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.pin-card__glow {
  position: absolute;
  inset: -1px;
  z-index: -1;
  background:
    radial-gradient(ellipse 60% 80% at 10% 0%, rgba(250, 235, 146, 0.08), transparent 50%),
    radial-gradient(ellipse 80% 60% at 100% 100%, rgba(204, 102, 218, 0.08), transparent 50%);
  pointer-events: none;
}

.pin-card__index {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-feature-settings: 'tnum';
  font-size: 2.4rem;
  font-weight: 200;
  letter-spacing: -0.03em;
  color: var(--gold);
  line-height: 1;
}
.pin-card__index-bar {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.pin-card__title {
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  color: var(--fg);
}

.pin-card__pitch {
  font-size: clamp(0.98rem, 1.3vw, 1.1rem);
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
  max-width: 56ch;
}

.pin-card__deliverables {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.45rem;
}
.pin-card__deliverables li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.94rem;
  line-height: 1.5;
  color: rgba(240, 240, 240, 0.9);
}
.pin-card__check {
  flex-shrink: 0;
  color: var(--gold);
  font-weight: 700;
  margin-top: 0.05em;
}

.pin-card__chips {
  list-style: none;
  padding: 0;
  margin: auto 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pin-card__chips li {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(240, 240, 240, 0.88);
}

/* ═══════════════════════════════════════════
   §03 — COMPLEXITY LADDER
   Horizontal scroll-snap on desktop, vertical stack on mobile (same DOM).
   ═══════════════════════════════════════════ */
.ladder {
  padding: clamp(5rem, 11vh, 8rem) 0 clamp(4rem, 9vh, 6rem);
  position: relative;
  overflow: hidden;
}

.ladder__head {
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  max-width: 1240px;
  margin: 0 auto clamp(2.5rem, 6vh, 4rem);
}
.ladder__title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin: 0 0 1rem;
}
.ladder__lede {
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

.ladder__track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(320px, 28vw);
  gap: 1.25rem;
  padding: 0.4rem clamp(1.5rem, 5vw, 4rem) 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: rgba(204, 102, 218, 0.35) transparent;
}
.ladder__track::-webkit-scrollbar { height: 6px; }
.ladder__track::-webkit-scrollbar-thumb {
  background: rgba(204, 102, 218, 0.3);
  border-radius: 4px;
}

.ladder-card {
  scroll-snap-align: start;
  padding: 1.75rem 1.75rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  position: relative;
  isolation: isolate;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.ladder-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(160deg, color-mix(in oklab, var(--accent) 8%, transparent), transparent 55%);
  pointer-events: none;
  z-index: -1;
}
.ladder-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in oklab, var(--accent) 40%, var(--border));
  box-shadow: 0 24px 60px -28px color-mix(in oklab, var(--accent) 60%, transparent);
}

.ladder-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}
.ladder-card__index {
  font-family: 'Inter', system-ui, sans-serif;
  font-feature-settings: 'tnum';
  font-size: 1.65rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: var(--accent);
  line-height: 1;
}
.ladder-card__when {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dim);
  padding: 0.3rem 0.65rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.ladder-card__name {
  font-size: clamp(1.4rem, 2.2vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0;
  color: var(--fg);
}
.ladder-card__one-liner {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0;
  letter-spacing: -0.005em;
}
.ladder-card__detail {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}
.ladder-card__tags {
  list-style: none;
  padding: 0;
  margin: auto 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ladder-card__tags li {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(240, 240, 240, 0.85);
}

/* ═══════════════════════════════════════════
   §04 — LIVE NUMBERS
   ═══════════════════════════════════════════ */
.numbers {
  padding: clamp(5rem, 12vh, 8rem) clamp(1.5rem, 5vw, 4rem);
  max-width: 1240px;
  margin: 0 auto;
}
.numbers__head {
  margin-bottom: clamp(2.5rem, 6vh, 4rem);
}
.numbers__title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin: 0;
}

.numbers__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.big-stat {
  padding: 1.75rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
}
.big-stat__value {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 0.95;
  background: linear-gradient(135deg, var(--gold), var(--pink) 55%, var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: baseline;
}
.big-stat__suffix {
  font-size: 0.55em;
  margin-left: 0.05em;
}
.big-stat__label {
  font-size: 0.88rem;
  color: var(--muted);
  max-width: 22ch;
  line-height: 1.45;
}
.big-stat__rule {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--pink), transparent 70%);
  opacity: 0.35;
}

/* ═══════════════════════════════════════════
   §05 — CTA
   ═══════════════════════════════════════════ */
.cta {
  padding: clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem) clamp(6rem, 14vh, 10rem);
}
.cta__inner {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: clamp(3rem, 7vh, 5rem) clamp(1.5rem, 4vw, 3rem);
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(153, 41, 234, 0.18), transparent),
    radial-gradient(ellipse 60% 80% at 50% 100%, rgba(204, 102, 218, 0.1), transparent),
    rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  overflow: hidden;
  isolation: isolate;
}
.cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.4;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  pointer-events: none;
  z-index: -1;
}
.cta__tag { color: var(--gold); }
.cta__title {
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.04;
  margin: 0 0 1.1rem;
}
.cta__sub {
  font-size: clamp(0.98rem, 1.3vw, 1.1rem);
  line-height: 1.7;
  color: var(--muted);
  max-width: 56ch;
  margin: 0 auto 2rem;
}
.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 1024px) {
  .pin-scroller__layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .pin-scroller__rail { max-width: 100%; }
  .pin-scroller__cards { height: clamp(380px, 56vh, 480px); }
  .numbers__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero { min-height: auto; padding-top: clamp(6rem, 12vh, 8rem); padding-bottom: 0; }
  .hero__stats { gap: 1.5rem 2rem; flex-wrap: wrap; padding: 2.5rem 0 1.5rem; }

  .marquee-strip__set { gap: 2rem; padding-right: 2rem; }

  .manifesto {
    padding: clamp(5rem, 12vh, 8rem) clamp(1.5rem, 5vw, 2rem);
  }

  /* On mobile, kill the pin and let the section play as a normal scroll
     of native cards — this preserves "scrolling as the experience" but
     replaces the desktop pin with a smooth vertical stack the user can
     scroll naturally. */
  .pin-scroller {
    height: auto;
    padding: clamp(4rem, 10vh, 6rem) clamp(1.5rem, 5vw, 2rem);
  }
  .pin-scroller__stage {
    position: static;
    height: auto;
    display: block;
  }
  .pin-scroller__layout {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    align-items: stretch;
  }
  .pin-scroller__steps { display: none; }
  .pin-scroller__cards {
    position: static;
    height: auto;
    display: grid;
    gap: 1rem;
  }
  .pin-card {
    position: static;
    inset: auto;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    height: auto;
    min-height: 340px;
  }

  .ladder__track {
    grid-auto-columns: 85vw;
    padding-inline: 1.25rem 1.25rem;
  }

  .numbers__grid { grid-template-columns: 1fr; }
  .big-stat { padding-block: 1.5rem 0.5rem; }
}

/* Reduced-motion users get instant reveals + no marquee */
@media (prefers-reduced-motion: reduce) {
  .marquee-strip__track { animation: none; }
  .hero__scroll-line { animation: none; }
  .hero__rotating-word { animation: none; }
}
</style>
