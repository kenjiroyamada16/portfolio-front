<template>
  <div
    class="project"
    @click="openApplicationByOs"
  >
    <div class="image-container">
      <div
        v-if="!mobile"
        class="accesses-container"
      >
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-access-container"
          @click="
            triggerEvent(FirebaseEventsNames.viewProjectRepo, {
              [FirebaseEventsParams.projectName]: project.title,
              [FirebaseEventsParams.projectRepoUrl]: project.repoUrl,
            })
          "
        >
          <Repository class="repo-icon" />
          <span class="repo-access-label">{{
            $t(
              'features.portfolio.sections.projects.project_item.repo_access_label',
            )
          }}</span>
        </a>
        <a
          class="project-access-container"
          target="_blank"
          rel="noopener noreferrer"
          :href="
            project.playstoreUrl || project.appstoreUrl
              ? undefined
              : project.siteUrl
          "
          @click="
            triggerEvent(FirebaseEventsNames.viewProject, {
              [FirebaseEventsParams.projectName]: project.title,
              [FirebaseEventsParams.projectUrl]:
                project.appstoreUrl || project.playstoreUrl || project.siteUrl,
            })
          "
        >
          <div
            class="access-links-container"
            v-if="project.playstoreUrl || project.appstoreUrl"
          >
            <a
              v-if="project.playstoreUrl"
              class="access-link"
              :href="project.playstoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="triggerEvent(FirebaseEventsNames.viewProject, {
                [FirebaseEventsParams.projectName]: project.title,
                [FirebaseEventsParams.projectUrl]: project.playstoreUrl
              })"
            >
              <v-tooltip :text="$t('names.playstore')">
                <template v-slot:activator="{ props }">
                  <PlayStore v-bind="props" />
                </template>
              </v-tooltip>
            </a>
            <a
              v-if="project.appstoreUrl"
              class="access-link"
              :href="project.appstoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="triggerEvent(FirebaseEventsNames.viewProject, {
                [FirebaseEventsParams.projectName]: project.title,
                [FirebaseEventsParams.projectUrl]: project.appstoreUrl
              })"
            >
              <v-tooltip :text="$t('names.appstore')">
                <template v-slot:activator="{ props }">
                  <AppStore v-bind="props" />
                </template>
              </v-tooltip>
            </a>
            <a
              v-if="
                project.siteUrl && (project.playstoreUrl || project.appstoreUrl)
              "
              class="access-link"
              :href="project.siteUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="triggerEvent(FirebaseEventsNames.viewProject, {
                [FirebaseEventsParams.projectName]: project.title,
                [FirebaseEventsParams.projectUrl]: project.siteUrl
              })"
            >
              <v-tooltip
                :text="
                  $t(
                    'features.portfolio.sections.projects.project_item.access_site_tip',
                  )
                "
              >
                <template v-slot:activator="{ props }">
                  <NewTab v-bind="props" />
                </template>
              </v-tooltip>
            </a>
          </div>
          <NewTab
            v-if="!(project.appstoreUrl || project.playstoreUrl)"
            class="newtab-icon"
          />
          <span class="access-label">{{
            $t(
              'features.portfolio.sections.projects.project_item.app_access_label',
            )
          }}</span>
        </a>
      </div>
      <img
        :src="project.bannerUrl"
        :alt="project.title"
        draggable="false"
        class="banner"
        loading="lazy"
      />
    </div>
    <div class="title">{{ project.title }}</div>
    <div class="author">{{ project.author }}</div>
    <TranslatedText
      :key="$i18n.locale"
      class="short-description"
      :translated-text="project.shortDescription"
    />
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
  import TranslatedText from './TranslatedText.vue';
  import Repository from './icons/Repository.vue';
  import PlayStore from './icons/PlayStore.vue';
  import AppStore from './icons/AppStore.vue';
  import NewTab from './icons/NewTab.vue';
  import { useDisplay } from 'vuetify';
  import { getOs, OperatingSystem } from '@/helpers/handleOs';
  import {
    FirebaseEventsNames,
    FirebaseEventsParams,
    triggerEvent,
  } from '@/plugins/firebase';

  const { mobile } = useDisplay({ mobileBreakpoint: 760 });

  const props = defineProps<{
    project: IProject;
  }>();

  const openApplicationByOs = () => {
    if (!mobile.value) return;

    let url;

    const os = getOs();

    if (os == OperatingSystem.android) url = props.project.playstoreUrl;
    if (os == OperatingSystem.ios) url = props.project.appstoreUrl;
    if (!url) url = props.project.siteUrl;

    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
      .image-container .accesses-container {
        opacity: 1;
      }
    }

    & * {
      user-select: none;
    }

    .image-container {
      display: flex;
      position: relative;

      .accesses-container {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 0;
        transition: 0.4s;

        .repo-access-container {
          display: flex;
          flex: 1;
          gap: 8px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #1111117f;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          transition: 0.5s;

          &:hover {
            backdrop-filter: blur(2px);
            background-color: #111111ab;

            .repo-icon {
              width: 40px;
              height: 40px;
            }
          }

          .repo-icon {
            width: 24px;
            height: 24px;
            transition: 0.4s;
          }
        }

        .project-access-container {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #1111117d;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          transition: 0.5s;

          &:hover {
            backdrop-filter: blur(2px);
            background-color: #111111ab;

            .access-links-container .access-link {
              svg {
                width: 40px;
                height: 40px;
              }
            }

            .newtab-icon {
              width: 40px;
              height: 40px;
            }
          }

          .newtab-icon {
            height: 24px;
            width: 24px;
            transition: 0.4s;
          }

          .access-links-container {
            display: flex;
            gap: 8px;

            .access-link {
              display: flex;
              padding: 8px;
              border-radius: 16px;
              justify-content: center;
              align-items: center;
              background-color: #1c1c1c95;
              transition: 0.4s;

              svg {
                width: 32px;
                height: 32px;
                transition: 0.2s;
              }

              &:hover {
                background-color: #1c1c1c;
              }
            }
          }
        }

        a {
          text-align: center;
          text-decoration: none;
          color: $secondary-color;
        }
      }

      .banner {
        margin: 4px 0;
        width: 100%;
        object-fit: contain;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.044);
      }
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
      gap: 8px;
      flex-wrap: wrap;

      .technology {
        padding: 4px 12px;
        border-radius: 50px;
        border: 1px solid $primary-color;

        .technology-label {
          font-weight: 200;
          font-size: 12px;
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
