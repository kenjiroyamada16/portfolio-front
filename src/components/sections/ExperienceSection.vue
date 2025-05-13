<template>
  <section id="experience">
    <SectionTitle
      :key="$i18n.locale"
      :jp-text="KATAKANA_WORK_EXPERIENCE"
      >{{ $t('features.portfolio.sections.experience.title') }}</SectionTitle
    >
    <span class="description">{{
      $t('features.portfolio.sections.experience.description')
    }}</span>
  </section>
</template>

<script setup lang="ts">
  import SectionTitle from '../SectionTitle.vue';
  import { KATAKANA_WORK_EXPERIENCE } from '@/helpers/constants';
</script>

<style lang="scss" scoped>
  #experience {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 100px;

    .description {
      font-size: 20px;
      font-weight: 400;
      margin-top: 12px;
      width: 90%;
    }

    @media (max-width: $desktop-min-width) {
      padding: 64px 16px;
      margin-bottom: 40px;
      min-height: fit-content;

      .description {
        font-size: 16px;
        margin-top: 8px;
        width: 100%;
      }
    }
  }
</style>
