<template>
  <div
    ref="content"
    class="main-container"
  >
    <MainNavBar
      :sections="sections"
      :current-section-index="currentSectionIndex"
      @scroll-to-section="scrollToSection"
    />
    <div :class="['mobile-menu-button', { hidden: !showMobileHeader }]">
      <v-icon
        icon="mdi-menu"
        @click="openMobileMenu"
      />
    </div>
    <div
      :class="[
        'left-aside-content',
        { hidden: currentSectionIndex == sections.length - 1 },
      ]"
    >
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
      <IntroSection
        ref="introSection"
        :is-mobile="mobile"
        :social-links="socialLinks"
      />
      <ProjectsSection
        ref="projectsSection"
        :social-links="socialLinks"
      />
      <ExperienceSection ref="experienceSection" />
      <SkillsSection ref="skillsSection" />
      <ContactSection
        ref="contactSection"
        :social-links="socialLinks"
      />
      <div class="tip-footer">
        <div
          :class="['scroll-tip-container', { gone: currentSectionIndex != 0 }]"
        >
          <ScrollTip class="scroll-tip" />
        </div>
        <div
          :class="[
            'next-section-container',
            { hidden: currentSectionIndex >= sections.length - 1 },
          ]"
        >
          <div class="next-section">
            {{
              sections[currentSectionIndex + 1]?.title ||
              sections[currentSectionIndex].title
            }}
          </div>
          <div class="separator"></div>
        </div>
      </div>
    </div>
    <div class="right-aside-content">
      <div class="options">
        <LocaleSelector class="locale-selector" />
      </div>
      <div
        v-if="sections[0].ref.value"
        class="navigation-tiles"
      >
        <div
          v-for="section in sections"
          :key="section.ref.value.id"
          @click="scrollToSection(section.index)"
          :class="[
            'navigation-bar',
            { active: currentSectionIndex == section.index },
          ]"
        ></div>
      </div>
      <div class="theme-selector"></div>
    </div>
  </div>
  <div :class="['mobile-menu-container', { hidden: !isMobileMenuOpen }]">
    <div class="close-button">
      <v-icon
        @click="closeMobileMenu"
        icon="mdi-close"
      />
    </div>
    <div class="navigation">
      <a
        href="/"
        class="logo"
        :data-text="t('names.jp_kenji')"
        >{{ t('names.jp_kenji') }}</a
      >
      <ul>
        <li
          v-for="section in sections"
          :key="section.index"
          :class="[{ active: currentSectionIndex == section.index }]"
        >
          <a
            class="nav-item"
            :href="section.navBarHref"
            @click.prevent="mobileNavSection(section.index)"
          >
            {{ section.navBarTitle || section.title }}
          </a>
        </li>
      </ul>
      <LocaleSelector
        style="margin-top: 40px"
        :disable-animation="true"
      />
    </div>
    <div class="social-links-container">
      <div
        class="social-info"
        style="flex-direction: row; justify-content: center"
      >
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
      </div>
      <div class="repo-tip">
        <span>{{
          t('features.portfolio.sections.contact.footer.repo_tip.first_part')
        }}</span>
        <a
          :href="GITHUB_REPO_URL"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            t('features.portfolio.sections.contact.footer.repo_tip.link')
          }}</a
        >
        <span>{{
          t('features.portfolio.sections.contact.footer.repo_tip.second_part')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Github from '@/components/icons/Github.vue';
  import Linkedin from '@/components/icons/Linkedin.vue';
  import ScrollTip from '@/components/icons/ScrollTip.vue';
  import IntroSection from '@/components/sections/IntroSection.vue';
  import ProjectsSection from '@/components/sections/ProjectsSection.vue';
  import ContactSection from '@/components/sections/ContactSection.vue';
  import ExperienceSection from '@/components/sections/ExperienceSection.vue';
  import LocaleSelector from '@/components/LocaleSelector.vue';
  import {
    GITHUB_URL,
    LINKEDIN_URL,
    GITHUB_REPO_URL,
  } from '@/helpers/constants';
  import { sortLettersAnimation } from '@/helpers/sortLettersAnimation';
  import { computed, onMounted, ref, watch } from 'vue';
  import type { Component, Ref } from 'vue';

  import { useI18n } from 'vue-i18n';
  import MainNavBar from '@/components/MainNavBar.vue';
  import { useDisplay } from 'vuetify';
  import SkillsSection from '@/components/sections/SkillsSection.vue';

  const { t, locale } = useI18n();
  const { mobile } = useDisplay({ mobileBreakpoint: 760 });

  const currentSectionIndex = ref(0);

  const introSection = ref();
  const projectsSection = ref();
  const experienceSection = ref();
  const contactSection = ref();
  const skillsSection = ref();

  const content = ref();

  const isMobileMenuOpen = ref(false);
  const showMobileHeader = ref(false);

  const socialLinks: ISocialLink[] = [
    {
      label: t('names.github'),
      icon: Github,
      url: GITHUB_URL,
    },
    {
      label: t('names.linkedin'),
      icon: Linkedin,
      url: LINKEDIN_URL,
    },
  ];

  const sections = computed<ISection[]>(() => [
    {
      id: 'intro',
      index: 0,
      title: t('features.portfolio.sections.intro.title'),
      ref: introSection,
      navBarHref: '#intro',
    },
    {
      id: 'projects',
      index: 1,
      title: t('features.portfolio.sections.projects.title'),
      ref: projectsSection,
      navBarHref: '#projects',
    },
    {
      id: 'experience',
      index: 2,
      title: t('features.portfolio.sections.experience.title'),
      ref: experienceSection,
      navBarHref: '#experience',
      navBarTitle: t('features.portfolio.sections.experience.navbar_title'),
    },
    {
      id: 'skills',
      index: 3,
      title: t('features.portfolio.sections.skills.title'),
      ref: skillsSection,
      navBarHref: '#skills',
    },
    {
      id: 'contact',
      index: 4,
      title: t('features.portfolio.sections.contact.title'),
      ref: contactSection,
      navBarHref: '#contact',
    },
  ]);

  const scrollToSection = (newSectionIndex: number) => {
    const sectionInList = sections.value.find(
      section => section.index == newSectionIndex,
    );

    if (!sectionInList) return;

    const section = document.getElementById(
      `${sectionInList.navBarHref}`.replace('#', ''),
    ) as HTMLElement;

    currentSectionIndex.value = newSectionIndex;
    presentSections();
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const presentSections = () => {
    let presentingSections = document.querySelectorAll('section');

    if (!presentingSections) return;

    presentingSections.forEach(section => {
      section.classList.remove('present');
    });
  };

  const setupInitialAnimations = () => {
    setTimeout(() => {
      presentSections();

      document
        .querySelectorAll('.sort-letters')
        .forEach((element: HTMLElement) => {
          sortLettersAnimation(element, {
            speedMs: 30,
          });

          element.addEventListener('mouseover', event =>
            sortLettersAnimation(event.target as HTMLElement, {
              speedMs: 30,
            }),
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

  const handleMainScroll = (event: WheelEvent) => {
    if (mobile.value) return;

    const nextSection = sections.value[currentSectionIndex.value + 1];
    const previousSection = sections.value[currentSectionIndex.value - 1];

    if (event.deltaY > 0 && nextSection?.ref.value) {
      return scrollToSection(nextSection.index);
    }

    if (event.deltaY < 0 && previousSection?.ref.value) {
      scrollToSection(previousSection.index);
    }
  };

  const mobileNavSection = (sectionIndex: number) => {
    scrollToSection(sectionIndex);
    closeMobileMenu();
  };

  const openMobileMenu = () => (isMobileMenuOpen.value = true);
  const closeMobileMenu = () => (isMobileMenuOpen.value = false);

  watch(currentSectionIndex, (newValue: number) => {
    let previousSection = sections[newValue - 1]?.ref.value;
    let nextSection = sections[newValue + 1]?.ref.value;

    if (previousSection?.tagName.toLowerCase() !== 'section') {
      previousSection = previousSection?.querySelector('section');
    }

    if (nextSection?.tagName.toLowerCase() !== 'section') {
      nextSection = nextSection?.querySelector('section');
    }

    if (previousSection) previousSection.classList.add('present');
    if (nextSection) nextSection.classList.add('present');
  });

  onMounted(() => {
    scrollToSection(sections.value[0].index);

    setupInitialAnimations();

    window.addEventListener('wheel', (event: WheelEvent) =>
      handleMainScroll(event),
    );
    content.value.addEventListener(
      'scroll',
      () => (showMobileHeader.value = content.value.scrollTop >= 400),
    );
  });

  export interface ISection {
    id: string;
    index: number;
    title: string;
    ref: Ref<HTMLElement>;
    navBarHref: string;
    navBarTitle?: string;
  }

  export interface ISocialLink {
    label: string;
    url: string;
    icon: Component;
  }
</script>

<style lang="scss" scoped>
  .mobile-menu-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #0d0f12ac;
    backdrop-filter: blur(16px);
    z-index: 20;
    display: none;
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;
    transform: translateX(0);
    transition: 0.7s;

    @media (width <= $desktop-min-width) {
      display: flex;
    }

    &.hidden {
      transform: translateX(100%);
    }

    .close-button {
      display: flex;
      padding: 24px;
      justify-content: end;
    }

    .navigation {
      flex-grow: 1;
      display: flex;
      padding: 40px;
      align-items: center;
      flex-direction: column;

      .logo {
        color: $primary-color;
        transition: 0.4s scale, 0.8s color;
        font-size: 32px;
        text-decoration: none;
        user-select: none;
        margin-bottom: 64px;
      }

      ul {
        padding: 12px 0;
        gap: 20px;
        display: flex;
        list-style: none;
        flex-direction: column;

        li {
          text-align: center;
          width: 100%;
          position: relative;

          &:focus {
            color: $secondary-color;
          }

          &.active {
            .nav-item::after {
              width: 50%;
              left: 0;
            }
          }

          .nav-item {
            font-size: 16px;
            font-weight: 300;
            text-transform: uppercase;
            text-decoration: none;
            color: white;
            position: relative;
            box-sizing: content-box;
            width: 100%;
            transition: 0.5s;

            &::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              border-radius: 8px;
              background-color: $primary-color;
              bottom: -4px;
              left: 50%;
              transition: 0.5s;
            }
          }
        }
      }
    }

    .social-links-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 32px;
      gap: 24px;

      .repo-tip {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 4px;
        font-size: 12px;

        a {
          color: $secondary-color;
        }

        @media (width <= 290px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
  }

  .main-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: $background-color;

    @media (width <= $desktop-min-width) {
      overflow-y: auto;

      .content {
        section {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      }
    }

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
      z-index: 10;

      @media (width <= $desktop-min-width) {
        display: none;
      }

      .options {
        padding: 24px 0;

        .locale-selector {
          z-index: 15;
        }
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
      transform: translateY(0);
      transition: transform 1s;

      @media (width <= $desktop-min-width) {
        display: none;
      }

      &.hidden {
        transform: translateY(100%);
      }
    }

    .mobile-menu-button {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      background-color: #0d0f125e;
      backdrop-filter: blur(16px);
      z-index: 20;
      display: none;
      justify-content: flex-end;
      padding: 16px 12px;
      transition: transform 0.6s;

      &.hidden {
        transform: translateY(-100%);
      }

      @media (width <= $desktop-min-width) {
        display: flex;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

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

      .tip-footer {
        display: flex;
        flex-direction: column;
        bottom: 0;
        opacity: 0;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        justify-content: center;
        align-items: center;
        animation: show-element 1s 3s forwards;

        @media (width <= $desktop-min-width) {
          display: none;
        }

        .next-section-container {
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          opacity: 0.8;

          &.hidden {
            .next-section {
              opacity: 0;
            }

            .separator {
              height: 0;
            }
          }

          .next-section {
            font-weight: 300;
            transition: opacity 1s;
            text-transform: uppercase;
          }

          .separator {
            width: 1px;
            height: 24px;
            transform-origin: bottom;
            transition: 0.7s;
            background-color: white;
          }
        }
      }

      section {
        height: 100vh;
        max-height: 100vh;
        margin-bottom: 50vh;
        padding: 0 100px;
        width: 100%;
        transition: 4s;
        opacity: 1;

        &.present {
          opacity: 0;
        }
      }
    }
  }

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
</style>
