<template>
  <div class="page">
    <!-- ───────────────────────────── HERO ───────────────────────────── -->
    <section class="hero" aria-labelledby="services-headline">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__grain" />
        <div class="hero__glow hero__glow--purple" />
        <div class="hero__glow hero__glow--pink" />
      </div>

      <div class="hero__inner">
        <p class="kicker" :class="{ visible: mounted }" style="--delay: 0.05s">
          <span class="kicker__dot" />Services
        </p>

        <h1
          id="services-headline"
          class="hero__headline"
        >
          <span class="line" :class="{ visible: mounted }" style="--delay: 0.15s">Engineering.</span>
          <span class="line line--accent" :class="{ visible: mounted }" style="--delay: 0.3s">Design.</span>
          <span class="line" :class="{ visible: mounted }" style="--delay: 0.45s">Outcomes.</span>
        </h1>

        <p class="hero__sub" :class="{ visible: mounted }" style="--delay: 0.6s">
          We're a senior product team. We help founders and product leaders
          ship software that lasts — strategy, design, and engineering under
          one roof, with no handoffs and no agency theatre.
        </p>

        <div class="hero__actions" :class="{ visible: mounted }" style="--delay: 0.75s">
          <router-link to="/contact" class="btn btn--primary">Start a project</router-link>
          <a href="#engagements" class="btn btn--ghost">See engagement models &darr;</a>
        </div>
      </div>

      <ul class="hero__stats" :class="{ visible: mounted }" style="--delay: 0.9s" aria-label="Key numbers">
        <li v-for="s in stats" :key="s.label" class="stat">
          <span class="stat__value">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </li>
      </ul>
    </section>

    <!-- ───────────────────────────── §01 CAPABILITIES ───────────────────────────── -->
    <section class="chapter capabilities" aria-labelledby="cap-h">
      <header class="chapter__head" data-reveal>
        <p class="chapter__num">§01 — Capabilities</p>
        <h2 id="cap-h" class="chapter__title">
          Six disciplines.<br />
          <span class="muted">One delivery team.</span>
        </h2>
        <p class="chapter__lede">
          We don't subcontract. Every brief is delivered by the same people from
          discovery to launch — strategists, designers, and engineers paired in
          working groups of 2-5.
        </p>
      </header>

      <ol class="cap-list">
        <li
          v-for="(cap, i) in capabilities"
          :key="cap.id"
          class="cap"
          data-reveal
          :style="{ '--stagger': `${i * 60}ms` }"
        >
          <div class="cap__num">{{ formatNum(i + 1) }}</div>
          <div class="cap__body">
            <div class="cap__heading">
              <h3 class="cap__title">{{ cap.title }}</h3>
              <p class="cap__pitch">{{ cap.pitch }}</p>
            </div>
            <div class="cap__meta">
              <div class="cap__deliverables">
                <p class="meta-label">Deliverables</p>
                <ul>
                  <li v-for="d in cap.deliverables" :key="d">{{ d }}</li>
                </ul>
              </div>
              <div class="cap__stack">
                <p class="meta-label">Stack</p>
                <ul class="chips" role="list">
                  <li v-for="t in cap.stack" :key="t" class="chip">{{ t }}</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <!-- ───────────────────────────── §02 ENGAGEMENTS ───────────────────────────── -->
    <section id="engagements" class="chapter engagements" aria-labelledby="eng-h">
      <header class="chapter__head" data-reveal>
        <p class="chapter__num">§02 — Engagements</p>
        <h2 id="eng-h" class="chapter__title">
          Three ways<br />
          <span class="muted">to put us to work.</span>
        </h2>
        <p class="chapter__lede">
          Pick the engagement that matches your stage. We'll tell you if it's
          the wrong fit — and recommend a sharper one.
        </p>
      </header>

      <div class="eng-grid">
        <article
          v-for="(eng, i) in engagements"
          :key="eng.id"
          class="eng"
          :class="{ 'eng--featured': eng.featured }"
          data-reveal
          :style="{ '--stagger': `${i * 80}ms` }"
        >
          <header class="eng__top">
            <p class="eng__kind">{{ eng.kind }}</p>
            <h3 class="eng__name">{{ eng.name }}</h3>
            <p class="eng__for"><strong>Best for </strong>{{ eng.bestFor }}</p>
          </header>

          <dl class="eng__meta">
            <div>
              <dt>Timeline</dt>
              <dd>{{ eng.timeline }}</dd>
            </div>
            <div>
              <dt>Starting from</dt>
              <dd class="eng__price">{{ eng.price }}</dd>
            </div>
          </dl>

          <ul class="eng__included" aria-label="What's included">
            <li v-for="x in eng.included" :key="x">
              <span class="eng__check" aria-hidden="true">✓</span>{{ x }}
            </li>
          </ul>

          <router-link to="/contact" class="eng__cta">
            {{ eng.cta }} <span aria-hidden="true">→</span>
          </router-link>
        </article>
      </div>
    </section>

    <!-- ───────────────────────────── §03 PROCESS ───────────────────────────── -->
    <section class="chapter process" aria-labelledby="proc-h">
      <header class="chapter__head" data-reveal>
        <p class="chapter__num">§03 — Process</p>
        <h2 id="proc-h" class="chapter__title">
          Four phases.<br />
          <span class="muted">No surprises.</span>
        </h2>
        <p class="chapter__lede">
          Every engagement runs on the same operating system — weekly demos,
          written decisions, no Friday-night slack channels.
        </p>
      </header>

      <ol class="phases">
        <li
          v-for="(p, i) in phases"
          :key="p.id"
          class="phase"
          data-reveal
          :style="{ '--stagger': `${i * 80}ms` }"
        >
          <div class="phase__index" aria-hidden="true">{{ formatNum(i + 1) }}</div>
          <div class="phase__rail" aria-hidden="true" />
          <div class="phase__card">
            <p class="phase__duration">{{ p.duration }}</p>
            <h3 class="phase__name">{{ p.name }}</h3>
            <p class="phase__desc">{{ p.desc }}</p>
            <p class="meta-label">You leave with</p>
            <ul class="phase__deliverables">
              <li v-for="d in p.deliverables" :key="d">{{ d }}</li>
            </ul>
            <p class="phase__signal">
              <strong>Signal it worked: </strong>{{ p.signal }}
            </p>
          </div>
        </li>
      </ol>
    </section>

    <!-- ───────────────────────────── §04 STACK ───────────────────────────── -->
    <section class="chapter stack" aria-labelledby="stack-h">
      <header class="chapter__head" data-reveal>
        <p class="chapter__num">§04 — Stack</p>
        <h2 id="stack-h" class="chapter__title">
          What we ship with.<br />
          <span class="muted">Boring where it matters.</span>
        </h2>
        <p class="chapter__lede">
          We favour technologies with five-year track records and three-year
          support roadmaps. Novelty is a tax our clients shouldn't pay.
        </p>
      </header>

      <div class="stack-grid">
        <div
          v-for="(grp, i) in stack"
          :key="grp.id"
          class="stack-group"
          data-reveal
          :style="{ '--stagger': `${i * 50}ms` }"
        >
          <h3 class="stack-group__title">{{ grp.title }}</h3>
          <ul class="stack-group__items">
            <li v-for="t in grp.items" :key="t">{{ t }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ───────────────────────────── §05 FAQ ───────────────────────────── -->
    <section class="chapter faq" aria-labelledby="faq-h">
      <header class="chapter__head" data-reveal>
        <p class="chapter__num">§05 — FAQ</p>
        <h2 id="faq-h" class="chapter__title">
          The questions<br />
          <span class="muted">we hear every week.</span>
        </h2>
      </header>

      <ul class="faq-list">
        <li
          v-for="(q, i) in faqs"
          :key="q.id"
          class="faq-item"
          :class="{ open: openFaq === q.id }"
          data-reveal
          :style="{ '--stagger': `${i * 40}ms` }"
        >
          <button
            type="button"
            class="faq-item__q"
            :aria-expanded="openFaq === q.id"
            :aria-controls="`faq-${q.id}`"
            @click="toggleFaq(q.id)"
          >
            <span class="faq-item__q-text">{{ q.q }}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div
            :id="`faq-${q.id}`"
            class="faq-item__a"
            role="region"
            :aria-hidden="openFaq !== q.id"
          >
            <p>{{ q.a }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- ───────────────────────────── §06 CTA ───────────────────────────── -->
    <section class="chapter final-cta" aria-labelledby="cta-h">
      <div class="final-cta__inner" data-reveal>
        <p class="chapter__num">§06 — Next step</p>
        <h2 id="cta-h" class="final-cta__title">
          Tell us<br />
          <span class="accent">what you're shipping.</span>
        </h2>
        <p class="final-cta__lede">
          We reply within one business day with a sharper question, a small
          plan, or a polite "this isn't us — try X instead." No decks. No
          dance. Just an answer.
        </p>
        <div class="final-cta__actions">
          <router-link to="/contact" class="btn btn--primary btn--lg">
            Start a conversation
          </router-link>
          <a
            href="mailto:devshilov@gmail.com"
            class="btn btn--ghost btn--lg"
          >
            devshilov@gmail.com
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  path: '/services',
  title: 'Services — Web, Mobile, AI, Cloud Development',
  description:
    'Six disciplines, one delivery team. Custom software development: web platforms, mobile apps, AI integration, cloud infrastructure, and product design.',
})

/* ─── hero reveal flag ─── */
const mounted = ref(false)

/* ─── faq open state ─── */
const openFaq = ref<number | null>(1)
function toggleFaq(id: number) {
  openFaq.value = openFaq.value === id ? null : id
}

/* ─── 01: numbered helper ─── */
function formatNum(n: number): string {
  return n.toString().padStart(2, '0')
}

/* ─── scroll reveal via IntersectionObserver
   Replaces the always-on RAF pattern. Sections reveal once when 15% of
   their bounding box enters the viewport. ─── */
let observer: IntersectionObserver | null = null

onMounted(() => {
  requestAnimationFrame(() => {
    mounted.value = true
  })

  if (typeof IntersectionObserver === 'undefined') {
    // Safety: if the API is missing, just reveal everything immediately.
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('revealed')
    })
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
  )

  document.querySelectorAll('[data-reveal]').forEach((el) => observer!.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})

/* ─── content ─── */
const stats = [
  { value: '8+', label: 'Years shipping' },
  { value: '40+', label: 'Products live' },
  { value: '12', label: 'Industries' },
  { value: '99.9%', label: 'Median uptime' },
]

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
    title: 'Product Strategy',
    pitch:
      'Turn a fuzzy idea into a tight scope. We do the thinking that founders skip and project managers smooth over.',
    deliverables: [
      'Opportunity & risk map',
      'Lean PRD with success metrics',
      'Architecture sketch + delivery plan',
      'Go / no-go recommendation',
    ],
    stack: ['Miro', 'Notion', 'Figma', 'Linear', 'Loom'],
  },
  {
    id: 2,
    title: 'Web Applications',
    pitch:
      'Production web platforms — typed, observable, and easy for the next team to maintain after we hand them over.',
    deliverables: [
      'Type-safe frontend + API contracts',
      'Auth, billing, RBAC out of the box',
      'CI + preview environments',
      'Performance budgets + SLO targets',
    ],
    stack: ['TypeScript', 'Vue', 'React', 'Next.js', 'Node', 'PostgreSQL', 'tRPC'],
  },
  {
    id: 3,
    title: 'Mobile Apps',
    pitch:
      'Native-feeling apps for iOS and Android — built with the same TypeScript discipline as our web work so teams of one can maintain them.',
    deliverables: [
      'Cross-platform RN or native shells',
      'Offline-first state, sync, conflict rules',
      'Push, in-app messaging, deep links',
      'TestFlight + Play Console CI',
    ],
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Reanimated'],
  },
  {
    id: 4,
    title: 'Cloud & Infrastructure',
    pitch:
      'Infra that boring engineers will thank you for. Reproducible from source, deployable from main, observable by the on-call.',
    deliverables: [
      'Infra-as-code (Terraform / Pulumi)',
      'CI/CD with preview + canary',
      'Logs, metrics, traces, alerts',
      'Cost guardrails + dashboards',
    ],
    stack: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Datadog', 'Grafana'],
  },
  {
    id: 5,
    title: 'AI & Data',
    pitch:
      'Practical AI features that move a metric — not demos that get screenshotted on Twitter and never ship.',
    deliverables: [
      'Use-case selection + ROI model',
      'RAG, agents, structured-output flows',
      'Evals, guardrails, fallbacks',
      'Cost + latency monitoring',
    ],
    stack: ['OpenAI', 'Anthropic', 'pgvector', 'LangGraph', 'Pinecone', 'Modal'],
  },
  {
    id: 6,
    title: 'Product Design',
    pitch:
      'Interfaces that explain themselves. Design systems that survive three engineers, two PMs, and a rebrand.',
    deliverables: [
      'Information architecture + flows',
      'Design tokens + reusable components',
      'WCAG 2.2 AA audit pass',
      'Interactive prototype for user testing',
    ],
    stack: ['Figma', 'Tokens Studio', 'Framer', 'Storybook', 'Maze'],
  },
]

interface Engagement {
  id: number
  kind: string
  name: string
  bestFor: string
  timeline: string
  price: string
  included: string[]
  cta: string
  featured?: boolean
}

const engagements: Engagement[] = [
  {
    id: 1,
    kind: 'Sprint',
    name: 'Discovery',
    bestFor: 'founders pre-committing to a 6-figure build.',
    timeline: '1–2 weeks · fixed',
    price: '$6k',
    included: [
      'Stakeholder interviews',
      'User-flow + risk map',
      'Architecture options + cost ranges',
      'Lean PRD you own forever',
      'Honest go / no-go memo',
    ],
    cta: 'Start a discovery',
  },
  {
    id: 2,
    kind: 'Fixed scope',
    name: 'Build',
    bestFor: 'a defined MVP, redesign, or v2 launch.',
    timeline: '4–16 weeks · fixed',
    price: '$28k',
    included: [
      'Cross-functional pod (design + eng)',
      'Weekly demo and decision log',
      'Production-ready ship at end',
      'Two weeks of bug-fix warranty',
      'Handover docs + recorded walkthrough',
    ],
    cta: 'Brief a build',
    featured: true,
  },
  {
    id: 3,
    kind: 'Ongoing',
    name: 'Embedded',
    bestFor: 'product teams that need senior bandwidth for 3+ months.',
    timeline: '3 months min · rolling',
    price: '$18k/mo',
    included: [
      '1–3 senior contributors',
      'Async-first, time-zone friendly',
      'Sprint planning in your tools',
      'Shared on-call (optional)',
      'Month-to-month after first 3',
    ],
    cta: 'Request a team',
  },
]

interface Phase {
  id: number
  name: string
  duration: string
  desc: string
  deliverables: string[]
  signal: string
}

const phases: Phase[] = [
  {
    id: 1,
    name: 'Discover',
    duration: 'Week 1–2',
    desc: 'We map the territory before we start carving. Stakeholders, users, constraints, and the one or two risks that could sink the project.',
    deliverables: ['PRD + success metrics', 'User-journey map', 'Architecture sketch', 'Go / no-go memo'],
    signal: 'You can explain the project in one paragraph to your CFO.',
  },
  {
    id: 2,
    name: 'Design',
    duration: 'Week 2–5',
    desc: 'Click-through prototypes before pixels, design tokens before components. We test the riskiest flows on real users in week 3.',
    deliverables: ['Token-driven design system', 'Interactive Figma prototype', 'Usability-test recordings', 'Engineering-ready handoff'],
    signal: 'Eight target users can complete the core flow without help.',
  },
  {
    id: 3,
    name: 'Build',
    duration: 'Week 4–14',
    desc: 'Feature-by-feature delivery on a green main branch. Demos every Friday, decisions written down, no surprises in the all-hands.',
    deliverables: ['Production codebase + CI/CD', 'Test suite + observability', 'Weekly demo + decision log', 'Performance + a11y budgets met'],
    signal: 'Friday demo is shippable. Every Friday.',
  },
  {
    id: 4,
    name: 'Grow',
    duration: 'Post-launch',
    desc: 'Optional. We stay on for the first 30–90 days to fix the unknown-unknowns, instrument what matters, and write the playbook for your team.',
    deliverables: ['Launch monitoring + alerts', 'Conversion + activation analysis', 'Iteration backlog', 'Playbooks + team training'],
    signal: 'The team that takes over feels faster — not slower — without us.',
  },
]

interface StackGroup {
  id: number
  title: string
  items: string[]
}

const stack: StackGroup[] = [
  { id: 1, title: 'Frontend', items: ['TypeScript', 'Vue 3', 'React', 'Next.js', 'Tailwind', 'Vite'] },
  { id: 2, title: 'Backend', items: ['Node', 'Bun', 'Go', 'Python', 'tRPC', 'GraphQL'] },
  { id: 3, title: 'Mobile', items: ['React Native', 'Expo', 'Swift', 'Kotlin'] },
  { id: 4, title: 'Data & AI', items: ['PostgreSQL', 'pgvector', 'Redis', 'OpenAI', 'Anthropic', 'LangGraph'] },
  { id: 5, title: 'Cloud', items: ['AWS', 'GCP', 'Vercel', 'Fly.io', 'Cloudflare', 'Terraform'] },
  { id: 6, title: 'Quality', items: ['Vitest', 'Playwright', 'Sentry', 'Datadog', 'Linear', 'PostHog'] },
]

interface FaqItem {
  id: number
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    id: 1,
    q: 'How fast can you start?',
    a: 'A discovery sprint usually kicks off 1–2 weeks after a signed SOW. Build engagements need a 3-week lead time because we staff the right people, not the available people.',
  },
  {
    id: 2,
    q: 'Who owns the code and IP?',
    a: 'You. Everything we write is yours under a standard work-for-hire clause. We push to your repo from day one and never set up parallel infrastructure on our side.',
  },
  {
    id: 3,
    q: 'Will you sign an NDA?',
    a: 'Yes — we sign yours by default, or we share ours if you don\'t have one. Standard mutual NDA, no carve-outs, signed via DocuSign within a business day.',
  },
  {
    id: 4,
    q: 'What\'s the smallest engagement you take?',
    a: 'The Discovery Sprint at $6k. Below that, we usually point you to our blog, an open-source template, or a specialist freelancer — and tell you we\'ll see you when the scope is bigger.',
  },
  {
    id: 5,
    q: 'Do you work with non-technical founders?',
    a: 'Frequently — about half our clients can\'t read the code we ship. The Discovery Sprint is built for that case: you get a plain-English plan and a separate technical brief for your future CTO.',
  },
  {
    id: 6,
    q: 'How do you price?',
    a: 'Fixed scope where possible, time-and-materials where the unknown is genuinely high. We never bill by the hour for senior thinking — that\'s a lose-lose.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════
   FOUNDATIONS
   ═══════════════════════════════════════════════════════════════════════ */

.page {
  background: var(--surface);
  color: var(--fg);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* shared reveal pattern: replaces the always-on-RAF observer.
   Elements with data-reveal start hidden + translated down, get .revealed
   when IntersectionObserver fires. */
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);
  transition-delay: var(--stagger, 0s);
  will-change: opacity, transform;
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}

/* hero entrance reveal (used by .kicker, .line, .hero__sub, etc.) */
.kicker,
.line,
.hero__sub,
.hero__actions,
.hero__stats {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.7s cubic-bezier(0.2, 0.6, 0.2, 1);
  transition-delay: var(--delay, 0s);
}
.kicker.visible,
.line.visible,
.hero__sub.visible,
.hero__actions.visible,
.hero__stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.muted {
  color: var(--muted);
}

.meta-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dim);
  margin: 0 0 0.7rem;
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════════ */

.hero {
  position: relative;
  min-height: 92vh;
  padding: clamp(7rem, 14vh, 11rem) var(--gutter) clamp(3rem, 6vh, 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero__glow {
  position: absolute;
  filter: blur(120px);
  opacity: 0.32;
  border-radius: 50%;
}
.hero__glow--purple {
  width: 620px;
  height: 620px;
  background: var(--purple);
  top: -180px;
  left: -180px;
}
.hero__glow--pink {
  width: 520px;
  height: 520px;
  background: var(--pink);
  right: -160px;
  bottom: -200px;
  opacity: 0.22;
}

.hero__grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.4;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--pink);
  border: 1px solid rgba(204, 102, 218, 0.32);
  background: rgba(204, 102, 218, 0.06);
  border-radius: 100px;
  padding: 0.4rem 0.95rem 0.4rem 0.75rem;
  margin-bottom: 1.75rem;
}
.kicker__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pink);
  box-shadow: 0 0 12px var(--pink);
}

.hero__headline {
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.045em;
  margin: 0;
  max-width: 14ch;
}
.line {
  display: block;
}
.line--accent {
  background: linear-gradient(92deg, var(--gold), var(--pink) 55%, var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__sub {
  margin: 2rem 0 0;
  max-width: 56ch;
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  line-height: 1.65;
  color: rgba(240, 240, 240, 0.78);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2.25rem;
}

/* shared buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.95rem 1.6rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.005em;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;
  white-space: nowrap;
}
.btn--lg {
  padding: 1.1rem 2rem;
  font-size: 1.02rem;
}
.btn--primary {
  background: linear-gradient(135deg, var(--pink), var(--purple));
  color: #fff;
  box-shadow: 0 12px 32px -8px rgba(153, 41, 234, 0.55);
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 42px -10px rgba(204, 102, 218, 0.65);
}
.btn--ghost {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--fg);
}
.btn--ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
}

.hero__stats {
  position: relative;
  z-index: 1;
  margin: clamp(3rem, 8vh, 5rem) auto 0;
  max-width: 1100px;
  width: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border-block: 1px solid var(--border);
}
.stat {
  background: var(--surface);
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.stat__value {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--fg);
  line-height: 1;
}
.stat__label {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--muted);
  text-transform: uppercase;
}

/* ═══════════════════════════════════════════════════════════════════════
   CHAPTERS — shared
   ═══════════════════════════════════════════════════════════════════════ */

.chapter {
  padding: clamp(5rem, 12vh, 8rem) var(--gutter);
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
}

.chapter__head {
  max-width: 720px;
  margin: 0 0 clamp(2.5rem, 6vh, 4rem);
}

.chapter__num {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 1rem;
}

.chapter__title {
  font-size: clamp(2.4rem, 5.5vw, 4.25rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.04;
  margin: 0 0 1.25rem;
}

.chapter__lede {
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.7;
  color: var(--muted);
  max-width: 56ch;
  margin: 0;
}

/* ═══════════════════════════════════════════════════════════════════════
   §01 CAPABILITIES
   ═══════════════════════════════════════════════════════════════════════ */

.cap-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--border);
}

.cap {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 2.5rem;
  padding: clamp(2.25rem, 5vh, 3.5rem) 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
}
.cap:hover {
  background: linear-gradient(
    90deg,
    rgba(204, 102, 218, 0) 0%,
    rgba(204, 102, 218, 0.04) 50%,
    rgba(204, 102, 218, 0) 100%
  );
}

.cap__num {
  font-family: 'Inter', system-ui, sans-serif;
  font-feature-settings: 'tnum';
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 200;
  color: var(--dim);
  letter-spacing: -0.02em;
  line-height: 1;
  padding-top: 0.35rem;
}

.cap__body {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.cap__title {
  font-size: clamp(1.6rem, 2.4vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 0.8rem;
  color: var(--fg);
}

.cap__pitch {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
  max-width: 42ch;
}

.cap__meta {
  display: grid;
  gap: 1.5rem;
}

.cap__deliverables ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.4rem;
}
.cap__deliverables li {
  font-size: 0.92rem;
  line-height: 1.5;
  color: rgba(240, 240, 240, 0.88);
  padding-left: 1.1rem;
  position: relative;
}
.cap__deliverables li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  opacity: 0.85;
}

.chips {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.chip {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(240, 240, 240, 0.85);
  white-space: nowrap;
}

/* ═══════════════════════════════════════════════════════════════════════
   §02 ENGAGEMENTS
   ═══════════════════════════════════════════════════════════════════════ */

.eng-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.eng {
  position: relative;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border);
  border-radius: 1.2rem;
  padding: 2rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.eng:hover {
  transform: translateY(-4px);
  border-color: rgba(204, 102, 218, 0.35);
  box-shadow: 0 24px 56px -20px rgba(153, 41, 234, 0.35);
}

.eng--featured {
  background:
    linear-gradient(155deg, rgba(204, 102, 218, 0.1), rgba(153, 41, 234, 0.04) 60%, transparent),
    rgba(255, 255, 255, 0.035);
  border-color: rgba(204, 102, 218, 0.3);
}
.eng--featured::after {
  content: 'Most chosen';
  position: absolute;
  top: -1px;
  right: 1.5rem;
  transform: translateY(-50%);
  padding: 0.3rem 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--pink), var(--purple));
  color: #fff;
  border-radius: 100px;
}

.eng__kind {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 0.6rem;
}

.eng__name {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1;
  margin: 0 0 0.8rem;
  color: var(--fg);
}

.eng__for {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--muted);
  margin: 0 0 1.5rem;
}
.eng__for strong {
  color: var(--fg);
  font-weight: 600;
}

.eng__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  padding: 1rem 0;
  margin: 0 0 1.25rem;
  border-block: 1px solid var(--border);
}
.eng__meta dt {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 0.3rem;
}
.eng__meta dd {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--fg);
  margin: 0;
}
.eng__price {
  background: linear-gradient(92deg, var(--gold), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}

.eng__included {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: grid;
  gap: 0.5rem;
  flex: 1;
}
.eng__included li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.55;
  color: rgba(240, 240, 240, 0.88);
}
.eng__check {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(250, 235, 146, 0.12);
  color: var(--gold);
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.1rem;
}

.eng__cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  padding: 0.95rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--fg);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}
.eng__cta:hover {
  background: rgba(204, 102, 218, 0.1);
  border-color: rgba(204, 102, 218, 0.4);
  transform: translateX(2px);
}
.eng--featured .eng__cta {
  background: linear-gradient(135deg, var(--pink), var(--purple));
  border-color: transparent;
  color: #fff;
}
.eng--featured .eng__cta:hover {
  filter: brightness(1.08);
}

/* ═══════════════════════════════════════════════════════════════════════
   §03 PROCESS
   ═══════════════════════════════════════════════════════════════════════ */

.phases {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.phase {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.phase__index {
  font-family: 'Inter', system-ui, sans-serif;
  font-feature-settings: 'tnum';
  font-size: 4rem;
  font-weight: 200;
  line-height: 1;
  color: var(--gold);
  letter-spacing: -0.04em;
  opacity: 0.85;
}

.phase__rail {
  height: 1px;
  background: linear-gradient(90deg, var(--gold), transparent);
  margin: 0.5rem 0 0.25rem;
}

.phase__card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
}

.phase__duration {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--pink);
  margin: 0;
}

.phase__name {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0;
  color: var(--fg);
}

.phase__desc {
  font-size: 0.93rem;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

.phase__deliverables {
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
  display: grid;
  gap: 0.4rem;
}
.phase__deliverables li {
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(240, 240, 240, 0.85);
  padding-left: 1rem;
  position: relative;
}
.phase__deliverables li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--gold);
}

.phase__signal {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--fg);
  margin: 0.25rem 0 0;
  padding-top: 0.8rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
}
.phase__signal strong {
  color: var(--cyan);
  font-weight: 700;
}

/* ═══════════════════════════════════════════════════════════════════════
   §04 STACK
   ═══════════════════════════════════════════════════════════════════════ */

.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.stack-group {
  padding: 1.5rem 1.5rem 1.75rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
}

.stack-group__title {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.005em;
  margin: 0 0 1rem;
  color: var(--fg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.stack-group__title::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

.stack-group__items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.stack-group__items li {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(240, 240, 240, 0.88);
}

/* ═══════════════════════════════════════════════════════════════════════
   §05 FAQ
   ═══════════════════════════════════════════════════════════════════════ */

.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--border);
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-item__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 0;
  background: transparent;
  border: 0;
  text-align: left;
  cursor: pointer;
  color: var(--fg);
  font-family: inherit;
  font-size: clamp(1.05rem, 1.7vw, 1.25rem);
  font-weight: 700;
  letter-spacing: -0.015em;
  transition: color 0.2s ease;
}
.faq-item__q:hover {
  color: var(--pink);
}

.faq-item__icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
  transition:
    transform 0.3s cubic-bezier(0.2, 0.6, 0.2, 1),
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}
.faq-item.open .faq-item__icon {
  transform: rotate(180deg);
  background: rgba(204, 102, 218, 0.12);
  border-color: rgba(204, 102, 218, 0.3);
  color: var(--pink);
}

.faq-item__a {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.4s cubic-bezier(0.2, 0.6, 0.2, 1),
    opacity 0.3s ease;
  opacity: 0;
}
.faq-item.open .faq-item__a {
  max-height: 320px;
  opacity: 1;
}
.faq-item__a p {
  margin: 0;
  padding: 0 0 1.5rem;
  max-width: 70ch;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════════════════════
   §06 FINAL CTA
   ═══════════════════════════════════════════════════════════════════════ */

.final-cta {
  padding-block: clamp(6rem, 14vh, 9rem);
}

.final-cta__inner {
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
.final-cta__inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.4;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  z-index: -1;
}

.final-cta__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.04em;
  margin: 0.5rem 0 1.25rem;
}
.final-cta__title .accent {
  background: linear-gradient(92deg, var(--gold), var(--pink) 50%, var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.final-cta__lede {
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  line-height: 1.7;
  color: var(--muted);
  max-width: 56ch;
  margin: 0 auto 2rem;
}

.final-cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
}

/* ═══════════════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════════════ */

@media (max-width: 1024px) {
  .stack-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .phases {
    grid-template-columns: repeat(2, 1fr);
  }
  .eng-grid {
    grid-template-columns: 1fr;
    max-width: 540px;
    margin: 0 auto;
  }
  .cap__body {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: clamp(6rem, 12vh, 8rem);
  }
  .hero__stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .stack-grid {
    grid-template-columns: 1fr;
  }
  .cap {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .cap__num {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .phases {
    grid-template-columns: 1fr;
  }
  .chapter {
    padding-inline: clamp(1.25rem, 5vw, 1.5rem);
  }
  .eng__name {
    font-size: 1.65rem;
  }
}
</style>
