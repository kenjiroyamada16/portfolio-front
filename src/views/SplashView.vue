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
    }, 6500);
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
    animation: transition-logo 1s 5.5s forwards;
  }

  @keyframes fill-color {
    from {
      fill: white;
    }
    to {
      fill: $primary-color;
      stroke: $primary-color;
      fill-opacity: 1;
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

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
      z-index: 2;
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
      z-index: 1;
    }
    80% {
      transform: translate(2px, -2px);
    }
    to {
      transform: translate(0);
    }
  }
</style>
