<template>
  <div class="title-container">
    <span
      ref="title"
      class="section-title sort-letters"
      data-opacity="1"
      :data-value="textContent"
      :data-text="jpText"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  const title = ref();
  const textContent = computed(() => title.value?.textContent);

  const props = defineProps<{
    jpText: string;
  }>();
</script>

<style scoped lang="scss">
  .title-container {
    display: flex;

    span {
      z-index: 1;
      font-size: 40px;
      font-weight: 700;
      position: relative;
      text-transform: uppercase;

      &::before {
        content: attr(data-text);
        font-size: 24px;
        text-wrap: nowrap;
        font-weight: 700;
        color: $primary-color;
        letter-spacing: 0;
        line-height: 24px;
        position: absolute;
        box-sizing: content-box;
        top: -5%;
        z-index: -1;
        left: 50%;
        text-transform: uppercase;
        transition: 1s;
      }
    }

    span[data-opacity='0']::before {
      opacity: 0;
      transition: 0.3s;
    }

    @media (width <= 800px) {
      span {
        font-size: 32px;
      }
    }

    @media (width <= $desktop-min-width) {
      span {
        font-size: 28px;

        &::before {
          font-size: 16px;
          line-height: 16px;
          transform: none;
          left: 50%;
          top: -5%;
        }
      }
    }
  }
</style>
