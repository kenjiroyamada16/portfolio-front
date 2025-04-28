<template>
  <div class="splash">
    <SplashLogoAnimation />
  </div>
</template>

<script lang="ts" setup>
  import SplashLogoAnimation from '@/components/icons/SplashLogoAnimation.vue';
  import router from '@/router';
  import { onMounted, ref } from 'vue';

  onMounted(() => {
    setTimeout(() => {
      router.replace({ name: '/portfolio' });
    }, 6000);
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
    animation: transition-logo 0.6s 5.5s forwards;
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
