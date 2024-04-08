<script setup lang="ts">
import { InputTypeHTMLAttribute, computed, ref, useAttrs } from 'vue';

import { Icon } from '@iconify/vue';
import { Field } from 'formango';
import { Label } from 'radix-vue';

import StyledButton from '@/ui/StyledButton';
import { tw } from '@/utils';

interface Props {
  label: string;
  clearable?: boolean;
  password?: boolean;
}

const { label, clearable, password } = defineProps<Props>();
const fieldAttrs = useAttrs() as Field<string>;

const emits = defineEmits<{
  blur: [];
}>();

const model = defineModel<string | null>();
const errorShown = computed(
  () => fieldAttrs.errors?._errors.length > 0 && (fieldAttrs.isTouched || fieldAttrs.isDirty)
);

/* CLEAR INPUT STUFF */
const clearIconShown = computed(() => {
  return !password && clearable && Boolean(model.value);
});
const clearValue = () => {
  fieldAttrs.setValue(null);
};

/* PASSWORD INPUT STUFF */
const inputType = ref<InputTypeHTMLAttribute>(password ? 'password' : 'text');
const switchType = () => {
  inputType.value = inputType.value === 'text' ? 'password' : 'text';
};
</script>

<template>
  <div>
    <div
      :class="[
        tw`flex flex-col rounded shadow h-12 items-start px-4 py-2 relative transition`,
        tw`hover:shadow-hover focus-within:shadow-active`,
        {
          [tw`shadow-error hover:shadow-error bg-destructive-disabled/30`]: errorShown,
          [tw`pr-12`]: clearable,
        },
      ]"
    >
      <input
        :id="fieldAttrs._id"
        v-model="model"
        class="border-0 p-0 order-2 peer placeholder-transparent focus-visible:ring-transparent w-full bg-transparent"
        :placeholder="label"
        :type="inputType"
        @blur="emits('blur')"
      />
      <Label
        :for="fieldAttrs._id"
        :class="[
          tw`text-gray text-sm leading-none order-1 transition-transform w-full cursor-text`,
          tw`translate-y-0 scale-100 origin-top-left`,
          tw`peer-focus:scale-100 peer-focus:translate-y-0`,
          tw`peer-placeholder-shown:scale-125 peer-placeholder-shown:translate-y-2`,
        ]"
        >{{ label }}</Label
      >
      <div v-if="clearIconShown || password" class="absolute right-3 top-2.5 z-10 w-7 h-7">
        <StyledButton v-if="clearIconShown" size="icon-small" variant="ghost" tabindex="-1" @click="clearValue">
          <Icon icon="fe:close" />
        </StyledButton>
        <StyledButton v-if="password" size="icon-small" variant="ghost" tabindex="-1" @click="switchType">
          <Icon :icon="inputType === 'text' ? 'mdi:eye-off' : 'mdi:eye'" />
        </StyledButton>
      </div>
    </div>
    <div v-if="errorShown" class="text-destructive flex flex-col gap-1 text-sm mt-2">
      <span v-for="(error, idx) in fieldAttrs.errors?._errors" :key="idx">
        {{ error }}
      </span>
    </div>
  </div>
</template>
