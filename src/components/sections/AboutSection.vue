<template>
  <section id="about">
    <SectionTitle
      :key="$i18n.locale"
      :jp-text="KATAKANA_ABOUT"
      >{{ $t('features.portfolio.sections.about.title') }}</SectionTitle
    >
    <div class="container">
      <div class="description-container">
        <span class="introduction">{{
          $t(
            'features.portfolio.sections.about.description.paragraphs.introduction',
          )
        }}</span>
        <span class="middle">{{
          $t('features.portfolio.sections.about.description.paragraphs.middle')
        }}</span>
        <span class="conclusion">{{
          $t(
            'features.portfolio.sections.about.description.paragraphs.conclusion',
          )
        }}</span>
        <Planet class="planet-icon" />
      </div>
      <div class="profile-info">
        <div class="photo-container">
          <span class="katakana-name">{{ KATAKANA_NAME }}</span>
          <img
            src="/src/assets/images/profile_photo.webp"
            loading="lazy"
          />
        </div>
        <span class="quote"
          ><q>{{
            $t('features.portfolio.sections.about.outer_wilds_quote')
          }}</q></span
        >
        <div class="separator"></div>
        <span class="languages-title">{{
          $t('features.portfolio.sections.about.languages_section.title')
        }}</span>
        <div class="languages-list">
          <div class="language-item">
            <span class="label">{{
              $t(
                'features.portfolio.sections.about.languages_section.languages.portuguese',
              )
            }}</span>
            <div class="progress-bar-container">
              <div class="progress-bar native"></div>
            </div>
            <span class="level">{{
              $t(
                'features.portfolio.sections.about.languages_section.labels.native',
              )
            }}</span>
          </div>
          <div class="language-item">
            <span class="label">{{
              $t(
                'features.portfolio.sections.about.languages_section.languages.english',
              )
            }}</span>
            <div class="progress-bar-container">
              <div class="progress-bar proficient"></div>
            </div>
            <span class="level">{{
              $t(
                'features.portfolio.sections.about.languages_section.labels.proficient',
              )
            }}</span>
          </div>
          <div class="language-item">
            <span class="label">{{
              $t(
                'features.portfolio.sections.about.languages_section.languages.japanese',
              )
            }}</span>
            <div class="progress-bar-container">
              <div class="progress-bar basic"></div>
            </div>
            <span class="level">{{
              $t(
                'features.portfolio.sections.about.languages_section.labels.basic',
              )
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { KATAKANA_ABOUT, KATAKANA_NAME } from '@/helpers/constants';
  import SectionTitle from '../SectionTitle.vue';
  import Planet from '../icons/Planet.vue';
</script>

<style lang="scss" scoped>
  #about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 100px;

    .container {
      width: 100%;
      display: flex;
      flex: 1;

      .description-container {
        display: flex;
        flex: 2;
        gap: 12px;
        flex-direction: column;
        position: relative;

        span {
          text-align: justify;
          font-size: 20px;
          font-weight: 400;
          z-index: 1;
        }

        .planet-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          opacity: 0.4;
          transform: translate(-50%, -50%);

          &:deep(#planet) {
            animation: spin 40s linear infinite;
            transform-origin: center;
          }
        }
      }

      .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 2;
        height: 100%;
        margin: 0 12px;

        .photo-container {
          margin: 0 32px;
          width: 180px;
          height: 180px;
          position: relative;
          transition: 0.3s;
          z-index: 0;
          box-shadow: 2px 2px 1px 1px $background-color,
            8px 8px 1px 1px $primary-color;

          .katakana-name {
            text-align: center;
            position: absolute;
            font-weight: 600;
            width: 100%;
            color: $primary-color;
            transform: translate(-50%, -50%);
            font-size: 40px;
            left: 50%;
            top: 0;
          }

          .name {
            z-index: -1;
            position: absolute;
            font-weight: 600;
            transform: translateY(-50%) rotate(90deg);
            color: $primary-color;
            right: -25%;
            font-size: 24px;
            top: 50%;
          }

          &:hover {
            box-shadow: 2px 2px 1px 1px $background-color,
              24px 24px 1px 1px $primary-color;
          }

          img {
            object-fit: cover;
            width: 180px;
            height: 180px;
          }
        }

        .quote {
          margin: 32px 12px;
          text-align: center;
          font-size: 12px;
          font-weight: 400;
          font-style: italic;
        }

        .separator {
          height: 100%;
        }

        .languages-title {
          font-size: 24px;
          font-weight: 500;
          text-align: center;
          margin-top: 24px;
          text-transform: uppercase;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          margin: 12px;
          width: 100%;

          .language-item {
            width: 100%;
            display: flex;
            gap: 12px;
            align-items: center;

            .label {
              flex: 1;
              text-align: end;
              font-size: 16px;
              font-weight: 700;
            }

            .level {
              flex: 1;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.8);
              font-weight: 300;
            }

            .progress-bar-container {
              display: flex;
              height: 8px;
              flex: 1;
              border-radius: 12px;
              border: 1px solid rgba(255, 255, 255, 0.2);

              .progress-bar {
                display: flex;
                height: 100%;
                border-radius: 12px;
                background-color: $primary-color;

                &.proficient {
                  width: 85%;
                }

                &.native {
                  width: 100%;
                }

                &.intermediary {
                  width: 50%;
                }

                &.basic {
                  width: 20%;
                }
              }
            }
          }
        }
      }
    }

    @media (max-width: 1400px) {
      .container {
        .description-container {
          span {
            font-size: 16px;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      .container {
        .profile-info {
          .photo-container {
            width: 120px;
            height: 120px;

            img {
              width: 120px;
              height: 120px;
            }

            .katakana-name {
              font-size: 20px;
            }
          }

          .quote {
            font-size: 10px;
          }
        }

        .description-container {
          span {
            font-size: 13px;
          }
        }
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 64px 8px;
      margin-bottom: 40px;
      min-height: fit-content;

      .container {
        flex-direction: column;

        .description-container {
          width: 100%;
        }

        .profile-info {
          margin: 32px 0;
        }
      }
    }
  }

  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
</style>
