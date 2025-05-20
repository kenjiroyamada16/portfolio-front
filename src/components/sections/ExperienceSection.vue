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
    <div class="container">
      <div class="experiences-list">
        <ExperienceItem
          v-for="experience in sortedExperiences"
          :key="experience.id"
          :experience="experience"
          @on-mouse-enter-experience-list="emits('onMouseEnterExperienceList')"
          @on-mouse-leave-experience-list="emits('onMouseLeaveExperienceList')"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import SectionTitle from '../SectionTitle.vue';
  import { KATAKANA_WORK_EXPERIENCE } from '@/helpers/constants';
  import { experiencesMock } from '@/helpers/experienceMock';
  import ExperienceItem from '../ExperienceItem.vue';

  const emits = defineEmits([
    'onMouseEnterExperienceList',
    'onMouseLeaveExperienceList',
  ]);

  const sortedExperiences = computed(() => {
    return experiencesMock.sort((a, b) => {
      return Date.parse(b.startDate) - Date.parse(a.startDate);
    });
  });
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
      width: 75%;
    }

    .container {
      height: 100%;
      margin-top: 16px;
      overflow-y: auto;
      display: flex;
      justify-content: center;
      transition: 0.4s;

      .experiences-list {
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 16px;
        width: 50%;
        transition: 0.4s;
        background-color: $background-color;
      }
    }

    @media (max-width: 1300px) {
      .container {
        .experiences-list {
          width: 100%;
        }
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 16px 8px;
      margin-bottom: 40px;
      min-height: fit-content;

      .description {
        width: 100%;
      }

      .container {
        height: 100%;
        overflow-y: visible;

        .experiences-list {
          width: 100%;
          padding: 16px 8px;
          height: auto;
          overflow-y: visible;

          .experience-item {
            padding: 0;

            .experience-info {
              flex: 4;
            }

            .experience-date-container {
              .experience-date {
                flex-wrap: wrap;
                justify-content: center;
                gap: 4px;
                font-size: 12px;
              }

              .time-spent {
                font-size: 10px;
              }
            }
          }
        }
      }

      .description {
        font-size: 16px;
        margin-top: 8px;
        width: 100%;
      }
    }

    @media (min-width: $desktop-min-width) {
      .container {
        &:has(.experiences-list:hover) {
          background-color: #0a0b0b;
        }

        .experiences-list {
          &:hover {
            cursor: ns-resize;
            background-color: #0a0b0b;
          }

          .experience-item:nth-child(odd) {
            flex-direction: row;

            .experience-date-container {
              .experience-date {
                justify-content: end;
              }

              .time-spent {
                text-align: end;
              }
            }
          }
        }
      }
    }
  }
</style>
