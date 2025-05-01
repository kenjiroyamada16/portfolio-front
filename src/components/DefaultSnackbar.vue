<template>
  <v-snackbar
    class="snackbar"
    v-model="showSnackbar"
    :timeout="3000"
    color="#39DFAA"
  >
    {{ getMessage }}
  </v-snackbar>
</template>

<script lang="ts" setup>
  import { useSnackbarStore } from '@/stores/snackbar_store';
  import { ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';

  const showSnackbar = ref(false);

  const snackBarStore = useSnackbarStore();
  const { getShow, getMessage } = storeToRefs(snackBarStore);

  watch(getShow, newValue => {
    showSnackbar.value = newValue;
  });
</script>

<style lang="scss" scoped>
  .snackbar {
    :deep(.v-snackbar__content) {
      font-family: 'Metropolis', sans-serif !important;
      font-weight: 200 !important;
    }
  }
</style>
