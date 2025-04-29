<template>
  <div
    class="button-container"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, onMounted } from 'vue';

  const props = defineProps<{
    stretch?: boolean;
  }>();

  onMounted(() => {
    if (props.stretch) {
      document.querySelector('.button-container')?.classList.add('stretch');
    }
  });
</script>

<style lang="scss" scoped>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $background-color;
    color: white;
    font-weight: 200;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
    padding: 24px 40px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &.stretch {
      width: 100%;
    }

    &:hover {
      font-weight: 500;
      border: 1px solid transparent;
      background-color: $primary-color;
      color: $background-color;
    }
  }
</style>
