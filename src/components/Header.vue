<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header__inner">
      <router-link to="/" class="header__logo">Gauss Dev</router-link>

      <button class="header__burger" @click="toggleMenu" aria-label="Toggle menu">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path v-if="!isMenuOpen" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6L18 18M6 18L18 6" />
        </svg>
      </button>

      <nav class="header__nav" :class="{ open: isMenuOpen }">
        <router-link
          to="/"
          class="header__link"
          :class="{ active: route.path === '/' }"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/services"
          class="header__link"
          :class="{ active: route.path === '/services' }"
          @click="closeMenu"
          >Services</router-link
        >
        <router-link to="/contact" class="header__link header__link--cta" @click="closeMenu"
          >Contact</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  --surface: #08080c;
  --muted: #a1a1aa;

  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 8, 12, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

.header.scrolled {
  background: rgba(8, 8, 12, 0.92);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.header__inner {
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem clamp(1.5rem, 5vw, 4rem);
}

.header__logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.header__logo:hover {
  opacity: 0.85;
}

.header__burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 0.4rem;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.header__link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  border-radius: 0.5rem;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.header__link:hover,
.header__link.active {
  color: #f0f0f0;
  background: rgba(255, 255, 255, 0.05);
}

.header__link--cta {
  background: #fff;
  color: var(--surface) !important;
  margin-left: 0.5rem;
  border-radius: 0.6rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}

.header__link--cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  opacity: 0.95;
}

@media (max-width: 768px) {
  .header__inner {
    padding: 0.75rem clamp(1rem, 4vw, 2rem);
  }

  .header__burger {
    display: block;
  }

  .header__nav {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(8, 8, 12, 0.97);
    backdrop-filter: blur(16px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
  }

  .header__nav.open {
    display: flex;
  }

  .header__link {
    font-size: 1.15rem;
    padding: 0.75rem 1.5rem;
  }

  .header__link--cta {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>
