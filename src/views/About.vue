<template>
  <section class="about-section">
    <div class="hero">
      <h1 class="hero-title">We build for startups that need to move fast</h1>
      <p class="hero-lead">
        When timing is everything, you need a team that understands the stakes. We've been
        there—shipping under pressure, pivoting on feedback, scaling what works.
      </p>
    </div>

    <div class="story-grid">
      <article class="story-block">
        <div class="story-number">01</div>
        <h2 class="story-title">Deep Expertise, Zero Waste</h2>
        <p class="story-text">
          We've built MVPs that became million-dollar platforms. We've refactored legacy systems
          that couldn't scale. We know what founders need: clarity, speed, and code that lasts
          longer than the next funding round.
        </p>
      </article>

      <article class="story-block">
        <div class="story-number">02</div>
        <h2 class="story-title">Timing Is Everything</h2>
        <p class="story-text">
          Markets move. Competitors launch. Users expect more. Your window is narrow, and you can't
          afford to rebuild twice. We ship production-ready software in weeks, not quarters—without
          cutting corners on architecture or security.
        </p>
      </article>

      <article class="story-block">
        <div class="story-number">03</div>
        <h2 class="story-title">Built for SaaS Teams</h2>
        <p class="story-text">
          We speak your language: multi-tenancy, observability, CI/CD, compliance baselines. Whether
          you're pre-seed or Series A, we integrate into your workflow like we've always been part
          of your team.
        </p>
      </article>

      <article class="story-block">
        <div class="story-number">04</div>
        <h2 class="story-title">No Surprises, No Hype</h2>
        <p class="story-text">
          We don't oversell AI or promise 10x results. We scope honestly, communicate constantly,
          and deliver incrementally. You'll know exactly what you're getting, when you're getting
          it, and what it costs.
        </p>
      </article>
    </div>

    <div class="cta-block">
      <h2 class="cta-title">Ready to ship?</h2>
      <p class="cta-text">
        Let's talk about your timeline, your tech stack, and how we can help you hit your next
        milestone.
      </p>
      <router-link to="/contact" class="cta-button">Start a Conversation</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
// Pure presentation component—no state needed
</script>

<style scoped>
.about-section {
  --ink: #faeb92;
  --muted: #c9c9c9;
  --stroke: rgba(255, 255, 255, 0.12);
  --card: rgba(255, 255, 255, 0.04);
  --accent: linear-gradient(90deg, #9929ea, #cc66da);

  background: #000;
  color: var(--ink);
  padding: 0;
  min-height: 100vh;
}

/* === HERO === */
.hero {
  max-width: 880px;
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem);
  text-align: center;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1.5rem;
  background: var(--accent);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-lead {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

/* === STORY GRID === */
.story-grid {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem clamp(3rem, 6vw, 5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.story-block {
  background: var(--card);
  border: 1px solid var(--stroke);
  border-radius: 1.25rem;
  padding: 2rem 1.75rem;
  position: relative;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.story-block:hover {
  transform: translateY(-4px);
  border-color: rgba(153, 41, 234, 0.4);
  box-shadow: 0 20px 48px rgba(153, 41, 234, 0.15);
}

.story-number {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  background: var(--accent);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.6;
  margin-bottom: 1rem;
}

.story-title {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1rem;
  color: var(--ink);
}

.story-text {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

/* === CTA BLOCK === */
.cta-block {
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(3rem, 6vw, 5rem) 1.5rem clamp(4rem, 8vw, 6rem);
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1rem;
}

.cta-text {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--muted);
  margin: 0 0 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: #0b0b0f;
  background: var(--accent);
  border-radius: 1rem;
  box-shadow: 0 12px 32px rgba(153, 41, 234, 0.3);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(153, 41, 234, 0.4);
}

.cta-button:active {
  transform: translateY(0);
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .story-block {
    padding: 1.75rem 1.5rem;
  }

  .cta-block {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-block,
  .cta-button {
    transition: none;
  }
  .story-block:hover,
  .cta-button:hover,
  .cta-button:active {
    transform: none;
  }
}
</style>
