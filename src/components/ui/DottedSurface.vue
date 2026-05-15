<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const props = withDefaults(
  defineProps<{
    class?: string
    theme?: 'light' | 'dark' | 'auto'
    /** When true, fills the parent (position: absolute). When false, fixed to viewport. */
    contained?: boolean
  }>(),
  { class: '', theme: 'auto', contained: false }
)

const containerRef = ref<HTMLDivElement | null>(null)
let sceneRef: {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  animationId: number
  onResize: () => void
} | null = null

const isDark = ref(true)

const MOBILE_BREAKPOINT = 768

function getPreferredTheme(): 'light' | 'dark' {
  if (props.theme !== 'auto') return props.theme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function isMobile(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
}

function getSceneParams() {
  const mobile = isMobile()
  return {
    SEPARATION: mobile ? 120 : 150,
    AMOUNTX: mobile ? 18 : 40,
    AMOUNTY: mobile ? 28 : 60,
    pointSize: mobile ? 6 : 8,
    waveAmplitude: mobile ? 40 : 50,
    pixelRatio: mobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio,
    cameraZ: mobile ? 980 : 1220,
    cameraY: mobile ? 280 : 355,
  }
}

function initScene() {
  if (!containerRef.value) return

  // WebGL can fail (disabled by user, sandboxed env, GPU blacklisted, headless).
  // If creation throws, bail silently — the dotted background is decoration,
  // and a throw here would break the parent component's lifecycle.
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile() })
  } catch {
    return
  }

  const params = getSceneParams()
  const { SEPARATION, AMOUNTX, AMOUNTY, pointSize, waveAmplitude, pixelRatio, cameraZ, cameraY } = params
  const theme = getPreferredTheme()

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0xffffff, 2000, 10000)

  const width = props.contained && containerRef.value
    ? containerRef.value.offsetWidth
    : window.innerWidth
  const height = props.contained && containerRef.value
    ? containerRef.value.offsetHeight
    : window.innerHeight

  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000)
  camera.position.set(0, cameraY, cameraZ)
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(width, height)
  renderer.setClearColor(scene.fog.color, 0)

  containerRef.value.appendChild(renderer.domElement)

  const positions: number[] = []
  const colors: number[] = []
  const geometry = new THREE.BufferGeometry()

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
      const y = 0
      const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2
      positions.push(x, y, z)
      if (theme === 'dark') {
        colors.push(200 / 255, 200 / 255, 200 / 255)
      } else {
        colors.push(0, 0, 0)
      }
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: pointSize,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  let count = 0
  let animationId: number = 0

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    const positionAttribute = geometry.attributes.position
    const posArray = positionAttribute.array as Float32Array
    let i = 0
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const index = i * 3
        posArray[index + 1] =
          Math.sin((ix + count) * 0.3) * waveAmplitude + Math.sin((iy + count) * 0.5) * waveAmplitude
        i++
      }
    }
    positionAttribute.needsUpdate = true
    renderer.render(scene, camera)
    count += 0.1
  }

  let lastMobile = isMobile()
  const handleResize = () => {
    const nowMobile = isMobile()
    if (nowMobile !== lastMobile) {
      lastMobile = nowMobile
      window.removeEventListener('resize', handleResize)
      disposeScene()
      initScene()
      return
    }
    if (!sceneRef || !containerRef.value) return
    const w = props.contained ? containerRef.value.offsetWidth : window.innerWidth
    const h = props.contained ? containerRef.value.offsetHeight : window.innerHeight
    sceneRef.camera.aspect = w / h
    sceneRef.camera.updateProjectionMatrix()
    sceneRef.renderer.setSize(w, h)
  }

  window.addEventListener('resize', handleResize)
  animate()

  sceneRef = {
    scene,
    camera,
    renderer,
    animationId,
    onResize: handleResize,
  }
}

function disposeScene() {
  if (!sceneRef || !containerRef.value) return
  window.removeEventListener('resize', sceneRef.onResize)
  cancelAnimationFrame(sceneRef.animationId)
  sceneRef.scene.traverse((object) => {
    if (object instanceof THREE.Points) {
      object.geometry.dispose()
      const mat = object.material
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose())
      else mat.dispose()
    }
  })
  sceneRef.renderer.dispose()
  if (sceneRef.renderer.domElement.parentNode === containerRef.value) {
    containerRef.value.removeChild(sceneRef.renderer.domElement)
  }
  sceneRef = null
}

onMounted(() => {
  isDark.value = getPreferredTheme() === 'dark'
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const onThemeChange = () => {
    isDark.value = getPreferredTheme() === 'dark'
    disposeScene()
    initScene()
  }
  mq.addEventListener('change', onThemeChange)
  initScene()
  onUnmounted(() => {
    mq.removeEventListener('change', onThemeChange)
    disposeScene()
  })
})

</script>

<template>
  <div
    ref="containerRef"
    class="dotted-surface"
    :class="[props.class, { 'dotted-surface--contained': props.contained }]"
  />
</template>

<style scoped>
.dotted-surface {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: -1;
}
.dotted-surface--contained {
  position: absolute;
  inset: 0;
  z-index: 1;
}
</style>
