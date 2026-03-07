<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer />
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
  overflow-x: hidden;
  background-color: #08080c;
}

body {
  overflow-y: scroll;
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
