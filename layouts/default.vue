<script lang="ts" setup>

const appBarRef = ref(null)
const appBarHeight = ref(null)
const appContainerHeight = ref("")

// onMounted(() => {
//   if (appBarRef.value) {
//     appBarHeight.value = appBarRef.value.offsetHeight
//     appContainerHeight.value = `${window.innerHeight - appBarHeight.value}px`
//     alert(appContainerHeight.value)
//   } else {
//     alert('appBarRef.value is null')
//   }
// });


  const { width,height } = useElementSize(appBarRef)
  onMounted(() => {
      console.log( height )
      appContainerHeight.value = `calc(100vh - ${height}px)`
  })


</script>

<template>
  <VLayout>
    <CommonUserAppBar />
    <VMain>
      <slot />
    </VMain>
  </VLayout>
</template>

<style scoped>
</style>
