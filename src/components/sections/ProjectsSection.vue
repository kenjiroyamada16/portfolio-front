<template>
  <section id="projects">
    <SectionTitle
      :key="$i18n.locale"
      :jp-text="KATAKANA_PROJECT"
      >{{ $t('features.portfolio.sections.projects.title') }}</SectionTitle
    >
    <div class="description">
      <span>{{ $t('features.portfolio.sections.projects.description') }}</span>
    </div>
    <div class="projects-container">
      <div
        class="projects-list"
        ref="projectsList"
      >
        <div
          class="project"
          v-for="project in projectsMock"
          :key="project.id"
        >
          <ProjectItem :project="project" />
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
</template>

<script lang="ts" setup>
  import ProjectItem from '@/components/ProjectItem.vue';
  import SectionTitle from '@/components/SectionTitle.vue';
  import { KATAKANA_PROJECT } from '@/helpers/constants';
  import { projectsMock } from '@/helpers/projectsMock';
  import { onMounted, ref } from 'vue';

  const projectsList = ref();
  const projectsListPreviousButton = ref();
  const projectsListNextButton = ref();

  const scrollInto = () => {
    projectsList.value.scrollIntoView({
      behavior: 'smooth',
    });
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
        left: scrollLeft + clientWidth / 1.05,
        behavior: 'smooth',
      });
    });

    projectsListPreviousButton.value.addEventListener('click', () => {
      const scrollLeft = projectsList.value.scrollLeft;
      const clientWidth = projectsList.value.clientWidth;

      if (scrollLeft <= 0) return;

      projectsList.value.scrollTo({
        left: scrollLeft - clientWidth / 1.05,
        behavior: 'smooth',
      });
    });
  };

  defineExpose({
    scrollInto,
  });

  onMounted(() => {
    setupProjectsList();
  });
</script>

<style lang="scss" scoped>
  #projects {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 100px;
    gap: 12px;
    margin-bottom: 40px;

    .description {
      width: 50%;
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 32px;
    }

    .projects-container {
      display: flex;
      width: 100%;
      position: relative;

      @media (width > $desktop-min-width) {
        &:hover {
          .previous-button,
          .next-button {
            opacity: 1;
            transform: translate(0, -100%);
          }
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
          pointer-events: none;
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

    @media (width <= 900px) {
      padding: 16px 100px;
      justify-content: center;

      .description {
        width: 100%;
        font-size: 16px;
      }
    }

    @media (width <= $desktop-min-width) {
      max-height: unset;
      min-height: unset;
      height: 100%;
      padding: 80px 24px;

      .projects-container {
        .projects-list {
          gap: 16px;
        }

        .previous-button,
        .next-button {
          opacity: 1;
          top: 100%;
          transform: translateX(0);
        }
      }
    }
  }
</style>
