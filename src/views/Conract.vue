<template>
  <ContactWidget
    title="Contact"
    subtitle="We usually reply within one business day"
    image-src="/assets/mobile.png"
    image-alt="Gauss Dev office"
    email="devshilov@gmail.com"
    telegram-url="https://t.me/nick230296"
    telegram-handle="@nick230296"
    linkedin-url="https://www.linkedin.com/company/104642717/"
    hours="Mon–Fri · 09:00–18:00 UZT"
    :rounded="true"
    @click="onClick"
  />
</template>

<script setup lang="ts">
import ContactWidget from '@/components/ContactWidget.vue'

const onClick = (e: { channel: 'email' | 'telegram' | 'linkedin' }) => {
  console.log('contact click:', e.channel)
}
</script>
