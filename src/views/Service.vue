<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">Build.</span>
          <span class="title-line">Scale.</span>
          <span class="title-line">Innovate.</span>
        </h1>
        <p class="hero-subtitle">
          We transform ideas into production-ready solutions with cutting-edge technology
        </p>
      </div>
      <div class="hero-grid"></div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-section">
      <h2 class="section-title">Technologies We Master</h2>
      <div class="tech-categories">
        <article
          v-for="category in techStack"
          :key="category.id"
          class="tech-category"
          :class="categoryTheme(category.id)"
        >
          <div class="category-header">
            <h3 class="category-title">{{ category.name }}</h3>
            <span class="category-badge">{{ category.technologies.length }}</span>
          </div>
          <div class="tech-grid">
            <div
              v-for="tech in category.technologies"
              :key="tech.name"
              class="tech-item"
              @mouseenter="hoveredTech = tech.name"
              @mouseleave="hoveredTech = null"
            >
              <div class="tech-icon" :style="{ backgroundColor: tech.color }">
                {{ tech.icon }}
              </div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section">
      <h2 class="section-title">What We Deliver</h2>
      <div class="services-grid">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card"
          :class="[serviceTheme(index), { 'is-featured': service.featured }]"
        >
          <div class="card-header">
            <div class="service-icon-wrapper">
              <span class="service-icon">{{ service.icon }}</span>
            </div>
            <span v-if="service.featured" class="featured-badge">Popular</span>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, i) in service.features" :key="i">{{ feature }}</li>
          </ul>
          <div class="card-footer">
            <router-link to="/contact" class="service-cta">
              <span>Start Project</span>
              <span class="arrow">→</span>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <h2 class="section-title">Our Process</h2>
      <div class="process-timeline">
        <div
          v-for="(step, index) in processSteps"
          :key="step.id"
          class="process-step"
          :class="{ 'is-active': activeStep === index }"
          @mouseenter="activeStep = index"
        >
          <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Ready to build something amazing?</h2>
        <p class="cta-subtitle">Let's discuss your project and find the perfect solution</p>
        <router-link to="/contact" class="cta-button">Get Started</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Technology {
  name: string
  icon: string
  color: string
}

interface TechCategory {
  id: number
  name: string
  technologies: Technology[]
}

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
  featured?: boolean
}

interface ProcessStep {
  id: number
  title: string
  description: string
}

const hoveredTech = ref<string | null>(null)
const activeStep = ref<number>(0)

const techStack = ref<TechCategory[]>([
  {
    id: 1,
    name: 'Frontend',
    technologies: [
      { name: 'Vue.js', icon: 'V', color: '#42b883' },
      { name: 'React', icon: 'R', color: '#61dafb' },
      { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
      { name: 'Tailwind', icon: 'T', color: '#06b6d4' },
      { name: 'Next.js', icon: 'N', color: '#000000' },
      { name: 'Nuxt', icon: 'N', color: '#00dc82' },
    ],
  },
  {
    id: 2,
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'N', color: '#339933' },
      { name: 'Python', icon: 'P', color: '#3776ab' },
      { name: 'Go', icon: 'G', color: '#00add8' },
      { name: 'PostgreSQL', icon: 'PG', color: '#336791' },
      { name: 'MongoDB', icon: 'M', color: '#47a248' },
      { name: 'Redis', icon: 'R', color: '#dc382d' },
    ],
  },
  {
    id: 3,
    name: 'Mobile',
    technologies: [
      { name: 'React Native', icon: 'RN', color: '#61dafb' },
      { name: 'Flutter', icon: 'F', color: '#02569b' },
      { name: 'Swift', icon: 'S', color: '#f05138' },
      { name: 'Kotlin', icon: 'K', color: '#7f52ff' },
    ],
  },
  {
    id: 4,
    name: 'DevOps & Cloud',
    technologies: [
      { name: 'Docker', icon: 'D', color: '#2496ed' },
      { name: 'Kubernetes', icon: 'K', color: '#326ce5' },
      { name: 'AWS', icon: 'A', color: '#ff9900' },
      { name: 'GCP', icon: 'G', color: '#4285f4' },
      { name: 'Terraform', icon: 'T', color: '#7b42bc' },
      { name: 'GitHub Actions', icon: 'GA', color: '#2088ff' },
    ],
  },
  {
    id: 5,
    name: 'AI & ML',
    technologies: [
      { name: 'TensorFlow', icon: 'TF', color: '#ff6f00' },
      { name: 'PyTorch', icon: 'PT', color: '#ee4c2c' },
      { name: 'OpenAI', icon: 'AI', color: '#412991' },
      { name: 'Langchain', icon: 'L', color: '#1c3c3c' },
    ],
  },
])

const services = ref<Service[]>([
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'Transform your vision into actionable roadmaps with stakeholder alignment',
    icon: '🎯',
    features: ['Product workshops', 'User flow mapping', 'Tech feasibility audit', 'ROI roadmap'],
    featured: false,
  },
  {
    id: 2,
    title: 'Web Applications',
    description: 'Production-ready platforms that scale with modern architecture',
    icon: '🚀',
    features: ['Vue/React/TypeScript', 'SSR & Performance', 'Security baselines', 'Observability'],
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: 'Native experiences across iOS and Android with fluid UX',
    icon: '📱',
    features: ['Cross-platform', 'Offline-first', 'Push notifications', 'App store CI/CD'],
    featured: false,
  },
  {
    id: 4,
    title: 'Cloud & DevOps',
    description: 'Automated pipelines from commit to production with zero downtime',
    icon: '☁️',
    features: [
      'IaC (Terraform)',
      'Kubernetes orchestration',
      'GitOps workflows',
      'Cost optimization',
    ],
    featured: false,
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Practical AI integration that moves real business metrics',
    icon: '🤖',
    features: ['NLP & recommendations', 'Computer vision', 'Data pipelines', 'Model monitoring'],
    featured: true,
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Design systems that keep products consistent as they grow',
    icon: '🎨',
    features: [
      'Design tokens',
      'WCAG 2.1+ accessibility',
      'Rapid prototyping',
      'Usability testing',
    ],
    featured: false,
  },
])

const processSteps = ref<ProcessStep[]>([
  {
    id: 1,
    title: 'Discovery',
    description: 'We dive deep into your business goals, user needs, and technical constraints',
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Define scope, architecture, and deliverables with clear milestones',
  },
  {
    id: 3,
    title: 'Development',
    description: 'Iterative sprints with continuous testing and stakeholder feedback',
  },
  {
    id: 4,
    title: 'Launch',
    description: 'Smooth deployment with monitoring, documentation, and training',
  },
  {
    id: 5,
    title: 'Growth',
    description: 'Ongoing optimization, scaling, and feature development',
  },
])

const categoryTheme = (id: number) => {
  const themes = ['theme-purple', 'theme-blue', 'theme-green', 'theme-orange', 'theme-pink']
  return themes[(id - 1) % themes.length]
}

const serviceTheme = (index: number) => {
  const themes = ['service-purple', 'service-yellow', 'service-blue', 'service-green']
  return themes[index % themes.length]
}
</script>

<style scoped>
.services-page {
  background: #000;
  color: #fff;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 100%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(153, 41, 234, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(153, 41, 234, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  background: linear-gradient(90deg, #9929ea, #cc66da, #faeb92);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
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

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #c9c9c9;
  max-width: 600px;
  margin: 0 auto;
}

/* Tech Stack Section */
.tech-section {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #faeb92, #cc66da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-categories {
  display: grid;
  gap: 2rem;
}

.tech-category {
  --accent: #9929ea;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.tech-category:hover {
  transform: translateY(-4px);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
}

.category-badge {
  background: var(--accent);
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: scale(1.05);
}

.tech-icon {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.25rem;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tech-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #c9c9c9;
  text-align: center;
}

/* Theme colors for categories */
.theme-purple {
  --accent: #9929ea;
}
.theme-blue {
  --accent: #61dafb;
}
.theme-green {
  --accent: #42b883;
}
.theme-orange {
  --accent: #ff9900;
}
.theme-pink {
  --accent: #cc66da;
}

/* Services Section */
.services-section {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-card {
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-accent: #9929ea;

  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(153, 41, 234, 0.2);
  border-color: var(--card-accent);
}

.service-card.is-featured {
  border: 2px solid var(--card-accent);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.service-icon-wrapper {
  width: 64px;
  height: 64px;
  background: var(--card-accent);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.featured-badge {
  background: var(--card-accent);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #fff;
}

.service-description {
  color: #c9c9c9;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-features {
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
}

.service-features li {
  padding: 0.5rem 0;
  color: #c9c9c9;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--card-accent);
  font-weight: 700;
}

.card-footer {
  margin-top: auto;
  padding-top: 1rem;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--card-accent);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.service-cta:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(153, 41, 234, 0.4);
}

.arrow {
  transition: transform 0.3s ease;
}

.service-cta:hover .arrow {
  transform: translateX(4px);
}

/* Service theme colors */
.service-purple {
  --card-accent: #9929ea;
}
.service-yellow {
  --card-accent: #faeb92;
}
.service-yellow .service-icon-wrapper,
.service-yellow .featured-badge,
.service-yellow .service-cta {
  color: #0a0a0f;
}
.service-blue {
  --card-accent: #61dafb;
}
.service-blue .service-icon-wrapper,
.service-blue .featured-badge,
.service-blue .service-cta {
  color: #0a0a0f;
}
.service-green {
  --card-accent: #42b883;
}

/* Process Section */
.process-section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #9929ea, #cc66da);
  opacity: 0.3;
}

.process-step {
  display: flex;
  gap: 2rem;
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.process-step:hover,
.process-step.is-active {
  background: rgba(153, 41, 234, 0.1);
  border-color: #9929ea;
  transform: translateX(8px);
}

.step-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #9929ea;
  line-height: 1;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #faeb92;
}

.step-description {
  color: #c9c9c9;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1a0a1f 0%, #0a0a0f 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle, rgba(153, 41, 234, 0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #faeb92, #cc66da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: #c9c9c9;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(90deg, #9929ea, #cc66da);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(153, 41, 234, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(153, 41, 234, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .process-timeline::before {
    left: 1rem;
  }

  .process-step {
    gap: 1rem;
    padding: 1rem;
  }

  .step-number {
    font-size: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
