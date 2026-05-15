<template>
  <div class="page">
    <!-- Page header (compact) -->
    <header class="pg-header">
      <div class="pg-header__inner">
        <h1 class="pg-header__title" :class="{ visible: mounted }">
          Everything you need to ship&nbsp;&amp;&nbsp;scale
        </h1>
        <p class="pg-header__sub" :class="{ visible: mounted }">
          From first workshop to long-term growth — one team, full stack, zero hand-offs.
        </p>
      </div>
    </header>

    <!-- Services bento -->
    <section class="services">
      <FeatureSectionWithBentoGrid :services="services" />
    </section>

    <div class="rule" />

    <!-- Process timeline -->
    <section class="process">
      <div class="process__inner">
        <Timeline :data="timelineMilestones" />
      </div>
    </section>

    <div class="rule" />

    <!-- CTA -->
    <section class="cta">
      <div class="cta__inner">
        <h2 class="cta__title">Ready to build something amazing?</h2>
        <router-link to="/contact" class="btn">Get started</router-link>
        <p class="cta__sub">Let's discuss your project and find the perfect solution.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FeatureSectionWithBentoGrid, Timeline } from '@/components/ui'
import type { BentoServiceItem, TimelineItem } from '@/components/ui'
import { ref, onMounted } from 'vue'

const mounted = ref(false)
onMounted(() => requestAnimationFrame(() => { mounted.value = true }))

type Service = BentoServiceItem

const services = ref<Service[]>([
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'Transform your vision into actionable roadmaps with stakeholder alignment',
    icon: 'compass',
    features: ['Product workshops', 'User flow mapping', 'Tech feasibility audit', 'ROI roadmap'],
  },
  {
    id: 2,
    title: 'Web Applications',
    description: 'Production-ready platforms that scale with modern architecture',
    icon: 'monitor-cog',
    features: ['Vue/React/TypeScript', 'SSR & Performance', 'Security baselines', 'Observability'],
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: 'Native experiences across iOS and Android with fluid UX',
    icon: 'smartphone',
    features: ['Cross-platform', 'Offline-first', 'Push notifications', 'App store CI/CD'],
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    description: 'Automated pipelines from commit to production with zero downtime',
    icon: 'cloud-cog',
    features: ['IaC (Terraform)', 'Kubernetes orchestration', 'GitOps workflows', 'Cost optimization'],
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Practical AI integration that moves real business metrics',
    icon: 'bot',
    features: ['NLP & recommendations', 'Computer vision', 'Data pipelines', 'Model monitoring'],
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Design systems that keep products consistent as they grow',
    icon: 'palette',
    features: ['Design tokens', 'WCAG 2.1+ accessibility', 'Rapid prototyping', 'Usability testing'],
  },
])

const timelineMilestones = ref<TimelineItem[]>([
  {
    id: 1, title: 'Week 1', subtitle: 'Discovery Sprint',
    description: 'We align product vision, map user flows, and lock delivery boundaries before any code starts.',
    highlights: ['Stakeholder interviews and business goals alignment', 'User journey map + success metrics', 'Architecture sketch and implementation plan'],
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 2, title: 'Week 2-4', subtitle: 'Design & Prototyping',
    description: 'Rapid clickable prototypes and interaction specs reduce risk and speed up implementation.',
    highlights: ['UI system and component tokens', 'Prototype validation with real scenarios', 'Engineering-ready design handoff'],
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 3, title: 'Week 5-10', subtitle: 'Build Iterations',
    description: 'Feature-by-feature delivery with QA gates, performance budgets, and weekly product demos.',
    highlights: ['Modular frontend + typed backend contracts', 'Automated tests and CI quality gates', 'Weekly demos with scope adjustments'],
    images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 4, title: 'Launch', subtitle: 'Production Rollout',
    description: 'Controlled release, observability dashboards, and incident playbooks for predictable go-live.',
    highlights: ['Blue/green or canary deployment', 'Monitoring, alerts, and SLO setup', 'Handover docs + team enablement'],
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 5, title: 'Scale', subtitle: 'Post-launch Growth',
    description: 'After release, we optimize conversion, speed, and reliability based on real product telemetry.',
    highlights: ['A/B tests and conversion uplift', 'Performance tuning with Core Web Vitals', 'Roadmap iterations for growth features'],
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
  },
])
</script>

<style scoped>
.page { background: var(--surface); color: var(--fg); }

/* ═══════════════════════════════════════════
   PAGE HEADER (compact)
   ═══════════════════════════════════════════ */
.pg-header {
  padding: clamp(5rem, 12vh, 7rem) var(--gutter) clamp(2rem, 4vh, 3rem);
}

.pg-header__inner { max-width: 720px; margin: 0 auto; text-align: center; }

.pg-header__title, .pg-header__sub {
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.2,0.6,0.2,1), transform 0.6s cubic-bezier(0.2,0.6,0.2,1);
}
.pg-header__sub { transition-delay: 0.1s; }
.pg-header__title.visible, .pg-header__sub.visible {
  opacity: 1; transform: translateY(0);
}

.pg-header__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800;
  line-height: 1.15; letter-spacing: -0.03em; color: #fff;
}

.pg-header__sub {
  margin-top: 0.8rem; font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.7; color: var(--dim);
}

/* ═══════════════════════════════════════════
   SERVICES BENTO
   ═══════════════════════════════════════════ */
.services {
  max-width: 1320px; margin: 0 auto; padding: 0 var(--gutter);
}
.services :deep(section) { padding-left: 0; padding-right: 0; }
.services :deep(.mx-auto) { padding-left: 0; padding-right: 0; }

/* ═══════════════════════════════════════════
   RULE
   ═══════════════════════════════════════════ */
.rule {
  max-width: 1320px; margin: 0 auto; height: 1px;
  background: linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent);
}

/* ═══════════════════════════════════════════
   PROCESS TIMELINE
   ═══════════════════════════════════════════ */
.process { padding: clamp(4rem, 8vw, 6rem) var(--gutter); }
.process__inner { max-width: 1320px; margin: 0 auto; }

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
.cta {
  padding: clamp(5rem, 10vw, 8rem) var(--gutter);
  text-align: center; position: relative; overflow: hidden;
}
.cta::before {
  content: ''; position: absolute; inset: -50%;
  background: radial-gradient(ellipse at center, rgba(153,41,234,0.06), transparent 60%);
  pointer-events: none;
}
.cta__inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }

.cta__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800;
  line-height: 1.2; letter-spacing: -0.02em; color: #fff; margin-bottom: 0.8rem;
  padding-top: 20px;
  padding-bottom: 20px;
}
.cta__sub {
  color: var(--dim); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem;
}

/* ═══════════════════════════════════════════
   BUTTON
   ═══════════════════════════════════════════ */
.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.85rem 2rem; border-radius: 0.5rem;
  font-weight: 700; font-size: 0.92rem; text-decoration: none;
  background: #fff; color: #08080c;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,255,255,0.08), 0 0 40px rgba(153,41,234,0.12);
}

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .pg-header { padding-top: 4rem; }
}

@media (prefers-reduced-motion: reduce) {
  .pg-header__title, .pg-header__sub {
    opacity: 1 !important; transform: none !important; transition: none !important;
  }
}
</style>
