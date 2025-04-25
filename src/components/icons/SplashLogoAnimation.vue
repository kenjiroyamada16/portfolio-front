<template>
  <svg
    stroke="#ffffff"
    stroke-width="2"
    class="text-line"
    width="100%"
    fill="#0D0F12"
  >
    <text
      x="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      y="50%"
    >
      {{ t('names.jp_kenji') }}
    </text>
  </svg>
</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<style scoped lang="scss">
  .text-line {
    stroke: $background-color;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
    animation: dash 4s linear forwards, filling 1s 4s ease-in forwards;
    font-size: 100px;
  }

  .text-line text {
    font-weight: 200;
    font-family: 'Metropolis', sans-serif;
  }

  @keyframes dash {
    to {
      stroke: white;
      stroke-dashoffset: 0;
    }
  }

  @keyframes filling {
    0% {
      fill: white;
      fill-opacity: 0;
    }
    100% {
      fill: white;
      fill-opacity: 1;
    }
  }
</style>
