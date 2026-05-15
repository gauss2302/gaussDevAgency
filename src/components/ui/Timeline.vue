<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

export interface TimelineItem {
  id: number
  title: string
  subtitle: string
  description: string
  highlights: string[]
  images: string[]
}

const props = withDefaults(
  defineProps<{
    data: TimelineItem[]
    heading?: string
    description?: string
  }>(),
  {
    heading: 'How We Build',
    description: 'A transparent delivery timeline from first workshop to long-term growth.',
  },
)

const timelineTrackRef = ref<HTMLElement | null>(null)
const timelineEntryRefs = ref<HTMLElement[]>([])
const timelineInView = ref<boolean[]>([])
const timelineProgress = ref(0)

let entryObserver: IntersectionObserver | null = null
let scrollRaf = 0

const setTimelineEntryRef = (el: HTMLElement | null, index: number) => {
  if (!el) return
  timelineEntryRefs.value[index] = el
}

const updateTimelineProgress = () => {
  if (!timelineTrackRef.value) return
  const rect = timelineTrackRef.value.getBoundingClientRect()
  const start = window.innerHeight * 0.2
  const total = rect.height + window.innerHeight * 0.5
  const passed = start - rect.top
  const value = Math.max(0, Math.min(1, passed / total))
  timelineProgress.value = value
}

const onScroll = () => {
  if (scrollRaf) return
  scrollRaf = requestAnimationFrame(() => {
    updateTimelineProgress()
    scrollRaf = 0
  })
}

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    timelineInView.value = props.data.map(() => true)
    timelineProgress.value = 1
    return
  }

  entryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        const idx = Number(target.dataset.timelineIndex)
        if (entry.isIntersecting) {
          timelineInView.value[idx] = true
          entryObserver?.unobserve(target)
        }
      })
    },
    { threshold: 0.22, rootMargin: '0px 0px -10% 0px' },
  )

  queueMicrotask(() => {
    timelineEntryRefs.value.forEach((el) => el && entryObserver?.observe(el))
    updateTimelineProgress()
  })

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onUnmounted(() => {
  entryObserver?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
})
</script>

<template>
  <div class="timeline-root">
    <div class="process-header">
      <h2 class="section-title">{{ heading }}</h2>
      <p class="process-subtitle">{{ description }}</p>
    </div>

    <div class="timeline-shell">
      <div class="timeline-line">
        <div class="timeline-line-track"></div>
        <div class="timeline-line-progress" :style="{ transform: `scaleY(${timelineProgress})` }"></div>
      </div>

      <div ref="timelineTrackRef" class="timeline-track">
        <article
          v-for="(item, index) in data"
          :key="item.id"
          class="timeline-entry"
          :class="{ 'in-view': timelineInView[index] }"
          :data-timeline-index="index"
          :ref="(el) => setTimelineEntryRef(el as HTMLElement, index)"
        >
          <div class="timeline-entry-sticky">
            <div class="timeline-dot"></div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-kicker">{{ item.subtitle }}</p>
          </div>

          <div class="timeline-entry-content">
            <p class="timeline-description">{{ item.description }}</p>
            <ul class="timeline-highlights">
              <li v-for="(line, hi) in item.highlights" :key="hi">{{ line }}</li>
            </ul>
            <div class="timeline-gallery">
              <img
                v-for="(img, imgIndex) in item.images"
                :key="`${item.id}-${imgIndex}`"
                :src="img"
                :alt="`${item.title} preview ${imgIndex + 1}`"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                class="timeline-image"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-root {
  position: relative;
}

.process-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 20px;
  padding-bottom: 20px;
  background: linear-gradient(90deg, #faeb92, #cc66da, #9929ea, #cc66da, #faeb92);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 5s ease infinite;
  letter-spacing: -0.03em;
}

.process-subtitle {
  max-width: 760px;
  margin: 0 auto;
  color: #bcbcbc;
  line-height: 1.65;
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.timeline-shell {
  position: relative;
}

.timeline-line {
  position: absolute;
  left: clamp(0.8rem, 2.5vw, 2rem);
  top: 0;
  bottom: 0;
  width: 2px;
  z-index: 0;
}

.timeline-line-track {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 15%,
    rgba(255, 255, 255, 0.35) 85%,
    transparent 100%
  );
}

.timeline-line-progress {
  position: absolute;
  inset: 0;
  transform-origin: top;
  background: linear-gradient(to bottom, #cc66da, #9929ea, #61dafb);
  box-shadow: 0 0 18px rgba(153, 41, 234, 0.5);
}

.timeline-track {
  display: grid;
  gap: 3.25rem;
}

.timeline-entry {
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr;
  gap: clamp(1rem, 2.5vw, 2.5rem);
  min-height: 320px;
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.2, 0.65, 0.2, 1);
}

.timeline-entry.in-view {
  opacity: 1;
  transform: translateY(0);
}

.timeline-entry-sticky {
  position: sticky;
  top: 6.5rem;
  align-self: start;
  padding-left: clamp(1.8rem, 4vw, 3rem);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #faeb92;
  box-shadow:
    0 0 0 6px rgba(250, 235, 146, 0.12),
    0 0 20px rgba(250, 235, 146, 0.45);
  margin-bottom: 1rem;
}

.timeline-title {
  font-size: clamp(1.5rem, 3vw, 2.6rem);
  font-weight: 800;
  line-height: 1;
  margin: 0;
  background: linear-gradient(90deg, #faeb92, #cc66da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.timeline-kicker {
  margin-top: 0.5rem;
  color: #b8b8b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
}

.timeline-entry-content {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.4rem;
  padding: clamp(1rem, 3vw, 1.7rem);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(4px);
}

.timeline-description {
  color: #e9e9e9;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.timeline-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.2rem;
  display: grid;
  gap: 0.5rem;
}

.timeline-highlights li {
  color: #cecece;
  position: relative;
  padding-left: 1.2rem;
}

.timeline-highlights li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: #cc66da;
}

.timeline-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
}

.timeline-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.35s ease;
}

.timeline-image:hover {
  transform: translateY(-3px) scale(1.01);
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@media (max-width: 768px) {
  .timeline-line {
    left: 0.7rem;
  }

  .timeline-entry {
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: unset;
  }

  .timeline-entry-sticky {
    position: relative;
    top: 0;
    padding-left: 1.6rem;
  }

  .timeline-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
