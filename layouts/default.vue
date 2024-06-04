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
    <VAppBar
      title='Chat Rooms'
      ref='appBarRef'
      fixed
      :elevation='0'
      class='pt-1 pb-1'
    >
      <template v-slot:prepend>
        <v-img
          :width="60"
          aspect-ratio="4/3"
          cover
          src="/images/ico.png"
          :to="/dashboard/"
        ></v-img>
      </template>
      <template v-slot:append>
        
        <VBtn
          text="Test"
          to="/dashboard"
        >
        </VBtn>

        <VBtn
          text="Log In"
          to="/account/login"
        >
        </VBtn>
        <VBtn
          text="Sign In"
          to="/account/register"
        >
        </VBtn>
      </template>
    </VAppBar>
    <VMain>
      <slot />
    </VMain>
  </VLayout>
</template>

<style scoped>
</style>
