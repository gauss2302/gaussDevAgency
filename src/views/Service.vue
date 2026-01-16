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
          v-for="(category, catIndex) in techStack"
          :key="category.id"
          class="tech-category"
          :class="[categoryTheme(category.id), { 'in-view': categoryInView[catIndex] }]"
          :data-category-index="catIndex"
          :ref="(el) => setCategoryRef(el as HTMLElement, catIndex)"
          @mousemove="handleCategoryMouseMove($event, catIndex)"
          @mouseleave="handleCategoryMouseLeave(catIndex)"
          :style="getCategoryStyle(catIndex)"
        >
          <div class="category-background"></div>
          <div class="category-particles"></div>
          <div class="category-header">
            <h3 class="category-title">{{ category.name }}</h3>
            <span class="category-badge">
              <span class="badge-number">{{ category.technologies.length }}</span>
            </span>
          </div>
          <div class="tech-grid">
            <div
              v-for="(tech, techIndex) in category.technologies"
              :key="tech.name"
              class="tech-item"
              :class="{ 'is-hovered': hoveredTech === tech.name }"
              :style="getTechItemStyle(catIndex, techIndex, tech)"
              @mouseenter="handleTechHover(tech.name, $event)"
              @mouseleave="handleTechLeave"
              @mousemove="handleTechMouseMove($event)"
            >
              <div class="tech-icon-wrapper">
                <div class="tech-icon" :style="{ backgroundColor: tech.color }">
                  <span class="tech-icon-symbol">{{ tech.icon }}</span>
                </div>
                <div class="tech-icon-glow" :style="{ backgroundColor: tech.color }"></div>
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
import { ref, onMounted, onUnmounted } from 'vue'

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
const categoryInView = ref<boolean[]>([])
const categoryRefs = ref<HTMLElement[]>([])
const categoryMousePos = ref<{ x: number; y: number }[]>([])
const techMousePos = ref<{ x: number; y: number } | null>(null)

const techStack = ref<TechCategory[]>([
  {
    id: 1,
    name: 'Frontend',
    technologies: [
      { name: 'Vue.js', icon: '⚡', color: '#42b883' },
      { name: 'React', icon: '⚛', color: '#61dafb' },
      { name: 'TypeScript', icon: '📘', color: '#3178c6' },
      { name: 'Tailwind', icon: '🎨', color: '#06b6d4' },
      { name: 'Next.js', icon: '▲', color: '#000000' },
      { name: 'Nuxt', icon: '💚', color: '#00dc82' },
    ],
  },
  {
    id: 2,
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: '🟢', color: '#339933' },
      { name: 'Python', icon: '🐍', color: '#3776ab' },
      { name: 'Go', icon: '🐹', color: '#00add8' },
      { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
      { name: 'MongoDB', icon: '🍃', color: '#47a248' },
      { name: 'Redis', icon: '🔴', color: '#dc382d' },
    ],
  },
  {
    id: 3,
    name: 'Mobile',
    technologies: [
      { name: 'React Native', icon: '📱', color: '#61dafb' },
      { name: 'Flutter', icon: '💙', color: '#02569b' },
      { name: 'Swift', icon: '🦉', color: '#f05138' },
      { name: 'Kotlin', icon: '🔷', color: '#7f52ff' },
    ],
  },
  {
    id: 4,
    name: 'DevOps & Cloud',
    technologies: [
      { name: 'Docker', icon: '🐳', color: '#2496ed' },
      { name: 'Kubernetes', icon: '☸', color: '#326ce5' },
      { name: 'AWS', icon: '☁', color: '#ff9900' },
      { name: 'GCP', icon: '🌐', color: '#4285f4' },
      { name: 'Terraform', icon: '🏗', color: '#7b42bc' },
      { name: 'GitHub Actions', icon: '⚙', color: '#2088ff' },
    ],
  },
  {
    id: 5,
    name: 'AI & ML',
    technologies: [
      { name: 'TensorFlow', icon: '🧠', color: '#ff6f00' },
      { name: 'PyTorch', color: '#ee4c2c', icon: '🔥' },
      { name: 'OpenAI', icon: '🤖', color: '#412991' },
      { name: 'Langchain', icon: '🔗', color: '#1c3c3c' },
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

// Scroll reveal для категорий
const setCategoryRef = (el: HTMLElement | null, index: number) => {
  if (!el) return
  categoryRefs.value[index] = el
}

const getCategoryStyle = (index: number) => {
  const pos = categoryMousePos.value[index] || { x: 0, y: 0 }
  const rotateX = pos.y * 2
  const rotateY = pos.x * 2
  const translateX = pos.x * 8
  const translateY = pos.y * 8
  
  return {
    '--mouse-x': `${(pos.x + 0.5) * 100}%`,
    '--mouse-y': `${(pos.y + 0.5) * 100}%`,
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
  } as Record<string, string>
}

const getTechItemStyle = (catIndex: number, techIndex: number, tech: Technology) => {
  const delay = Math.min((catIndex * 100 + techIndex * 50), 800)
  const pos = techMousePos.value
  const isHovered = hoveredTech.value === tech.name
  
  let style: Record<string, string> = {
    '--stagger-delay': `${delay}ms`,
  }
  
  if (isHovered && pos) {
    const rotateX = pos.y * 15
    const rotateY = pos.x * 15
    const translateX = pos.x * 12
    const translateY = pos.y * 12
    
    style['--tech-mouse-x'] = `${(pos.x + 0.5) * 100}%`
    style['--tech-mouse-y'] = `${(pos.y + 0.5) * 100}%`
    style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`
  }
  
  return style
}

// Mouse handlers для magnetic эффектов
const handleCategoryMouseMove = (event: MouseEvent, index: number) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  categoryMousePos.value[index] = {
    x: (event.clientX - rect.left) / rect.width - 0.5,
    y: (event.clientY - rect.top) / rect.height - 0.5,
  }
}

const handleCategoryMouseLeave = (index: number) => {
  categoryMousePos.value[index] = { x: 0, y: 0 }
}

const handleTechHover = (techName: string, event: MouseEvent) => {
  hoveredTech.value = techName
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  techMousePos.value = {
    x: (event.clientX - rect.left) / rect.width - 0.5,
    y: (event.clientY - rect.top) / rect.height - 0.5,
  }
}

const handleTechLeave = () => {
  hoveredTech.value = null
  techMousePos.value = null
}

const handleTechMouseMove = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  techMousePos.value = {
    x: (event.clientX - rect.left) / rect.width - 0.5,
    y: (event.clientY - rect.top) / rect.height - 0.5,
  }
}

// IntersectionObserver для scroll reveal
onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    categoryInView.value = techStack.value.map(() => true)
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        const idx = Number(target.dataset.categoryIndex)
        if (entry.isIntersecting) {
          categoryInView.value[idx] = true
          io.unobserve(target)
        }
      })
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  // Инициализация позиций мыши
  categoryMousePos.value = techStack.value.map(() => ({ x: 0, y: 0 }))

  // Наблюдаем категории после микротаска
  queueMicrotask(() => {
    categoryRefs.value.forEach((el) => el && io.observe(el))
  })

  // Анимация обновления стилей для magnetic эффектов
  let animationFrameId: number | null = null
  const updateStyles = () => {
    categoryRefs.value.forEach((el, index) => {
      if (el) {
        const style = getCategoryStyle(index)
        Object.entries(style).forEach(([key, value]) => {
          if (key !== 'transform') {
            el.style.setProperty(key, value)
          } else {
            el.style.transform = value as string
          }
        })
      }
    })
    animationFrameId = requestAnimationFrame(updateStyles)
  }
  updateStyles()

  onUnmounted(() => {
    io.disconnect()
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
  })
})
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
  position: relative;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #faeb92, #cc66da, #9929ea, #cc66da, #faeb92);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 5s ease infinite;
  letter-spacing: -0.03em;
  position: relative;
  display: inline-block;
  width: 100%;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #cc66da, transparent);
  border-radius: 2px;
  animation: title-underline 3s ease infinite;
}

@keyframes title-underline {
  0%,
  100% {
    width: 100px;
    opacity: 0.5;
  }
  50% {
    width: 200px;
    opacity: 1;
  }
}

.tech-categories {
  display: grid;
  gap: 3rem;
}

.tech-category {
  --accent: #9929ea;
  --accent-glow: rgba(153, 41, 234, 0.3);
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  padding: 2.5rem;
  overflow: hidden;
  opacity: 0;
  transform: translateY(3rem) scale(0.95);
  will-change: transform, opacity;
  transition:
    opacity 0.8s cubic-bezier(0.2, 0.65, 0.2, 1),
    transform 0.8s cubic-bezier(0.2, 0.65, 0.2, 1),
    border-color 0.4s ease;
  transform-style: preserve-3d;
}

.tech-category.in-view {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.tech-category::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 2rem;
  padding: 2px;
  background: linear-gradient(135deg, var(--accent), transparent, var(--accent));
  background-size: 200% 200%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: border-gradient 3s ease infinite;
}

.tech-category:hover::before {
  opacity: 1;
}

.category-background {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    var(--accent-glow) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.tech-category:hover .category-background {
  opacity: 0.4;
}

.category-particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--accent) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.1;
  animation: particles-float 20s linear infinite;
  pointer-events: none;
}

.category-particles::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--accent) 1px, transparent 1px);
  background-size: 25px 25px;
  animation: particles-float-reverse 25s linear infinite;
  opacity: 0.08;
}

@keyframes particles-float {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(30px, 30px);
  }
}

@keyframes particles-float-reverse {
  0% {
    transform: translate(30px, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes border-gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.category-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), #faeb92, var(--accent));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  animation: title-gradient 4s ease infinite;
  position: relative;
}

@keyframes title-gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.category-badge {
  position: relative;
  background: var(--accent);
  color: #000;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 800;
  box-shadow: 0 4px 16px var(--accent-glow);
  overflow: hidden;
}

.category-badge::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-size: 200% 100%;
  animation: badge-shine 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes badge-shine {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.badge-number {
  position: relative;
  z-index: 1;
  display: inline-block;
  transform: scale(0);
  animation: badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: calc(var(--stagger-delay, 0ms) + 300ms);
}

.tech-category.in-view .badge-number {
  animation: badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes badge-pop {
  0% {
    transform: scale(0) rotate(-180deg);
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1.25rem;
  position: relative;
  z-index: 2;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(1.5rem) scale(0.9);
  transition:
    all 0.4s cubic-bezier(0.2, 0.65, 0.2, 1),
    transform 0.1s ease-out;
  transition-delay: var(--stagger-delay, 0ms);
}

.tech-category.in-view .tech-item {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.tech-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--tech-mouse-x, 50%) var(--tech-mouse-y, 50%),
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-item:hover::before {
  opacity: 1;
}

.tech-item {
  transform-style: preserve-3d;
}

.tech-item:hover,
.tech-item.is-hovered {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.tech-icon-wrapper {
  position: relative;
  width: 64px;
  height: 64px;
}

.tech-icon {
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.2, 0.65, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.tech-icon-symbol {
  font-weight: 400;
  font-size: 2rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  display: block;
  transition: transform 0.3s ease;
}

.tech-icon-glow {
  position: absolute;
  inset: -8px;
  border-radius: 1.25rem;
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.4s ease;
  z-index: 1;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.tech-item:hover .tech-icon {
  transform: scale(1.1) rotateZ(5deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}

.tech-item:hover .tech-icon-symbol {
  transform: scale(1.15) rotateZ(-5deg);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

.tech-item:hover .tech-icon-glow {
  opacity: 0.8;
  animation: pulse-glow-active 1.5s ease-in-out infinite;
}

@keyframes pulse-glow-active {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.tech-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #c9c9c9;
  text-align: center;
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
  position: relative;
}

.tech-item:hover .tech-name {
  color: #fff;
  transform: translateY(-2px);
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
}

.tech-item:hover .tech-name::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  animation: underline-expand 0.4s ease forwards;
}

@keyframes underline-expand {
  to {
    width: 80%;
  }
}

/* Theme colors for categories */
.theme-purple {
  --accent: #9929ea;
  --accent-glow: rgba(153, 41, 234, 0.3);
}
.theme-blue {
  --accent: #61dafb;
  --accent-glow: rgba(97, 218, 251, 0.3);
}
.theme-green {
  --accent: #42b883;
  --accent-glow: rgba(66, 184, 131, 0.3);
}
.theme-orange {
  --accent: #ff9900;
  --accent-glow: rgba(255, 153, 0, 0.3);
}
.theme-pink {
  --accent: #cc66da;
  --accent-glow: rgba(204, 102, 218, 0.3);
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
  .tech-category {
    opacity: 1 !important;
    transform: none !important;
  }
  .tech-item {
    opacity: 1 !important;
    transform: none !important;
  }
  .badge-number {
    transform: scale(1) !important;
    animation: none !important;
  }
}
</style>
