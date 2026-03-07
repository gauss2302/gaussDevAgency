<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string
    /** Grid tilt angle in degrees (default 65) */
    angle?: number
  }>(),
  { class: '', angle: 65 }
)
</script>

<template>
  <div
    class="retro-grid"
    :class="props.class"
    :style="({ '--grid-angle': `${props.angle}deg` } as Record<string, string>)"
  >
    <div class="retro-grid__perspective">
      <div class="retro-grid__lines" />
    </div>
    <div class="retro-grid__gradient" />
  </div>
</template>

<style scoped>
.retro-grid {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.5;
  perspective: 200px;
}

.retro-grid__perspective {
  position: absolute;
  inset: 0;
  transform: rotateX(var(--grid-angle, 65deg));
}

.retro-grid__lines {
  position: absolute;
  inset: 0;
  height: 300vh;
  width: 600vw;
  margin-left: -50%;
  transform-origin: 100% 0 0;
  background-repeat: repeat;
  background-size: 60px 60px;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 1px,
      transparent 0
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2) 1px,
      transparent 0
    );
  animation: retro-grid-scroll 15s linear infinite;
}

.retro-grid__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    #000 0%,
    transparent 90%
  );
}

@keyframes retro-grid-scroll {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .retro-grid__lines {
    animation: none;
  }
}
</style>
