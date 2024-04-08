<script setup lang="ts">
import { ref } from 'vue';

import { Icon } from '@iconify/vue';
import { useForm } from 'formango';
import { z } from 'zod';

import * as Inputs from '@/ui/Inputs';
import StyledButton from '@/ui/StyledButton';
import StylexButton from '@/ui/StylexButton';
import { noop, wait } from '@/utils';

const isLoading = ref(false);
const type = ref<InstanceType<typeof StylexButton>['variant']>('primary');
const onClick = () => {
  isLoading.value = !isLoading.value;
  type.value = type.value === 'primary' ? 'destructive' : 'primary';
};

const schema = z.object({
  name: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
  email: z.string().email(),
});

const { form, onSubmitForm } = useForm({
  schema,
});

onSubmitForm(value => {
  isLoading.value = true;
  wait({ dataToReturn: value })
    .then(res => {
      console.log(res);
    })
    .catch(noop)
    .finally(() => {
      isLoading.value = false;
    });
});
</script>

<template>
  <div class="p-10">
    <StyledButton variant="ghost" class="uppercase" size="icon" :disabled="false" @click="onClick"
      ><Icon width="18" height="18" icon="fe:trash" />
    </StyledButton>
    <StylexButton size="default">Stylex button</StylexButton>
    <div>
      <Inputs.TextInput v-bind="form.register('name.firstName')" clearable label="First name" class="py-3" />
      <Inputs.TextInput v-bind="form.register('name.lastName')" label="Last name" class="py-3" password />
      <Inputs.TextInput v-bind="form.register('email')" label="Email" class="py-3" />
      <StyledButton :loading="isLoading" :disabled="!form.isValid || isLoading" @click="form.submit"
        >Submit</StyledButton
      >
    </div>
    <div>
      <pre style="white-space: normal">
        {{ JSON.stringify(form.state) }}
      </pre>
    </div>
  </div>
</template>
