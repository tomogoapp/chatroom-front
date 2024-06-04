
<script lang="ts" setup>
  import type { textField,LoginEntity } from '@/types'
  import { useField, useForm,Form } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as zod from 'zod'
  import { useAuthStore } from '@/store'
  import { storeToRefs } from 'pinia'

  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)

  const {email, password} = reactive({
    email: {
      name: 'email',
      label: 'e-mail',
      type: 'email',
      prependIcon: 'mdi-account',
    } as textField,
    password: {
      name: 'password',
      label: 'contraseña',
      type: 'password',
      prependIcon: 'mdi-form-textbox-password',
    } as textField,
  })

  const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string({
        required_error:'Campo no puede estar vacio'
      })
      .email({
        message: 'Debe ser un correo electronico valido' 
      }),
      password: zod.string({
        required_error:'Campo no puede estar vacio'
      }),
    })
  )

  const { handleSubmit } = useForm<LoginEntity>({
    validationSchema
  })

  const onSubmit = handleSubmit(async values => {

    try {

      const { email, password } = values
      await authStore.login(email, password)

    } catch(error) {
      console.log(error)
    }

  });

</script>

<template>
  <div>
    <VContainer>
      <VForm
        @submit.prevent="onSubmit"
      >

        <InputsText
          :name="email.name"
          :label="email.label"
          :type="email.type"
          :prepend-icon="email.prependIcon"
        />

        <InputsText
          :name="password.name"
          :label="password.label"
          :type="password.type"
          :prepend-icon="password.prependIcon"
        />        

        <VRow>
          <VCol cols>
            <VBtn 
              text="Log In" 
              type="submit" 
            />
            <button>Submit</button>

          </VCol>
        </VRow>
      </VForm>
    </VContainer>
  </div>
</template>

<style scoped></style>