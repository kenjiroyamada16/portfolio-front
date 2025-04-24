<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .container {
    display: flex;
    max-width: 100vw;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    // background-color: $background-color;
  }

  // .main-footer {
  //   display: flex;
  //   padding: 16px 20px;
  //   align-items: center;
  //   justify-content: center;
  //   text-align: end;
  //   user-select: none;
  //   border-top: 1px solid white;

  //   span {
  //     color: white;
  //   }

  //   span:nth-child(2) {
  //     color: $primary-color;
  //     padding: 0 4px 4px 4px;
  //   }
  // }
</style>
