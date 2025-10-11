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

<style scoped>
.app-container {
  /* min-height: 100vh; */
  font-family: Arial, sans-serif;
  background-color: #000000;
  display: flex;
  flex-direction: column;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
