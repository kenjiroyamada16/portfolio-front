<template>
  <div
    class="experience-item"
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
      <div class="track track-above"></div>
      <div class="thumb"></div>
      <div class="track track-below"></div>
    </div>
    <div class="experience-info">
      <div class="experience-image-container">
        <img
          class="experience-image"
          :src="experience.bannerUrl"
        />
      </div>
      <div
        @click="toggleExpandable"
        class="experience-details"
      >
        <span class="experience-company">{{ experience.company }}</span>
        <span class="experience-role">{{ experience.role }}</span>
        <span
          v-if="isExpanded"
          class="description"
          >{{ experience.description }}</span
        >
        <div class="skills-container">
          <div class="skill-list">
            <div
              v-for="skill in getSkills"
              class="skill"
            >
              {{ skill }}
            </div>
          </div>
          <div class="details-tip-container">
            <span
              v-if="isExpanded"
              class="details-tip"
              >Esconder detalhes</span
            >
            <span
              v-else
              class="details-tip"
              >Mostrar detalhes</span
            >
            <v-icon
              icon="mdi-arrow-right"
              size="x-small"
            ></v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { IExperience } from '@/interfaces/api/experience';
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const props = defineProps<{
    experience: IExperience;
  }>();

  const isExpanded = ref(false);

  const getSkills = computed<string[]>(() => {
    const skillsList = props.experience.skills.slice();

    if (!skillsList || skillsList.length <= 0) return;

    if (isExpanded.value || skillsList.length <= 3) return skillsList;

    skillsList.splice(3, 0, '...');

    return skillsList.slice(0, 4);
  })

  const toggleExpandable = () => {
    isExpanded.value = !isExpanded.value;
  };

  const emits = defineEmits([
    'onMouseEnterExperienceList',
    'onMouseLeaveExperienceList',
  ]);

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
  .experience-item {
    gap: 16px;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 0;
    flex-direction: row-reverse;

    &:first-child .timeline .track-above {
      visibility: hidden;
    }

    &:last-child .timeline .track-below {
      visibility: hidden;
    }

    .timeline {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
      margin: 0 12px;
      height: 100%;
      gap: 8px;

      .track {
        width: 2px;
        background-color: white;
        flex: 1;
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

        &:hover {
          cursor: pointer;
          background-color: #111111;

          .skills-container .details-tip-container {
            i {
              transform: translateX(4px);
            }
          }
        }

        .experience-company {
          font-size: 16px;
          font-weight: 700;
        }

        .experience-role {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
        }

        .description {
          font-size: 12px;
          margin-top: 8px;
        }

        .skills-container {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;

          .skill-list {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;

            .skill {
              font-size: 12px;
              padding: 4px 8px;
              border-radius: 16px;
              border: 1px solid $primary-color;
            }
          }

          .details-tip-container {
            display: flex;
            align-items: center;
            gap: 4px;

            .details-tip {
              text-decoration: underline;
              font-weight: 400;
              font-size: 12px;
            }

            i {
              transition: 0.2s;
            }
          }
        }
      }

      .experience-image-container {
        display: flex;
        padding-top: 32px;
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

    @media (max-width: $desktop-min-width) {
      padding: 16px 0;

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

      .description {
        font-size: 12px;
        margin-top: 8px;
        width: 100%;
      }
    }

    @media (min-width: $desktop-min-width) {
      &:nth-child(odd) {
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
