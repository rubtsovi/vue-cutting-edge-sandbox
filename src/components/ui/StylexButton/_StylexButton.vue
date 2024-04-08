<script setup lang="ts">
import * as stylex from '@stylexjs/stylex';

import { sizes, styles, variants } from './_StylexButton.variants';

interface StylexButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const props = withDefaults(defineProps<StylexButtonProps>(), {
  variant: 'primary',
  size: 'default',
});
</script>

<template>
  <button v-bind="stylex.attrs(styles.base, variants[props.variant], sizes[props.size])"><slot /></button>
</template>
