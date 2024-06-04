<script lang="ts" setup>

  definePageMeta({
    middleware: 'auth',
    layout: 'app'
  })

  useHead({
    title: 'ChatRoom - dashboard'
  })

</script>

<template>
  <div>
    <h1>Protected Page</h1>
  </div>
</template>

<style scoped></style>
