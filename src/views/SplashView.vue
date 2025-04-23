<template>
  <div class="splash">
    <div class="logo">{{ t('names.jp_kenji') }}</div>
  </div>
</template>

<script lang="ts" setup>
  import router from '@/router';
import { onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  onMounted(() => {
    setTimeout(() => {
      router.replace({ name: '/portfolio' });
    }, 3500);
  });
</script>

<style lang="scss" scoped>
  .splash {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      position: absolute;
      color: white;
      font-size: 5rem;
      animation: transition-logo 2s ease-in-out 2s;
    }
  }

  @keyframes transition-logo {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>