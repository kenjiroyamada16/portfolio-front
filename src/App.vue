<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .container {
    display: flex;
    max-width: 100vw;
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
</style>
