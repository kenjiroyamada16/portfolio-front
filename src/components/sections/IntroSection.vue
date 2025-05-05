<template>
  <section
    id="intro"
    class="present"
  >
    <div class="profile-container">
      <div class="profile">
        <div class="name-container">
          <span
            class="jp-name"
            :data-text="t('names.jp_kenji')"
            >{{ t('names.jp_kenji') }}</span
          >
          <div
            ref="sortLettersName"
            :data-value="`${t('names.author')}*${t('names.author_jp')}`"
            class="pt-name"
          ></div>
        </div>
        <div class="role">
          {{ t('features.portfolio.sections.intro.role') }}
        </div>
        <TechnologiesList ref="technologiesList" />
        <a
          :href="cvFile"
          target="_blank"
          rel="noopener noreferrer"
          class="cv-link"
          >{{ t('features.portfolio.sections.intro.download_cv') }}</a
        >
      </div>
      <div class="photo-container">
        <img src="/src/assets/images/profile_photo.jpg" />
      </div>
    </div>
    <div :class="['scroll-tip-container', { gone: !isMobile }]">
      <ScrollTip class="scroll-tip" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import cvFile from '@/assets/files/Curriculo_Nicolas.pdf';
  import ScrollTip from '@/components/icons/ScrollTip.vue';
  import TechnologiesList from '../TechnologiesList.vue';
  import { sortLettersAnimation } from '@/helpers/sortLettersAnimation';
  import { onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const sortLettersName = ref();
  const technologiesList = ref();

  const props = defineProps<{
    isMobile: boolean;
  }>();

  const startMainNameAnimation = () => {
    const element = sortLettersName.value as HTMLElement;

    if (!element) return;

    let originalText = element.dataset.value || '';
    const names = originalText.split('*');

    originalText = element.textContent == names[0] ? names[1] : names[0];

    sortLettersAnimation(element, { original: originalText });
  };

  onMounted(() => {
    const nameContainer = document.querySelector('.name-container');

    if (nameContainer) {
      setTimeout(() => {
        nameContainer.classList.add('present');
      }, 2000);
    }

    startMainNameAnimation();

    setTimeout(() => {
      technologiesList.value.startAnimation();
    }, 1000);

    sortLettersName.value.addEventListener('mouseover', startMainNameAnimation);
  });
</script>

<style lang="scss" scoped>
  #intro {
    max-height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    animation: present-intro 3s forwards;

    .profile-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 32px;

      .profile {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 100px;
        position: relative;

        .name-container {
          display: flex;
          overflow: visible;

          &.presented {
            .jp-name {
              &::before {
                animation: glitch-more 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  1;
              }

              &:after {
                animation: glitch-more 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  reverse 1;
              }
            }
          }

          &:hover {
            .jp-name {
              &::before {
                animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
                  infinite;
              }

              &:after {
                animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                  reverse both infinite;
              }
            }
          }

          .pt-name {
            width: 460px;
            font-size: 64px;
            line-height: 64px;
            font-weight: 900;
            text-transform: uppercase;
          }

          .jp-name {
            color: $primary-color;
            font-size: 100px;
            position: absolute;
            z-index: -1;
            top: 0;
            right: 35%;
            opacity: 0;
            transform: translate(-20px, -25%);
            animation: show-element 1s 2s forwards;

            &:before,
            &:after {
              display: block;
              content: attr(data-text);
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.8;
            }

            &:before {
              color: $primary-color;
              z-index: -1;
            }

            &:after {
              color: $secondary-color;
              z-index: -2;
            }
          }
        }

        .role {
          font-weight: 200;
          font-size: 40px;
        }

        .cv-link {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $background-color;
          color: white;
          font-weight: 200;
          cursor: pointer;
          align-self: flex-start;
          transition: 0.3s;
          text-transform: uppercase;
          padding: 24px 40px;
          font-size: 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          line-height: 20px;
          margin-top: 24px;

          &:hover {
            font-weight: 500;
            border: 1px solid transparent;
            background-color: $primary-color;
            color: $background-color;
          }
        }
      }

      .photo-container {
        width: 280px;
        height: 280px;
        margin-right: 100px;
        transition: 0.3s;
        box-shadow: 2px 2px 1px 1px $background-color,
          24px 24px 1px 1px $primary-color;

        &:hover {
          box-shadow: 2px 2px 1px 1px $background-color,
            12px 12px 1px 1px $primary-color;
        }

        img {
          object-fit: cover;
          width: 280px;
          height: 280px;
        }
      }
    }

    .scroll-tip-container {
      opacity: 0;
      margin-top: 64px;
      transition: 0.5s;
      animation: show-element 1s 5s forwards;

      &.gone {
        animation: none;
      }

      .scroll-tip {
        width: 24px;
        height: 24px;
        margin-bottom: 32px;
        mask-image: linear-gradient(to top, #e9e8e200, #e9e8e2dc, #e9e8e21b);
        mask-size: 100% 300%;
        mask-position: bottom;
        animation: shimmer 2s infinite;
        box-sizing: content-box;
      }
    }
  }

  @media (max-width: $desktop-min-width) {
    #intro {
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
      transition: none;
      padding: 16px;
      margin-bottom: 40px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);

      .profile-container {
        align-items: start;
        margin-top: 36px;
        flex-direction: column;

        .profile {
          height: 100%;
          display: flex;
          justify-content: center;
          margin-left: 0;

          .name-container {
            width: 70%;
            min-width: 272px;
            justify-content: center;
            position: relative;

            .pt-name {
              font-size: 52px;
              line-height: 40px;
              font-weight: 900;
              width: 100%;
              text-transform: uppercase;
            }

            .jp-name {
              color: $primary-color;
              font-size: 60px;
              position: absolute;
              z-index: -1;
              top: 0;
              right: 0;
              opacity: 0;
              transform: translateY(-35%);
              animation: show-element 1s 2s forwards;

              &:before,
              &:after {
                display: block;
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.8;
              }

              &:before {
                color: $primary-color;
                z-index: -1;
              }

              &:after {
                color: $secondary-color;
                z-index: -2;
              }
            }
          }

          .role {
            font-weight: 200;
            font-size: 16px;
          }

          .cv-link {
            transition: 0.3s;
            text-transform: uppercase;
            font-size: 12px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            margin-top: 24px;
            padding: 16px 20px;

            &:hover {
              font-weight: 500;
              border: 1px solid transparent;
              background-color: $primary-color;
              color: $background-color;
            }
          }
        }

        .photo-container {
          width: 140px;
          margin-top: 40px;
          margin-right: 0;
          height: 140px;
          transition: 0.3s;
          box-shadow: 2px 2px 1px 1px $background-color,
            24px 24px 1px 1px $primary-color;

          &:hover {
            box-shadow: 2px 2px 1px 1px $background-color,
              12px 12px 1px 1px $primary-color;
          }

          img {
            object-fit: cover;
            width: 140px;
            height: 140px;
          }
        }
      }

      .scroll-tip-container {
        position: absolute;
        bottom: 0;

        .scroll-tip {
          margin: 0;
        }
      }
    }
  }
</style>
