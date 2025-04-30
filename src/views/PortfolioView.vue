<template>
  <div
    class="main-container"
    ref="introSection"
  >
    <div
      ref="navBar"
      :class="['navbar-container', { hidden: currentSectionIndex == 0 }]"
    >
      <nav class="nav-bar">
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
            :class="{ active: currentSectionIndex == section.index }"
          >
            <a
              class="nav-item"
              :href="section.navBarHref"
              @click.prevent="scrollToSection(section.index)"
            >
              {{ section.title }}
            </a>
          </li>
        </ul>
        <a class="logo">{{ t('names.jp_kenji') }}</a>
      </nav>
      <div class="horizontal-line"></div>
      <div class="vertical-line"></div>
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
              href="/src/assets/files/Curriculo_Nicolas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="cv-link"
              >{{ t('features.portfolio.sections.intro.download_cv') }}</a
            >
          </div>
        </div>
        <!-- Descomentar quando tiver certeza do conteúdo a mostrar aqui -->
        <!-- <div class="languages-showcase-container"></div> -->
      </section>
      <section
        ref="projectsSection"
        id="projects"
      >
        <SectionTitle :jp-text="KATAKANA_PROJECT">{{
          t('features.portfolio.sections.projects.title')
        }}</SectionTitle>
        <div class="description">
          <span>{{
            t('features.portfolio.sections.projects.description')
          }}</span>
        </div>
        <div class="projects-container">
          <div
            class="projects-list"
            ref="projectsList"
          >
            <div
              class="project"
              v-for="project in projects"
              :key="project.id"
            >
              <ProjectItem
                @click="openProjectUrl(project.url)"
                :project="project"
              />
            </div>
          </div>
          <div
            class="previous-button hidden"
            ref="projectsListPreviousButton"
          >
            <v-icon icon="mdi-chevron-left"></v-icon>
          </div>
          <div
            class="next-button"
            ref="projectsListNextButton"
          >
            <v-icon icon="mdi-chevron-right"></v-icon>
          </div>
        </div>
      </section>
      <section
        id="contact"
        ref="contactSection"
      >
        <div class="separator"></div>
        <div class="contact-container">
          <SectionTitle :jp-text="KATAKANA_CONTACT">{{
            t('features.portfolio.sections.contact.title')
          }}</SectionTitle>
          <div class="description">
            {{ t('features.portfolio.sections.contact.description') }}
          </div>
          <div class="email-contact-container">
            <a
              :href="`mailto:${MY_EMAIL}`"
              class="email-contact"
              >{{ MY_EMAIL }}</a
            >
            <div
              ref="clipboardButton"
              class="clipboard-button"
            >
              <ClipboardCheck
                class="clipboard-checked"
                v-if="clipboardShowCheck"
              />
              <Clipboard
                class="clipboard-plain"
                v-else
              />
            </div>
          </div>
          <div class="social-links-container">
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
        </div>
        <footer>
          <div class="social-links-container">
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
          <span class="label">{{
            t('features.portfolio.sections.contact.footer.description')
          }}</span>
          <div class="repo-tip">
            <span>{{
              t(
                'features.portfolio.sections.contact.footer.repo_tip.first_part',
              )
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
              t(
                'features.portfolio.sections.contact.footer.repo_tip.second_part',
              )
            }}</span>
          </div>
        </footer>
      </section>
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
</template>

<script lang="ts" setup>
  import Github from '@/components/icons/Github.vue';
  import Linkedin from '@/components/icons/Linkedin.vue';
  import Clipboard from '@/components/icons/Clipboard.vue';
  import ClipboardCheck from '@/components/icons/ClipboardCheck.vue';
  import ScrollTip from '@/components/icons/ScrollTip.vue';
  import LocaleSelector from '@/components/LocaleSelector.vue';
  import ProjectItem from '@/components/ProjectItem.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import TechnologiesList from '@/components/TechnologiesList.vue';
  import {
    GITHUB_URL,
    GITHUB_REPO_URL,
    KATAKANA_CONTACT,
    KATAKANA_PROJECT,
    LINKEDIN_URL,
    MY_EMAIL,
  } from '@/helpers/constants';
  import { projectsMock } from '@/helpers/projectsMock';
  import { sortLettersAnimation } from '@/helpers/sortLettersAnimation';
  import { useSnackbarStore } from '@/stores/snackbar_store';
  import { computed, onMounted, ref, watch } from 'vue';
  import type { Component, Ref } from 'vue';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const snackbarStore = useSnackbarStore();

  const currentSectionIndex = ref(0);
  const projects = ref(projectsMock);
  const clipboardShowCheck = ref(false);

  const navBar = ref();
  const sortLettersName = ref();
  const projectsList = ref();
  const projectsListPreviousButton = ref();
  const projectsListNextButton = ref();
  const technologiesList = ref();
  const clipboardButton = ref();

  const introSection = ref();
  const projectsSection = ref();
  const contactSection = ref();

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
      navBarHref: '#',
    },
    {
      id: 'projects',
      index: 1,
      title: t('features.portfolio.sections.projects.title'),
      ref: projectsSection,
      navBarHref: '#projects',
    },
    {
      id: 'contact',
      index: 2,
      title: t('features.portfolio.sections.contact.title'),
      ref: contactSection,
      navBarHref: '#contact',
    },
  ]);

  const openProjectUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (newSectionIndex: number) => {
    const sectionInList = sections.value.find(
      section => section.index == newSectionIndex,
    );

    if (!sectionInList) return;

    currentSectionIndex.value = newSectionIndex;
    presentSections();
    sectionInList.ref.value.scrollIntoView({ behavior: 'smooth' });
  };

  const startMainNameAnimation = () => {
    const element = sortLettersName.value as HTMLElement;

    if (!element) return;

    let originalText = element.dataset.value || '';
    const names = originalText.split('*');

    originalText = element.textContent == names[0] ? names[1] : names[0];

    sortLettersAnimation(element, { original: originalText });
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
      const nameContainer = document.querySelector('.name-container');

      if (nameContainer) {
        setTimeout(() => {
          nameContainer.classList.add('present');
        }, 2000);
      }

      startMainNameAnimation();
      presentSections();
      setTimeout(() => {
        technologiesList.value.startAnimation();
      }, 1000);

      sortLettersName.value.addEventListener(
        'mouseover',
        startMainNameAnimation,
      );

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

  const setupProjectsList = () => {
    projectsList.value.addEventListener('scroll', event => {
      const scrollLeft = projectsList.value.scrollLeft;
      const scrollWidth = projectsList.value.scrollWidth;
      const clientWidth = projectsList.value.clientWidth;

      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
        projectsListNextButton.value.classList.add('hidden');
      } else {
        projectsListNextButton.value.classList.remove('hidden');
      }

      if (scrollLeft <= 0) {
        projectsListPreviousButton.value.classList.add('hidden');
      } else {
        projectsListPreviousButton.value.classList.remove('hidden');
      }
    });

    projectsListNextButton.value.addEventListener('click', () => {
      const scrollLeft = projectsList.value.scrollLeft;
      const scrollWidth = projectsList.value.scrollWidth;
      const clientWidth = projectsList.value.clientWidth;

      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) return;

      projectsList.value.scrollTo({
        left: scrollLeft + clientWidth / 2,
        behavior: 'smooth',
      });
    });

    projectsListPreviousButton.value.addEventListener('click', () => {
      const scrollLeft = projectsList.value.scrollLeft;
      const clientWidth = projectsList.value.clientWidth;

      if (scrollLeft <= 0) return;

      projectsList.value.scrollTo({
        left: scrollLeft - clientWidth / 2,
        behavior: 'smooth',
      });
    });
  };

  const handleMainScroll = (event: WheelEvent) => {
    const nextSection = sections.value[currentSectionIndex.value + 1];
    const previousSection = sections.value[currentSectionIndex.value - 1];

    if (event.deltaY > 0 && nextSection?.ref.value) {
      return scrollToSection(nextSection.index);
    }

    if (event.deltaY < 0 && previousSection?.ref.value) {
      scrollToSection(previousSection.index);
    }
  };

  watch(currentSectionIndex, (newValue: number) => {
    let previousSection = sections[newValue - 1]?.ref.value;
    let nextSection = sections[newValue + 1]?.ref.value;

    if (!(previousSection?.tagName.toLowerCase() == 'section')) {
      previousSection = previousSection?.querySelector('section');
    }

    if (!(nextSection?.tagName.toLowerCase() == 'section')) {
      nextSection = nextSection?.querySelector('section');
    }

    if (previousSection) previousSection.classList.add('present');
    if (nextSection) nextSection.classList.add('present');
  });

  onMounted(() => {
    scrollToSection(sections.value[0].index);

    setupProjectsList();
    setupInitialAnimations();

    clipboardButton.value.addEventListener('click', () => {
      if (clipboardShowCheck.value) return;

      navigator.clipboard.writeText(MY_EMAIL).then(() => {
        clipboardShowCheck.value = true;

        snackbarStore.showSnackbar(
          t('features.portfolio.sections.contact.email_copied_message'),
        );

        setTimeout(() => {
          clipboardShowCheck.value = false;
        }, 3000);
      });
    });

    window.addEventListener('wheel', (event: WheelEvent) =>
      handleMainScroll(event),
    );
  });

  interface ISection {
    id: string;
    index: number;
    title: string;
    ref: Ref<HTMLElement>;
    navBarHref: string;
  }

  interface ISocialLink {
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
    background-color: $background-color;

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

      &.hidden {
        transform: translateY(100%);
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

      .tip-footer {
        display: flex;
        flex-direction: column;
        bottom: 0;
        opacity: 0;
        position: fixed;
        justify-content: center;
        align-items: center;
        animation: show-element 1s 3s forwards;

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

        &:first-child {
          max-height: 80vh;
        }

        &#intro {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          animation: present-intro 3s forwards;

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
              width: 400px;
              height: 400px;
              background-size: cover;
              margin-right: 100px;
              transition: 0.3s;
              box-shadow: 2px 2px 1px 1px $background-color,
                56px 56px 1px 1px $primary-color;

              &:hover {
                box-shadow: 2px 2px 1px 1px $background-color,
                  24px 24px 1px 1px $primary-color;
              }
            }
          }
        }

        &#projects {
          display: flex;
          flex-direction: column;
          padding: 100px;
          gap: 12px;

          .description {
            width: 50%;
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 32px;
          }

          .projects-container {
            display: flex;
            width: 100%;
            height: 100%;
            position: relative;

            &:hover {
              .previous-button,
              .next-button {
                opacity: 1;
                transform: translate(0, -100%);
              }
            }

            .previous-button,
            .next-button {
              position: absolute;
              display: flex;
              opacity: 0;
              justify-content: center;
              align-items: center;
              backdrop-filter: blur(4px);
              top: 50%;
              padding: 12px;
              border-radius: 50px;
              transition: 0.5s, opacity 0.2s;
              background-color: #0d0f1279;
              border: 1px solid rgba(255, 255, 255, 0.7);
              cursor: pointer;

              &:hover {
                backdrop-filter: blur(8px);
                background-color: #0d0f12b8;
              }

              &.hidden {
                cursor: default;
                opacity: 0;
              }
            }

            .previous-button {
              left: 0;
              transform: translate(50px, -100%);
            }

            .next-button {
              right: 0;
              transform: translate(-50px, -100%);
            }

            .projects-list {
              display: flex;
              gap: 24px;
              overflow-x: auto;
              width: 100%;
              height: 100%;
              padding-bottom: 16px;
              padding-right: 100px;

              mask-image: linear-gradient(
                to left,
                transparent,
                $background-color 1%,
                $background-color 99%,
                transparent
              );
              -webkit-mask-image: linear-gradient(
                to left,
                transparent,
                $background-color 1%,
                $background-color 99%,
                transparent
              );
            }
          }
        }

        &#contact {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
          padding: 0;

          .contact-container {
            padding: 120px;
            gap: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .description {
              font-size: 20px;
              font-weight: 400;
            }

            .email-contact-container {
              display: flex;
              gap: 12px;
              align-items: center;

              .email-contact {
                color: white;
              }

              .clipboard-button {
                width: 24px;
                height: 24px;

                &:hover {
                  cursor: pointer;

                  .clipboard-plain {
                    &:deep(rect:first-child) {
                      stroke: $primary-color !important;
                      fill: $primary-color !important;
                    }

                    &:deep(rect:last-child) {
                      stroke: $primary-color !important;
                    }
                  }
                }
              }
            }
          }

          footer {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            justify-self: stretch;
            border-top: 1px solid #ffffff25;
            gap: 12px;

            .social-links-container .social-link svg {
              width: 20px;
              height: 20px;
            }

            span,
            a {
              font-size: 12px;
            }

            .repo-tip {
              display: flex;
              gap: 4px;
              font-size: 12px;

              a {
                color: $secondary-color;
              }
            }
          }
        }
      }
    }

    .navbar-container {
      position: fixed;
      width: 100%;
      z-index: 10;
      animation: show-element 1s forwards;
      transform: translateY(0);
      transition: 0.5s;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      &.hidden {
        transform: translateY(-100%);
      }

      .vertical-line {
        width: 1px;
        height: 24px;
        background-color: white;
      }

      .horizontal-line {
        width: 10%;
        height: 1px;
        transition: 1s;
        background-color: white;
      }

      .nav-bar {
        z-index: 5;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 32px;

        &:hover {
          ~ .horizontal-line {
            width: 40%;
          }
        }

        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          transition: 0.4s scale, 0.8s color;
          font-size: 24px;
          text-decoration: none;
          user-select: none;
          position: relative;
          animation: show-element 1s forwards;

          &:last-child {
            color: transparent;
            pointer-events: none;
          }

          &:before,
          &:after {
            width: 100%;
            display: block;
            font-size: 24px;
            content: attr(data-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.8;
          }

          &::before {
            color: $primary-color !important;
            z-index: -1;
          }

          &::before {
            color: $primary-color !important;
            z-index: -1;
          }

          &:hover {
            color: $primary-color;
            scale: 1.1;

            &::before {
              animation: glitch-logo 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                both 1;
            }

            &:after {
              animation: glitch-logo 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                both 1;
            }
          }
        }

        ul {
          padding: 12px 0;
          gap: 20px;
          display: flex;
          list-style: none;

          li {
            width: 100%;
            position: relative;

            &:hover {
              color: $secondary-color;

              .nav-item::before {
                opacity: 1;
                transform: translate(-12px, -50%);
              }

              .nav-item::after {
                opacity: 1;
                transform: translate(12px, -50%);
              }
            }

            &::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              border-radius: 8px;
              background-color: $primary-color;
              bottom: 0;
              left: 0;
              transition: 0.5s;
            }

            &.active {
              .nav-item {
                font-weight: 500;
              }

              &::after {
                width: 50%;
              }

              &:hover {
                &::after {
                  width: 0;
                }
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

              &::before {
                content: '{';
                position: absolute;
                color: $primary-color;
                font-size: 20px;
                opacity: 0;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                transition: 0.4s;
              }

              &::after {
                content: '}';
                position: absolute;
                color: $primary-color;
                font-size: 20px;
                opacity: 0;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                transition: 0.4s;
              }
            }
          }
        }
      }
    }

    .content {
      padding: 80px 40px;
    }
  }

  .social-links-container {
    display: flex;
    gap: 12px;
    margin: 12px 0;

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
  }

  @keyframes present-intro {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
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

  @keyframes glitch-logo {
    0% {
      transform: translate(-50%, -50%);
    }
    20% {
      transform: translate(-40%, -60%);
      z-index: 2;
    }
    40% {
      transform: translate(-40%, -40%);
    }
    60% {
      transform: translate(-60%, -60%);
      z-index: 1;
    }
    80% {
      transform: translate(-51%, -40%);
    }
    to {
      transform: translate(-50%, -50%);
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
