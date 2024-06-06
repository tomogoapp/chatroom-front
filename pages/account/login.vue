<script lang="ts" setup>

  definePageMeta({
    title: 'ChatRoom - Log In',
    name: 'account-login',
    layout: 'default',
    middleware: 'auth',
  })

  useHead({
    title: 'ChatRoom - Log In'
  })
</script>

<template>
  <div class="login-full-screen">
    <VContainer
      class="login-container"
    >
      <VCard
        append-icon="mdi-check"
        class="mx-auto"
        prepend-icon="mdi-account"
        subtitle="prepend-icon and append-icon"
        title="Log In"
        width="450"
        height="400"
      >
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
        <FormsLogin />
      </VCard>
    </VContainer>
  </div>
</template>

<style scoped>
  .login-container{
    width: 1024px !important;
  }
  .login-full-screen{
    width: 100vw;
    height: 100vh;
    background-color: blue;

  }
</style>
