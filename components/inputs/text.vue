<script lang="ts" setup>
  import type { textField } from '@/types'
  import { useField } from 'vee-validate'
  import * as zod from 'zod';
  import { toTypedSchema } from '@vee-validate/zod'

  const {
    name,
    type,
    label,
    prependIcon
  } = defineProps<textField>()

  const appendIconPass = ref('mdi-eye-lock')
  const inputType = ref(type)
  
  const toggleEye = () => {
    if(inputType.value === "password"){
      inputType.value = "text"
      appendIconPass.value = "mdi-eye-lock-open"
    }else{
      inputType.value = "password"
      appendIconPass.value = "mdi-eye-lock"
    }
  }

  const textFieldSchema = zod.string({
    required_error:'el campo no debe de estar vacio'
  })

  const { errorMessage, handleBlur, value, handleChange } = useField(name!, toTypedSchema(textFieldSchema), {
    validateOnValueUpdate: false,
    syncVModel: true,
  })

  type EventLinstener = (evt: Event) => void;
  const validationListeners: Record<string,EventLinstener> = {
    blur: (evt: Event) => handleBlur(evt, true),
    input: (evt: Event) => handleChange(evt, !!errorMessage.value)
  }

</script>

<template>
  <div>
    <VTextField
      class="mt-6 textfield"
      :name='name'
      :type='inputType'
      :label='label'
      :prepend-inner-icon="prependIcon"
      :append-inner-icon='type === "password" ? appendIconPass : ""'
      v-model='value'
      v-on='validationListeners'
      :error-messages='errorMessage'
      @click:append-inner="toggleEye"
      @input="handleChange"
    />

  </div>
</template>

<style scoped>
.textfield :deep(.v-input__details) {
    padding-inline: 0px !important;
}

</style>
