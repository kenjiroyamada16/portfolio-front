<template>
  <v-snackbar
    class="snackbar"
    v-model="getShow"
    timeout="3000"
    color="#39DFAA"
  >
    {{ getMessage }}
  </v-snackbar>
</template>

<script lang="ts" setup>
  import { useSnackbarStore } from '@/stores/snackbar_store';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  const snackBarStore = useSnackbarStore();
  const { getShow, getMessage } = storeToRefs(snackBarStore);
</script>

<style lang="scss" scoped>
  .snackbar {
    :deep(.v-snackbar__content) {
      font-family: 'Metropolis', sans-serif !important;
      font-weight: 200 !important;
    }
  }
</style>
