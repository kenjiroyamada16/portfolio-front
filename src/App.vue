<template>
  <v-app>
    <v-main>
      <router-view />
      <footer class="main-footer">
        <span class="text-overline">Nicolas Yamada</span>
        <span>&bull;</span>
        <span class="text-overline year">2024</span>
      </footer>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss">
  .main-footer {
    display: flex;
    padding: 16px 20px;
    align-items: center;
    justify-content: center;
    text-align: end;
    border-top: 1px solid $footer-border-color;

    span.year {
      color: $secondary-color;
    }

    span:nth-child(2) {
      padding: 0 4px 4px 4px;
    }
  }
</style>
