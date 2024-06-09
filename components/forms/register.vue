<script lang="ts" setup>

  import type { textField,RegisterEntity } from '@/types'
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import * as zod from 'zod'

  const MAX_FILE_SIZE = 500000
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

  const {email,backupEmail,password,username,file} = reactive({
    email:{
      name: 'email',
      label: 'e-mail',
      type: 'email',
      prependIcon: 'mdi-account',
    } as textField,
    backupEmail:{
      name: 'backupEmail',
      label: ' backup e-mail',
      type: 'email',
      prependIcon: 'mdi-account',
    }as textField,
    password:{
      name: 'password',
      label: 'contraseña',
      type: 'password',
      prependIcon: 'mdi-form-textbox-password',
    }as textField,
    username:{
      name: 'email',
      label: 'e-mail',
      type: 'email',
      prependIcon: 'mdi-account',
    }as textField,
    file:{
      name: 'file',
      label: 'avatar',
      type: 'file',
    }
  })

  const validationSchema = toTypedSchema(
    zod.object({
      // email: zod.string({
      //   required_error:'Campo no puede estar vacio'
      // })
      // .email({
      //   message: 'Debe ser un correo electronico valido' 
      // }),
      // password: zod.string({
      //   required_error:'Campo no puede estar vacio'
      // }),
    file: zod    
      .array(zod.instanceof(File))
      .nonempty('Imagen es Requerida')
      .refine((files) => files.length === 1, {
        message: 'Imagen es Requerida',
      })
      .refine((files) => files[0].size <= MAX_FILE_SIZE, {
        message: 'Tamaño máximo es de 5MB',
      })
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
        message: 'Formato del archivo no aceptado',
      })
    }),
  )

  const { handleSubmit } = useForm<RegisterEntity>({
    validationSchema
  })

  const onSubmit =  handleSubmit (async values =>{
    return true
  })

</script>
<template>
  <div>
    <VContainer>
      <VForm
        @submit.prevent="onSubmit"
      >
      <InputsFile 
        :name='file.name'
        :label='file.label'
        :type='file.type'
      />


      <VBtn 
        text="Log In" 
        type="submit" 
      />
      <button>Submit</button>    
      </VForm>
    </VContainer>
  </div>
</template>

<style scoped></style>
