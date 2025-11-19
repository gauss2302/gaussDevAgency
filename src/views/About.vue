<template>
  <section class="about-section">
    <div class="content-wrapper">
      <div class="hero">
        <h1 class="hero-title">We build for startups that need to move fast</h1>
        <p class="hero-lead">
          When timing is everything, you need a team that understands the stakes. We've been
          there—shipping under pressure, pivoting on feedback, scaling what works.
        </p>
      </div>

      <div class="interactive-list">
        <div
          v-for="(item, index) in items"
          :key:="index"
          class="list-item"
          :class="{ active: activeIndex === index }"
          @mouseenter="activeIndex = index"
          @click="activeIndex = index"
        >
          <div class="item-header">
            <span class="item-number">0{{ index + 1 }}</span>
            <h2 class="item-title">{{ item.title }}</h2>
            <span class="item-icon">+</span>
          </div>
          <div class="item-body">
            <div class="item-content">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-block">
        <h2 class="cta-title">Ready to ship?</h2>
        <router-link to="/contact" class="cta-button">Start a Conversation</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)

const items = [
  {
    title: 'Deep Expertise, Zero Waste',
    text: "We've built MVPs that became million-dollar platforms. We've refactored legacy systems that couldn't scale. We know what founders need: clarity, speed, and code that lasts longer than the next funding round.",
  },
  {
    title: 'Timing Is Everything',
    text: "Markets move. Competitors launch. Users expect more. Your window is narrow, and you can't afford to rebuild twice. We ship production-ready software in weeks, not quarters—without cutting corners on architecture or security.",
  },
  {
    title: 'Built for SaaS Teams',
    text: "We speak your language: multi-tenancy, observability, CI/CD, compliance baselines. Whether you're pre-seed or Series A, we integrate into your workflow like we've always been part of your team.",
  },
  {
    title: 'No Surprises, No Hype',
    text: "We don't oversell AI or promise 10x results. We scope honestly, communicate constantly, and deliver incrementally. You'll know exactly what you're getting, when you're getting it, and what it costs.",
  },
]
</script>

<style scoped>
.about-section {
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --accent: #9929ea;
  --accent-gradient: linear-gradient(90deg, #9929ea, #cc66da);

  background: #000;
  color: var(--ink);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: clamp(4rem, 8vw, 8rem) 1.5rem;
}

.content-wrapper {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 8vw, 6rem);
}

/* === HERO === */
.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
}

.hero-lead {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.6;
  color: var(--muted);
  max-width: 600px;
  margin: 0 auto;
}

/* === INTERACTIVE LIST === */
.interactive-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--stroke);
}

.list-item {
  border-bottom: 1px solid var(--stroke);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.list-item:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.item-header {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
}

.item-number {
  font-family: monospace;
  font-size: 1.2rem;
  color: var(--accent);
  opacity: 0.7;
}

.item-title {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  color: var(--muted);
  transition: color 0.3s ease;
}

.list-item.active .item-title,
.list-item:hover .item-title {
  color: var(--ink);
}

.item-icon {
  font-size: 2rem;
  font-weight: 300;
  color: var(--muted);
  transition: transform 0.4s ease;
}

.list-item.active .item-icon {
  transform: rotate(45deg);
  color: var(--accent);
}

.item-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.list-item.active .item-body {
  grid-template-rows: 1fr;
}

.item-content {
  overflow: hidden;
}

.item-content p {
  padding-bottom: 2.5rem;
  padding-left: 3.5rem; /* Align with title */
  margin: 0;
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 700px;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.4s ease 0.1s,
    transform 0.4s ease 0.1s;
}

.list-item.active .item-content p {
  opacity: 1;
  transform: translateY(0);
}

/* === CTA === */
.cta-block {
  text-align: center;
  margin-top: 2rem;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--ink);
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  background: var(--ink);
  border-radius: 100px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(250, 235, 146, 0.3);
  background: #fff;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .item-header {
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .item-number {
    font-size: 1rem;
  }

  .item-content p {
    padding-left: 0;
    padding-bottom: 1.5rem;
    font-size: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
