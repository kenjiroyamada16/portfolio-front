<template>
  <section id="education">
    <SectionTitle
      :key="$i18n.locale"
      :jp-text="KATAKANA_EDUCATION"
      >{{ $t('features.portfolio.sections.education.title') }}</SectionTitle
    >
    <span class="description">{{
      $t('features.portfolio.sections.education.description')
    }}</span>
    <div class="container">
      <v-tabs
        slider-color="#39DFAA"
        v-model="currentCategory"
      >
        <v-tab :value="EducationCategory.formation">{{
          $t('features.portfolio.sections.education.tabs.formation')
        }}</v-tab>
        <v-tab :value="EducationCategory.certificate">{{
          $t('features.portfolio.sections.education.tabs.certificates')
        }}</v-tab>
      </v-tabs>
      <v-tabs-window v-model="currentCategory">
        <v-tabs-window-item :value="EducationCategory.formation">
          <div
            class="formations-list"
            @mouseenter="emits('onMouseEnterEducationList')"
            @mouseleave="emits('onMouseLeaveEducationList')"
          >
            <div
              v-for="formation in formations"
              :key="formation.id"
              class="formation-item"
            >
              <div class="header">
                <div class="title-container">
                  <span class="institution">{{ formation.institution }}</span>
                  <TranslatedText
                    class="title"
                    :translated-text="formation.title"
                  />
                </div>
                <div class="date-container">
                  <span class="start-date">{{
                    formatSimpleDate(formation.startDate)
                  }}</span>
                  <div class="separator"></div>
                  <span class="end-date">{{
                    formatSimpleDate(formation.finishDate)
                  }}</span>
                </div>
              </div>
              <TranslatedText
                v-if="formation.description"
                class="formation-description"
                :key="$i18n.locale"
                :translated-text="formation.description"
              />
              <div class="formation-status">
                <div
                  :class="[
                    'indicator',
                    { complete: getIsEducationComplete(formation) },
                  ]"
                ></div>
                <span
                  :class="[
                    'status-label',
                    { complete: getIsEducationComplete(formation) },
                  ]"
                  >{{
                    getIsEducationComplete(formation)
                      ? $t(
                          'features.portfolio.sections.education.status.complete',
                        )
                      : $t(
                          'features.portfolio.sections.education.status.in_progress',
                        )
                  }}</span
                >
              </div>
            </div>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item :value="EducationCategory.certificate">
          <div
            class="certificates-list"
            @mouseenter="emits('onMouseEnterEducationList')"
            @mouseleave="emits('onMouseLeaveEducationList')"
          >
            <a
              v-for="certificate in certificates"
              :key="certificate.id"
              :href="certificate.url"
              target="_blank"
              rel="noopener noreferrer"
              class="certificate-item"
            >
              <div class="certificate-info">
                <Certificate class="certificate-icon" />
                <span class="institution">{{ certificate.institution }}</span>
                <TranslatedText
                  class="title"
                  :translated-text="certificate.title"
                />
              </div>

              <div class="date-container">
                <span class="start-date">{{
                  formatSimpleDate(certificate.startDate)
                }}</span>
                <div class="separator"></div>
                <span class="end-date">{{
                  formatSimpleDate(certificate.finishDate)
                }}</span>
              </div>
            </a>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { EducationCategory, IEducation } from '@/interfaces/api/education';
  import SectionTitle from '../SectionTitle.vue';
  import { KATAKANA_EDUCATION } from '@/helpers/constants';
  import { educationMock } from '@/helpers/educationMock';
  import { formatSimpleDate } from '@/helpers/stringExtensions';
  import TranslatedText from '../TranslatedText.vue';
  import Certificate from '../icons/Certificate.vue';

  const currentCategory = ref(0);

  const formations = computed(() => {
    return educationMock
      .filter(education => !education.isCertificate)
      .sort((a, b) => {
        return Date.parse(b.startDate) - Date.parse(a.startDate);
      });
  });
  const certificates = computed(() => {
    return educationMock
      .filter(education => education.isCertificate)
      .sort((a, b) => {
        return Date.parse(b.startDate) - Date.parse(a.startDate);
      });
  });

  const getIsEducationComplete = (education: IEducation) => {
    const now = Date.now();
    const finishDate = Date.parse(education.finishDate);

    return now > finishDate;
  };

  const emits = defineEmits([
    'onMouseEnterEducationList',
    'onMouseLeaveEducationList',
  ]);
</script>

<style lang="scss" scoped>
  #education {
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

      .formations-list {
        padding: 16px 12px 0 0;
        display: flex;
        height: 100%;
        gap: 16px;
        overflow-y: auto;
        flex-direction: column;

        .formation-item {
          padding: 8px 16px;
          background-color: #1c1c1c;

          .header {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            width: 100%;
            margin-bottom: 16px;
            justify-content: space-between;

            .title-container {
              display: flex;
              flex-direction: column;

              .institution {
                font-size: 24px;
                font-weight: 700;
              }

              .separator {
                width: 16px;
                height: 1px;
                border-radius: 16px;
                background-color: $secondary-color;
              }

              .title {
                font-style: italic;
              }
            }
          }

          .formation-description {
            margin-top: 8px;
            font-weight: 300;
            font-size: 14px;
          }

          .formation-status {
            display: flex;
            gap: 4px;
            justify-content: end;
            align-items: center;

            .indicator {
              width: 8px;
              height: 8px;
              border-radius: 16px;
              background-color: $primary-color;

              &.complete {
                background-color: $secondary-color;
              }
            }

            .status-label {
              padding: 16px 8px;
              font-size: 12px;
              color: $primary-color;

              &.complete {
                color: $secondary-color;
              }
            }
          }
        }
      }

      .certificates-list {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        width: 100%;
        padding: 16px 0;
        justify-content: center;

        .certificate-item {
          display: flex;
          padding: 16px 24px;
          max-width: 320px;
          min-width: 320px;
          min-height: 320px;
          max-height: 320px;
          background-color: #1c1c1c;
          flex-direction: column;
          text-decoration: none;
          color: $secondary-color;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0);
          transition: 0.3s;
          justify-content: space-between;

          &:hover {
            background-color: #111111;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .certificate-icon {
            width: 40px;
            height: 40px;
            margin: 12px 0;
          }

          .certificate-info {
            display: flex;
            flex: 5;
            flex-direction: column;
            align-items: center;

            .institution {
              font-weight: 400;
              text-align: center;
              color: #ffffffb1;
            }

            .title {
              text-align: center;
              font-size: 24px;
              font-weight: 600;
            }
          }
        }
      }
    }

    .date-container {
      display: flex;
      gap: 8px;
      align-items: center;
      flex: 1;
      justify-content: end;

      span {
        font-size: 14px;
      }

      .separator {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: $primary-color;
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 64px 8px;
      margin-bottom: 40px;
      min-height: fit-content;

      .description {
        width: 100%;
      }

      .container {
        .formations-list {
          padding: 16px 0;
          display: flex;
          height: 100%;
          gap: 16px;
          overflow-y: auto;
          flex-direction: column;

          .formation-item {
            .header {
              .title-container {
                width: 100%;
                justify-content: space-between;
              }
            }
          }
        }

        .certificates-list {
          .certificate-item {
            width: 100%;
          }
        }
      }

      .date-container {
        justify-content: center;
      }
    }
  }
</style>
