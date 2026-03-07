<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { computed } from 'vue'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-fuchsia-500 text-white',
        secondary: 'border-transparent bg-zinc-800 text-zinc-100',
        destructive: 'border-transparent bg-red-600 text-white',
        outline: 'border-zinc-500 text-zinc-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
    class?: string
  }>(),
  { variant: 'default', class: '' },
)

const classes = computed(() => cn(badgeVariants({ variant: props.variant }), props.class))
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
