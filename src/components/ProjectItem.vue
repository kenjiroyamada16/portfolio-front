<template>
  <div
    class="project"
    @click.prevent="emit('click', project)"
  >
    <img
      :src="project.bannerUrl"
      :alt="project.title"
      draggable="false"
      class="banner"
      loading="lazy"
    />
    <div class="title">{{ project.title }}</div>
    <div class="author">{{ project.author }}</div>
    <span class="short-description">{{ project.shortDescription }}</span>
    <div class="technologies-list">
      <div
        v-for="(technology, index) in project.technologies"
        :key="index"
        class="technology"
      >
        <span class="technology-label">{{ technology.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { IProject } from '@/interfaces/api/project';

  const emit = defineEmits<{
    (e: 'click', project: IProject): void;
  }>();

  const props = defineProps<{
    project: IProject;
  }>();
</script>

<style scoped lang="scss">
  .project {
    display: flex;
    gap: 4px;
    width: 480px;
    height: 100%;
    padding: 12px;
    flex-direction: column;
    border-radius: 12px;
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      background-color: #1c1c1c;
    }

    & * {
      user-select: none;
    }

    .banner {
      margin: 4px 0;
      width: 100%;
      border-radius: 8px;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
    }

    .author {
      font-size: 16px;
      font-weight: 200;
      color: $secondary-color;
    }

    .short-description {
      font-size: 16px;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    .technologies-list {
      margin-top: auto;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;

      .technology {
        padding: 8px 20px;
        border-radius: 50px;
        border: 1px solid $primary-color;

        .technology-label {
          font-weight: 200;
        }
      }
    }

    @media (width <= $desktop-min-width) {
      width: 280px;
      padding: 8px;
      gap: 4px;

      .title {
        font-size: 20px;
      }

      .author {
        font-size: 12px;
      }

      .short-description {
        font-size: 14px;
      }

      .technologies-list {
        gap: 8px;

        .technology {
          padding: 4px 16px;
          border-radius: 50px;
          border: 1px solid $primary-color;

          .technology-label {
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }
  }
</style>
