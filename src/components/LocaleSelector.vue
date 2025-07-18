<template>
  <div
    ref="elementOutsideClicksListener"
    class="selector-container"
  >
    <div
      class="current-container"
      @click="isOpen = !isOpen"
    >
      <v-tooltip
        :disabled="isOpen"
        :text="currentLanguage?.description"
      >
        <template v-slot:activator="{ props }">
          <div
            class="label"
            v-bind="props"
          >
            {{ currentLanguage.label }}
          </div>
        </template>
      </v-tooltip>
    </div>
    <div
      :class="[
        'selector-items ',
        { 'no-animation': props.disableAnimation, open: isOpen },
      ]"
    >
      <div
        class="item"
        v-for="language in languages"
        :key="language.locale"
        @click="changeLocale(language)"
      >
        <span class="label">{{ language.label }}</span>
        <span class="description">{{ language.description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FirebaseEventsNames, FirebaseEventsParams, triggerEvent } from '@/plugins/firebase';
  import { computed, onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();

  const isOpen = ref(false);
  const elementOutsideClicksListener = ref();

  const props = defineProps<{
    disableAnimation?: boolean;
  }>();

  const languages = computed<Language[]>(() => [
    {
      locale: 'en-US',
      description: t('features.portfolio.locale_select.description.en'),
      label: 'EN',
    },
    {
      locale: 'pt-BR',
      description: t('features.portfolio.locale_select.description.pt'),
      label: 'PT',
    },
  ]);
  const currentLanguage = computed(() =>
    languages.value.find(language => language.locale == locale.value),
  );

  const changeLocale = (newLanguage: Language) => {
    if (locale.value == newLanguage.locale) return;

    triggerEvent(FirebaseEventsNames.changeLocale, {
      [FirebaseEventsParams.locale]: newLanguage.label
    });

    isOpen.value = false;
    locale.value = newLanguage.locale;
  };

  onMounted(() => {
    document.addEventListener('click', event => {
      if (elementOutsideClicksListener.value.contains(event.target)) return;

      isOpen.value = false;
    });
  });

  interface Language {
    locale: string;
    description: string;
    label: string;
  }
</script>

<style lang="scss" scoped>
  .selector-container {
    user-select: none;
    display: flex;
    align-items: end;
    flex-direction: column;
    position: relative;

    .selector-items {
      position: absolute;
      display: flex;
      visibility: hidden;
      flex: auto;
      opacity: 0;
      user-select: none;
      flex-direction: column;
      margin-top: 32px;
      border-radius: 12px;
      transform: translate(200%, 12px);
      transition: transform 0.7s, opacity 0.5s, visibility 0.45s;
      background-color: $background-color;
      border: 1px solid $primary-color;

      &.no-animation {
        left: 50%;
        transform: translate(0, 12px);

        &.open {
          visibility: visible;
          opacity: 1;
          left: 50%;
          transform: translate(-50%, 12px);
        }
      }

      &.open {
        visibility: visible;
        transform: translate(0, 12px);
        opacity: 1;
      }

      .item {
        gap: 8px;
        padding: 16px 32px 16px 12px;
        display: flex;
        align-items: center;
        transition: 0.5s;

        &:first-child {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        &:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        &:hover {
          cursor: pointer;
          background-color: $primary-color;
          color: $background-color;
        }

        span.label {
          font-weight: 700;
        }

        span.description {
          text-wrap-mode: nowrap;
        }

        svg {
          height: 20px;
          width: 20px;
        }
      }
    }

    .current-container {
      border: 1px solid rgba(174, 174, 174, 0.388);
      padding: 2px;
      border-radius: 50%;
      transition: 0.5s;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        border: 1px solid $primary-color;
      }

      .label {
        display: flex;
        font-size: 12px;
        justify-content: center;
        font-weight: 700;
        align-items: center;
        overflow-x: hidden;
        border-radius: 50%;

        svg {
          scale: 1.3;
        }
      }
    }
  }
</style>
