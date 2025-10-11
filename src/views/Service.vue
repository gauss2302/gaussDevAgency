<template>
  <div class="services-section">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <img :src="service.icon" alt="Service Icon" class="service-icon" v-if="service.icon" />
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-description">{{ service.description }}</p>
        <router-link to="/contact" class="service-cta">Contact Us</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Build responsive, high-performance web applications using modern frameworks like Vue.js, React, and Angular. We deliver scalable solutions tailored to your business goals.',
    icon: '/src/assets/icons/web-dev.svg',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'Create native and cross-platform mobile apps for iOS and Android. Our apps are user-friendly, fast, and optimized for performance across devices.',
    icon: '/src/assets/icons/mobile-app.svg',
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description:
      'Leverage AWS, Azure, or Google Cloud for scalable, secure infrastructure. We design and deploy cloud-native applications to drive efficiency and growth.',
    icon: '/src/assets/icons/cloud.svg',
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description:
      'Integrate intelligent features like predictive analytics, NLP, and computer vision into your applications with our AI and ML expertise.',
    icon: '/src/assets/icons/ai.svg',
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description:
      'Craft intuitive, visually stunning interfaces with user-centered design principles. We enhance user engagement through seamless experiences.',
    icon: '/src/assets/icons/ui-ux.svg',
  },
  {
    id: 6,
    title: 'DevOps & Automation',
    description:
      'Streamline development with CI/CD pipelines, containerization, and automation tools. We ensure faster deployments and reliable systems.',
    icon: '/src/assets/icons/devops.svg',
  },
]
</script>

<style scoped>
.services-section {
  position: relative;
  background-color: #000000; /* Fallback */
  padding: 3rem 0;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  overflow: hidden;
}

.services-section::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background-image: url('/assets/services-bg.png');
  background-position: center; /* Ensure image stays within viewport */
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.35;
  z-index: 0;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('/assets/services-bg.png'); /* Gradient fade to black */
}

.services-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Overlay for text readability */
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #faeb92;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
}

.service-card {
  background-color: rgba(31, 41, 55, 0.9);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.service-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #faeb92;
  margin-bottom: 0.75rem;
}

.service-description {
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 1rem;
}

.service-cta {
  display: inline-block;
  background: linear-gradient(to right, #9929ea, #cc66da);
  color: #faeb92;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.service-cta:hover {
  background: linear-gradient(to right, #cc66da, #9929ea);
}

@media (max-width: 768px) {
  .services-section::before {
    width: 100%; /* Full width on mobile */
    background-image: url('/assets/services-bg.png');
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card {
    padding: 1rem;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.875rem;
  }

  .service-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
