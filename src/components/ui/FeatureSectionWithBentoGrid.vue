<script setup lang="ts">
import { computed } from 'vue'

import Badge from '@/components/ui/Badge.vue'

export interface BentoServiceItem {
  id: number
  title: string
  description: string
  icon: 'compass' | 'monitor-cog' | 'smartphone' | 'cloud-cog' | 'bot' | 'palette'
  features: string[]
}

const props = defineProps<{
  services: BentoServiceItem[]
}>()

const backgroundImageMap: Record<BentoServiceItem['icon'], string> = {
  compass:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80',
  'monitor-cog':
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80',
  smartphone:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=80',
  'cloud-cog':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80',
  bot: 'https://images.unsplash.com/photo-1677442135722-5f9f262f9652?auto=format&fit=crop&w=1800&q=80',
  palette:
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=80',
}

const bentoItems = computed(() =>
  props.services.map((service, index) => ({
    ...service,
    imageUrl: backgroundImageMap[service.icon],
    sizeClass:
      index === 0
        ? 'lg:col-span-2 lg:row-span-1'
        : index === 1
          ? 'lg:col-span-1 lg:row-span-2'
          : index === 4
            ? 'lg:col-span-2 lg:row-span-1'
            : 'lg:col-span-1 lg:row-span-1',
  })),
)
</script>

<template>
  <section class="w-full py-20 lg:py-28">
    <div class="mx-auto max-w-[1320px] px-8">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col items-start gap-4">
          <div class="flex flex-col gap-2">
            <h2
              class="max-w-2xl bg-gradient-to-r from-[#faeb92] via-[#cc66da] to-[#9929ea] bg-clip-text text-left text-3xl font-semibold tracking-tight text-transparent md:text-5xl"
            >
              What We Deliver
            </h2>
            <p class="max-w-2xl text-left text-lg leading-relaxed tracking-tight text-zinc-300">
              Managing product growth is hard enough. We make delivery predictable with strong
              engineering, clear processes, and measurable outcomes.
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[minmax(240px,1fr)] lg:grid-cols-3 lg:grid-flow-dense"
        >
          <article
            v-for="item in bentoItems"
            :key="item.id"
            class="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/50 hover:shadow-[0_16px_50px_rgba(153,41,234,0.25)]"
            :class="item.sizeClass"
          >
            <div class="absolute inset-0">
              <img
                :src="item.imageUrl"
                :alt="`${item.title} background`"
                class="h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
                loading="lazy"
              />
            </div>
            <div
              class="absolute inset-0 bg-[linear-gradient(170deg,rgba(0,0,0,0.52)_10%,rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.82)_100%)]"
            ></div>
            <div class="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div
                class="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(204,102,218,0.24),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(97,218,251,0.18),transparent_35%)]"
              ></div>
            </div>

            <div class="relative z-10 m-2.5 flex flex-col gap-4 p-[10px]">
              <h3 class="m-2.5 text-xl tracking-tight text-zinc-50">{{ item.title }}</h3>
              <p class="max-w-xl text-base leading-relaxed text-zinc-300">{{ item.description }}</p>
              <ul class="mt-1 grid gap-2 text-sm text-zinc-400">
                <li v-for="(feature, i) in item.features.slice(0, 3)" :key="i">- {{ feature }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
