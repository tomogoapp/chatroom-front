<script lang="ts" setup>

  import type { textField } from '@/types'
  import { useField } from 'vee-validate'
  import * as zod from 'zod';
  import { toTypedSchema } from '@vee-validate/zod'

  const {
    name,
    type,
    label,
  } = defineProps<textField>()

  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


  // const fileFieldSchema = zod
  //   .any()
  //   .refine((files) => files?.length == 1, 'Imagen es Requerida')
  //   .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, 'Tamaño maximo es de 5MB')
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     "Formato del archivo no aceptado"
  //   )

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

  //      v-model='value'
</script>

<template>

  <div>
    <VFileInput
    class="mt-6 textfield"
      :name='name'
      :type='type'
      :label='label'
      v-on='validationListeners'
      :error-messages='errorMessage'
      @input="handleChange"
      />
  </div>
</template>

<style scoped></style>
