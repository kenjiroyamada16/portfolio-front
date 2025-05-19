<template>
  <span>{{ getTranslatedText }}</span>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { locale } = useI18n();

  const props = defineProps<{
    translatedText: Record<string, string>;
  }>();

  const getTranslatedText = computed<string>(() => {
    return props.translatedText[locale.value];
  });
</script>
