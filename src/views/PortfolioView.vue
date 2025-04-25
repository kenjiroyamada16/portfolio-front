<template>
  <div
    class="main-container"
    ref="introSection"
  >
    <nav
      class="nav-bar"
      ref="navBar"
    >
      <a
        href="/"
        class="logo"
        >{{ t('names.jp_kenji') }}</a
      >
      <ul>
        <li>
          <a
            class="nav-item"
            href="#"
            >Início</a
          >
        </li>
        <li>
          <a
            class="nav-item"
            href=""
          >
            Início
          </a>
        </li>
      </ul>
      <LocaleSelector class="locale-selector" />
    </nav>
    <div class="left-aside-content">
      <div class="social-info">
        <a
          v-for="socialLink in socialLinks"
          :key="socialLink.label"
          :aria-label="socialLink.label"
          :href="socialLink.url"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="socialLink.icon" />
        </a>
        <div class="separator"></div>
      </div>
    </div>
    <div class="content">
      <section
        id="intro"
        class="present-top"
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
            <div class="role">Desenvolvedor Fullstack e Mobile</div>
            <TechnologiesList ref="technologiesList" />
          </div>
          <div class="photo-container"></div>
        </div>
      </section>
      <section
        ref="projectsSection"
        id="projects"
      >
        PROJETOS
      </section>

      <div class="footer">
        <div
          :class="['scroll-tip-container', { gone: currentSectionIndex != 0 }]"
        >
          <ScrollTip class="scroll-tip" />
        </div>
        <div class="next-section">Projetos</div>
        <div class="separator"></div>
      </div>
    </div>
    <div class="right-aside-content">
      <div class="options">
        <LocaleSelector class="locale-selector" />
      </div>
      <div
        v-if="sections[0].value"
        class="navigation-tiles"
      >
        <div
          v-for="section in sections"
          :key="section.value"
          :class="[
            'navigation-bar',
            { active: isCurrentSection(section.value) },
          ]"
          @click="scrollToSection(section.value)"
        ></div>
      </div>
      <div class="theme-selector"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Github from '@/components/icons/Github.vue';
  import Linkedin from '@/components/icons/Linkedin.vue';
  import ScrollTip from '@/components/icons/ScrollTip.vue';
  import LocaleSelector from '@/components/LocaleSelector.vue';
  import TechnologiesList from '@/components/TechnologiesList.vue';
  import { onMounted, ref } from 'vue';
  import type { Component } from 'vue';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const navBar = ref();
  const sortLettersName = ref();
  const technologiesList = ref();

  const introSection = ref();
  const projectsSection = ref();

  const socialLinks: SocialLink[] = [
    {
      label: 'GitHub',
      icon: Github,
      url: 'https://github.com/kenjiroyamada16',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nicolas-yamada',
    },
  ];

  const currentSectionIndex = ref(0);
  const sections = [introSection, projectsSection];
  const sectionTitles = ['Início', 'Projetos'];

  const isCurrentSection = (section: HTMLElement): boolean => {
    const sectionInList = sections.find(
      listSection => listSection.value.id == section.id,
    );

    return sections.indexOf(sectionInList) == currentSectionIndex.value;
  };

  const scrollToSection = (newSection: HTMLElement) => {
    if (newSection) {
      const sectionInList = sections.find(
        section => section.value.id == newSection.id,
      );

      presentSection(newSection);
      newSection.scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex.value = sections.indexOf(sectionInList);
    }
  };

  const sortLettersAnimation = (element: HTMLElement, initialText?: string) => {
    if (!element) return;

    let originalText = initialText || element.dataset.value || '';

    const vocabulary =
      'アカサタナイキシチニウクスツヌネテセケエオコソトノンホヘフヒハマミムメモヨユヤマラリルレロ';

    let iteration = 0;
    let interval = setInterval(() => {
      const displayedText = originalText
        .split('')
        .map((char, i) => {
          const firstChar =
            vocabulary[Math.floor(Math.random() * vocabulary.length)];

          if (i < iteration) return char;
          return firstChar;
        })
        .join('');

      element.textContent = displayedText;
      iteration += 1 / 2;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.textContent = originalText;
      }
    }, 50);
  };

  const startMainNameAnimation = () => {
    const element = sortLettersName.value as HTMLElement;

    if (!element) return;

    let originalText = element.dataset.value || '';
    const names = originalText.split('*');

    originalText = element.textContent == names[0] ? names[1] : names[0];

    sortLettersAnimation(element, originalText);
  };

  const presentSection = (element: HTMLElement) => {
    let section = element;

    if (!(section.tagName.toLowerCase() == 'section')) {
      section = element.querySelector('section');
    }

    section.classList.remove('present-top');
    section.classList.remove('present-bottom');
  };

  const setupInitialAnimations = () => {
    setTimeout(() => {
      startMainNameAnimation();
      presentSection(document.getElementById('intro'));
      setTimeout(() => {
        technologiesList.value.startAnimation();
      }, 1000);

      sortLettersName.value.addEventListener('mouseover', startMainNameAnimation);

      document
        .querySelectorAll('.sort-letters')
        .forEach((element: HTMLElement) => {
          sortLettersAnimation(element);
          element.addEventListener('mouseover', event =>
            sortLettersAnimation(event.target as HTMLElement),
          );
        });
    }, 200);

    const nameContainer = document.querySelector('.name-container');

    if (nameContainer) {
      setTimeout(() => {
        nameContainer.classList.add('presented');
      }, 2000);
    }
  };

  onMounted(() => {
    setupInitialAnimations();

    window.addEventListener('wheel', (event: WheelEvent) => {
      const nextSection = sections[currentSectionIndex.value + 1];
      const previousSection = sections[currentSectionIndex.value - 1];

      if (event.deltaY > 0 && nextSection.value) {
        nextSection.value.classList.add('present-bottom');
        scrollToSection(nextSection.value);

        return;
      }

      if (event.deltaY < 0 && previousSection.value) {
        previousSection.value.classList.add('present-top');
        scrollToSection(previousSection.value);
      }
    });
  });

  interface SocialLink {
    label: string;
    url: string;
    icon: Component;
  }
</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding: 0 4px;
    overflow: hidden;
    display: flex;

    > :not(.content) {
      animation: show-element 1s 3s forwards;
    }

    .right-aside-content {
      height: 100vh;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 64px;
      position: fixed;
      right: 0;
      opacity: 0;

      .options {
        padding: 24px 0;
      }

      .navigation-tiles {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        .navigation-bar {
          width: 32px;
          height: 2px;
          transition: 0.3s;
          background-color: $secondary-color;

          &.active {
            background-color: $primary-color;
            transform: scale(1.7, 1.5);
            transform-origin: right;

            &:hover {
              cursor: pointer;
              transform-origin: right;
              transform: scale(1.7, 2.05);
            }
          }

          &:hover {
            cursor: pointer;
            transform-origin: right;
            transform: scale(1.25, 2.05);
          }
        }
      }
    }

    .left-aside-content {
      height: 100vh;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-right: 64px;
      position: fixed;
      opacity: 0;

      .social-info {
        display: flex;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        justify-self: flex-end;

        .social-link {
          width: 24px;
          height: 24px;
          position: relative;
          transition: 0.5s;

          svg {
            transform: scale(1.2, 1.2);
            width: 24px;
            height: 24px;
            fill: white;
            transition: 0.4s;
          }

          &:hover {
            cursor: pointer;

            svg,
            svg path {
              fill: $primary-color;
            }
          }
        }

        .separator {
          height: 64px;
          width: 1px;
          background-color: white;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-items: center;
      width: 100%;

      .scroll-tip-container {
        opacity: 0;
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

      .footer {
        display: flex;
        flex-direction: column;
        bottom: 0;
        position: fixed;
        justify-content: center;
        align-items: center;

        .next-section {
          font-weight: 300;
          text-transform: uppercase;
        }

        .separator {
          width: 1px;
          height: 40px;
          background-color: white;
        }
      }

      section {
        height: 100vh;
        position: relative;
        max-height: 100vh;
        margin-bottom: 50vh;
        padding: 0 100px;
        width: 100%;
        transition: 1s transform, 5s opacity;
        transform: translateY(0);
        opacity: 1;

        &.present-bottom {
          transform: translateY(25%);
          opacity: 0;
        }

        &.present-top {
          transform: translateY(-25%);
          opacity: 0;
        }

        &:first-child {
          max-height: 80vh;
        }

        &#intro {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: stretch;
          gap: 12px;

          .profile-container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .profile {
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
                      animation: glitch-more 0.3s
                        cubic-bezier(0.25, 0.46, 0.45, 0.94) 1;
                    }

                    &:after {
                      animation: glitch-more 0.3s
                        cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse 1;
                    }
                  }
                }

                &:hover {
                  .jp-name {
                    &::before {
                      animation: glitch 0.3s
                        cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
                    }

                    &:after {
                      animation: glitch 0.3s
                        cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
                        infinite;
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
            }

            .photo-container {
              width: 400px;
              height: 400px;
              background-size: cover;
              margin-right: 100px;
              transition: 0.3s;
              box-shadow: 2px 2px 1px 1px $background-color,
                56px 56px 1px 1px $primary-color;
              background-image: url('/src/assets/images/profile_photo.jpeg');

              &:hover {
                box-shadow: 2px 2px 1px 1px $background-color,
                  24px 24px 1px 1px $primary-color;
              }
            }
          }
        }
      }
    }

    .nav-bar {
      background-color: #0d0f1246;
      backdrop-filter: blur(8px);
      position: fixed;
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 16px 32px;
      transition: 0.5s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      transform: translateY(-100%);

      .logo {
        color: white;
        transition: 0.4s;
        font-size: 1.5rem;
        text-decoration: none;
        animation: show-element 1s forwards;

        &:hover {
          user-select: none;
          color: $primary-color;
          transform: translateY(-4px);
        }
      }

      .locale-selector {
        position: static;
      }

      ul {
        padding: 12px 0;
        gap: 20px;
        display: flex;
        list-style: none;

        .nav-item {
          font-size: 12px;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          position: relative;

          &:hover {
            color: $secondary-color;

            &::before {
              opacity: 1;
              transform: translate(-16px);
            }

            &::after {
              opacity: 1;
              transform: translate(12px);
            }
          }

          &::before {
            content: '{';
            position: absolute;
            color: $primary-color;
            font-size: 1.1rem;
            opacity: 0;
            left: 0;
            transition: 0.4s;
            transform: translate(50%);
          }

          &::after {
            content: '}';
            position: absolute;
            color: $primary-color;
            font-size: 1.1rem;
            opacity: 0;
            right: 0;
            transition: 0.4s;
            transform: translate(-50%);
          }
        }
      }
    }

    .content {
      padding: 80px 40px;
    }
  }

  @keyframes show-element {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes shimmer {
    to {
      mask-position: 0 250%;
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
      z-index: 2;
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
      z-index: 1;
    }
    80% {
      transform: translate(2px, -2px);
    }
    to {
      transform: translate(0);
    }
  }

  @keyframes glitch-more {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-6px, 4px);
      z-index: 2;
    }
    40% {
      transform: translate(-4px, -4px);
    }
    60% {
      transform: translate(4px, 6px);
      z-index: 1;
    }
    80% {
      transform: translate(4px, -4px);
    }
    to {
      transform: translate(0);
    }
  }
</style>
