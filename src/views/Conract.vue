<template>
  <div class="page">
    <section class="hero">
      <div class="hero__gradient" />
      <div class="hero__inner">
        <p class="kicker" :class="{ visible: mounted }">Contact</p>
        <h1 class="headline" :class="{ visible: mounted }" style="--delay: 0.15s">
          Let's start<br />a conversation
        </h1>
        <p class="sub" :class="{ visible: mounted }" style="--delay: 0.3s">
          We usually reply within one business day.
        </p>
      </div>
    </section>

    <section class="contact">
      <ContactWidget
        title=""
        subtitle=""
        image-src="/assets/mobile.png"
        image-alt="Gauss Dev office"
        email="devshilov@gmail.com"
        telegram-url="https://t.me/nick230296"
        telegram-handle="@nick230296"
        linkedin-url="https://www.linkedin.com/company/104642717/"
        hours="Mon-Fri · 09:00-18:00 UZT"
        :rounded="true"
        @click="onClick"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactWidget from '@/components/ContactWidget.vue'
import { ref, onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  path: '/contact',
  title: 'Contact — Start a Project',
  description:
    'Tell us about what you are shipping. We reply within one business day with a sharper question, a small plan, or a polite "this is not us — try X instead."',
})

const mounted = ref(false)
onMounted(() => requestAnimationFrame(() => { mounted.value = true }))

const onClick = (e: { channel: 'email' | 'telegram' | 'linkedin' }) => {
  console.log('contact click:', e.channel)
}
</script>

<style scoped>
.page { background: #08080c; color: #f0f0f0; min-height: 100vh; }

.hero {
  position: relative; text-align: center; overflow: hidden;
  padding: clamp(8rem, 18vh, 14rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vh, 3rem);
}
.hero__gradient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 30% 30%, rgba(153,41,234,0.14), transparent),
    radial-gradient(ellipse 50% 60% at 70% 70%, rgba(204,102,218,0.1), transparent);
  pointer-events: none;
}
.hero__inner { position: relative; z-index: 1; max-width: 780px; margin: 0 auto; }

.kicker, .headline, .sub {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.2,0.6,0.2,1), transform 0.7s cubic-bezier(0.2,0.6,0.2,1);
  transition-delay: var(--delay, 0s);
}
.kicker.visible, .headline.visible, .sub.visible { opacity: 1; transform: translateY(0); }

.kicker {
  display: inline-block; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: #cc66da; border: 1px solid rgba(204,102,218,0.35); border-radius: 100px;
  padding: 0.35rem 1.1rem; margin-bottom: 1.5rem;
}
.headline {
  font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em;
  background: linear-gradient(90deg, #9929ea, #cc66da);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sub {
  max-width: 560px; margin: 1.2rem auto 0;
  font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.7; color: #a1a1aa;
}

.contact {
  max-width: 1200px; margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem) clamp(4rem, 8vw, 6rem);
}

@media (max-width: 768px) {
  .hero { padding-top: 6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .kicker, .headline, .sub { opacity: 1 !important; transform: none !important; transition: none !important; }
}
</style>
