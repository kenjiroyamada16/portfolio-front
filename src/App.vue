<template>
  <div class="container">
    <router-view />
    <DefaultSnackbar />
  </div>
</template>

<script lang="ts" setup>
  import DefaultSnackbar from './components/DefaultSnackbar.vue';
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
