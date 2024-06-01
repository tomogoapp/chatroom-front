
<script lang="ts" setup>

    const route = useRoute()

    useHead({
      meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
    })

</script>

<template>
  <div>
    <VLayout>
      <slot />
    </VLayout>
  </div>
</template>

<style scoped></style>
