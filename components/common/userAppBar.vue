<script lang="ts" setup>

</script>

<template>
  <div>
    <VAppBar
      title='Chat Rooms'
      ref='appBarRef'
      fixed
      :elevation='0'
      class='pt-1 pb-1'
    >
      <template v-slot:prepend>
        <NuxtLink
          to="/"
        >
          <VImg
            :width="60"
            aspect-ratio="4/3"
            cover
            src="/images/ico.png"
          ></VImg>
        </NuxtLink>
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
  </div>
</template>

<style scoped></style>
