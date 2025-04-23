<template>
  <div class="container">
    <router-view />
    <footer class="main-footer">
      <span class="author text-overline">Nicolas Yamada</span>
      <span>&bull;</span>
      <span class="year text-overline">2024</span>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $background-color;
  }

  .main-footer {
    display: flex;
    padding: 16px 20px;
    align-items: center;
    justify-content: center;
    text-align: end;
    user-select: none;
    border-top: 1px solid white;

    span {
      color: white;
    }

    span:nth-child(2) {
      color: $primary-color;
      padding: 0 4px 4px 4px;
    }
  }
</style>
