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
        <div
          class="experience-item"
          v-for="experience in sortedExperiences"
          :key="experience.id"
          @mouseenter="emits('onMouseEnterExperienceList')"
          @mouseleave="emits('onMouseLeaveExperienceList')"
        >
          <div class="experience-date-container">
            <div class="experience-date">
              <span>{{ formatDate(experience.startDate) }}</span>
              <div class="dates-separator"></div>
              <span>{{ formatDate(experience.finishDate) }}</span>
            </div>
            <span class="time-spent">{{
              getTimeBetweenDates(experience.startDate, experience.finishDate)
            }}</span>
          </div>
          <div class="timeline">
            <div class="thumb"></div>
            <div class="track"></div>
          </div>
          <div class="experience-info">
            <div class="experience-image-container">
              <img
                class="experience-image"
                :src="experience.bannerUrl"
              />
            </div>
            <div class="experience-details">
              <span class="experience-company">{{ experience.company }}</span>
              <span class="experience-role">{{ experience.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, defineEmits } from 'vue';
  import SectionTitle from '../SectionTitle.vue';
  import { KATAKANA_WORK_EXPERIENCE } from '@/helpers/constants';
  import { experiencesMock } from '@/helpers/experienceMock';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const emits = defineEmits([
    'onMouseEnterExperienceList',
    'onMouseLeaveExperienceList',
  ]);

  const sortedExperiences = computed(() => {
    return experiencesMock.sort((a, b) => {
      return Date.parse(b.startDate) - Date.parse(a.startDate);
    });
  });

  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    return `${month}/${year}`;
  };

  const getTimeBetweenDates = (
    startDate: string,
    finishDate: string,
  ): string => {
    const differenceInMilliseconds =
      Date.parse(finishDate) - Date.parse(startDate);
    let differenceInDays = Math.round(
      differenceInMilliseconds / (1000 * 60 * 60 * 24),
    );
    let differenceInMonths = Math.round(differenceInDays / 30);
    const differenceInYears = Math.round(differenceInMonths / 12);

    let initialText = '';

    if (
      differenceInYears &&
      differenceInYears != Infinity &&
      differenceInYears >= 1
    ) {
      initialText += `${t('date_time.count_years', differenceInYears)} `;
    }

    if (
      differenceInMonths &&
      differenceInMonths != Infinity &&
      differenceInMonths >= 1
    ) {
      if (differenceInYears >= 1) {
        differenceInMonths = differenceInMonths - 12 * differenceInYears;
      }

      initialText += `${t('date_time.count_months', differenceInMonths)} `;
    }

    let displayText = '';
    initialText.split(' ').forEach((part, index, textParts) => {
      if (part == '') return;
      if (index == 0) return (displayText = part);

      if (index == textParts.length - 2 && displayText != '') {
        return (displayText += ` ${t('conjunctives.and')} ${part}`);
      }

      if (displayText != '') return (displayText += `, ${part}`);

      displayText = part;
    });

    return displayText.replace(/_/g, ' ');
  };
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
      display: flex;
      justify-content: center;

      .experiences-list {
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 16px;
        width: 85%;

        .experience-item {
          gap: 16px;
          padding: 0 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          flex-direction: row-reverse;

          &:last-child {
            .timeline {
              .track {
                height: 0;
              }
            }
          }

          .timeline {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: stretch;
            margin: 0 24px;
            height: 100%;
            gap: 8px;
            transform: translateY(50%);

            .track {
              width: 2px;
              background-color: white;
              height: 100%;
            }

            .thumb {
              width: 16px;
              height: 16px;
              background-color: white;
              border-radius: 50%;
            }
          }

          .experience-date-container {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;

            .experience-date {
              display: flex;
              gap: 8px;
              align-items: center;
              justify-content: start;

              span {
                font-weight: 700;
              }

              .dates-separator {
                width: 4px;
                height: 4px;
                background-color: $primary-color;
                border-radius: 50%;
              }
            }
          }

          .experience-info {
            display: flex;
            flex-direction: column;
            border-radius: 12px;
            transition: 0.5s;
            flex: 1;

            .experience-details {
              display: flex;
              padding: 8px;
              flex-direction: column;
              border-top: 1px solid $primary-color;
              background-color: #1c1c1c;
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 8px;

              .experience-company {
                font-size: 16px;
                font-weight: 700;
              }

              .experience-role {
                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.5);
              }
            }

            .experience-image-container {
              display: flex;
              padding-top: 40px;
              width: 100%;
              height: 100%;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;

              .experience-image {
                height: 100%;
                width: 100%;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                object-fit: cover;
              }
            }
          }
        }
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 16px;
      margin-bottom: 40px;
      min-height: 100%;

      .description {
        width: 100%;
      }

      .container {
        height: 100%;

        .experiences-list {
          width: 100%;
          overflow-y: visible;
        }
      }

      .description {
        font-size: 16px;
        margin-top: 8px;
        width: 100%;
      }
    }

    @media (min-width: $desktop-min-width) {
      .container .experiences-list .experience-item:nth-child(odd) {
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
</style>
