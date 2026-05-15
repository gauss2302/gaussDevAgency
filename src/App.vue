<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

// `standalone` route meta hides the agency Header + Footer so the route
// can render as a self-contained, brand-isolated page — used by the
// Havamind legal pages which have their own nav and footer-less layout.
const route = useRoute()
const standalone = computed(() => Boolean(route.meta?.standalone))
</script>

<template>
  <div class="app-container">
    <Header v-if="!standalone" />
    <main id="main" class="main-content">
      <router-view></router-view>
    </main>
    <Footer v-if="!standalone" />
  </div>
</template>

<style>
/* Глобальные стили для удаления padding/margin */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  /* `overflow-x: clip` prevents horizontal page scroll without creating
     a scroll container, so descendants can still use `position: sticky`.
     The older `overflow-x: hidden` would silently break sticky pinning. */
  overflow-x: clip;
  background-color: var(--surface);
}

body {
  -webkit-overflow-scrolling: touch;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

<style scoped>
.app-container {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: #08080c;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}

.main-content {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
