<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <h1 class="logo">Gauss Dev</h1>
      <button class="burger-menu" @click="toggleMenu" aria-label="Toggle Menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FAEB92"
          stroke-width="2"
        >
          <path v-if="!isMenuOpen" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6L18 18M6 18L18 6" />
        </svg>
      </button>
      <nav class="nav-links" :class="{ open: isMenuOpen }">
        <router-link
          to="/"
          class="nav-link"
          :class="{ active: route.path === '/' }"
          @click="closeMenu"
          >Home</router-link
        >
        <!-- <router-link
          to="/services"
          class="nav-link"
          :class="{ active: route.path === '/services' }"
          @click="closeMenu"
          >Services</router-link
        > -->
        <router-link
          to="/about"
          class="nav-link"
          :class="{ active: route.path === '/about' }"
          @click="closeMenu"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ active: route.path === '/contact' }"
          @click="closeMenu"
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
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  background-color: #000000; /* Opaque black at top */
  color: #faeb92;
  padding: 0.75rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 1rem;
  font-family: 'Inter', sans-serif;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;
}

.header.scrolled {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: #faeb92;
}

.burger-menu {
  display: none; /* Hidden on desktop */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.nav-link {
  color: #faeb92;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #cc66da;
  transform: scale(1.05);
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #9929ea, #cc66da);
  transition: width 0.3s ease;
}

.nav-link:hover::before,
.nav-link.active::before {
  width: 100%;
}

@media (max-width: 768px) {
  .header {
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .header-container {
    flex-direction: row; /* Keep logo and burger inline */
    gap: 0.5rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  .burger-menu {
    display: block; /* Show on mobile */
  }

  .nav-links {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(4px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: translateX(100%); /* Off-screen right */
    transition: transform 0.3s ease; /* Smooth slide-in */
    z-index: 20;
  }

  .nav-links.open {
    display: flex; /* Show when open */
    transform: translateX(0); /* Slide in */
  }

  .nav-link {
    font-size: 1.25rem;
    padding: 1rem;
  }

  .nav-link::before {
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    width: 100%;
  }
}
</style>
