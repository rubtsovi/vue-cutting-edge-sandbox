<script setup lang="ts">
import { useAttrs } from 'vue';

import { Icon } from '@iconify/vue';
import { VariantProps } from 'class-variance-authority';

import variants from './_StyledButton.variants';

type ButtonVariants = VariantProps<typeof variants>;

interface StyledButtonProps extends /* @vue-ignore */ ButtonVariants {
  loading?: boolean;
  disabled?: boolean;
}

defineProps<StyledButtonProps>();
const { variant, size } = useAttrs() as ButtonVariants;
</script>

<template>
  <button :disabled="disabled" :class="variants({ variant, size })">
    <span :class="[{ 'text-transparent': loading }, 'transition-colors flex gap-2 items-center']">
      <slot v-if="size !== 'icon'" name="beforeIcon" />
      <slot />
      <slot v-if="size !== 'icon'" name="afterIcon" />
    </span>
    <span v-if="loading" class="flex w-full h-full items-center justify-center absolute top-0 left-0">
      <Icon icon="ph:spinner" width="24" height="24" class="animate-spin" />
    </span>
  </button>
</template>
