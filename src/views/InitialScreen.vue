<template>
  <v-container id="container">
    <header>
      <p class="text-h2">{{ $t('names.jp_kenji') }}</p>
      <p class="text-overline">{{ $t('names.kenji') }}</p>
    </header>
    <section class="intro-section">
      <p>{{ $t('features.initial.description') }}</p>
      <DefaultButton
        id="portfolio-btn"
        :title="$t('names.portfolio')" />
      <div class="social-media">
        <DefaultButton
          v-for="(button, index) in buttons"
          :key="index"
          :tip="button.tip"
          :href="button.href"
          :icon="button.icon" />
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
  import DefaultButton from '@/components/DefaultButton.vue';

  const buttons = [
    { tip: 'GitHub', icon: '$github', href: 'https://github.com/kenjiroyamada16' },
    { tip: 'LinkedIn', icon: '$linkedin', href: 'https://www.linkedin.com/in/nicolas-yamada' },
    { tip: 'Enviar um e-mail', icon: 'mdi-email-multiple', href: 'mailto:nicolasyamada16@gmail.com' },
  ];
</script>

<style scoped lang="scss">
  #container {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
  }

  header {
    text-align: center;
  }

  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      margin: 12px;
    }

    .social-media {
      display: flex;
      margin: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>