<template>
  <section
    id="intro"
    class="present"
  >
    <div class="stars-container">
      <div
        v-for="index in 50"
        :key="index"
        class="star"
      ></div>
    </div>
    <Planet class="planet-icon" />
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
          download
          @click="triggerEvent(FirebaseEventsNames.downloadCv)"
          >{{ t('features.portfolio.sections.intro.download_cv') }}</a
        >
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
  import Planet from '../icons/Planet.vue';
  import { FirebaseEventsNames, triggerEvent } from '@/plugins/firebase';

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
    setupStars();

    setTimeout(() => {
      technologiesList.value.startAnimation();
    }, 1000);

    sortLettersName.value.addEventListener('mouseover', startMainNameAnimation);
  });

  const setupStars = () => {
    const starsContainer = document.querySelector('.stars-container');
    const starsList = document.querySelectorAll(
      '.star',
    ) as NodeListOf<HTMLElement>;

    starsList.forEach(element => {
      element.style.top = `${Math.random() * starsContainer.clientHeight}px`;
      element.style.left = `${Math.random() * starsContainer.clientWidth}px`;
      element.style.animationDelay = `${Math.random() * 15 + 3}s`;
      element.style.animationDuration = `${Math.random() * 10 + 3}s`;
    });
  };
</script>

<style lang="scss" scoped>
  #intro {
    max-height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    animation: present-intro 3s forwards;

    .stars-container {
      width: 100%;
      height: 100%;
      position: absolute;

      .star {
        z-index: -10;
        scale: 0;
        background-color: white;
        width: 2px;
        height: 2px;
        margin: 32px;
        position: absolute;
        animation: twink 2s infinite;
      }
    }

    .planet-icon {
      position: absolute;
      top: 50%;
      right: 0;
      width: 400px;
      height: 400px;
      z-index: -1;
      transition: opacity 1.2s;
      transform: translate(-50%, -50%);
    }

    .profile-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

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

  @media (max-width: 1300px) {
    #intro {
      .planet-icon {
        width: 400px;
        height: 400px;
        top: 70%;
        transform: translate(-10%, -50%);
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

  @keyframes twink {
    0%,
    100% {
      scale: 0;
    }
    50% {
      scale: 1;
    }
  }
</style>
