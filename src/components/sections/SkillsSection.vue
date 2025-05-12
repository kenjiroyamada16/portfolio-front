<template>
  <section id="skills">
    <SectionTitle
      :key="$i18n.locale"
      :jp-text="KATAKANA_SKILLS"
      >{{ $t('features.portfolio.sections.skills.title') }}</SectionTitle
    >
    <span class="description">{{
      $t('features.portfolio.sections.skills.description')
    }}</span>
    <div class="container">
      <div
        v-for="(stack, stackName) in skillsByStack"
        :key="stackName"
        class="stack-container"
      >
        <span class="stack-name">{{ stackName }}</span>
        <div class="skills-container">
          <div
            v-for="skill in stack"
            :key="skill.id"
            class="skill"
          >
            <v-tooltip
              :open-on-click="true"
              :text="skill.name"
            >
              <template #activator="{ props }">
                <div
                  v-bind="props"
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <component :is="skill.icon" />
                </div>
              </template>
            </v-tooltip>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-skills-container">
      <span class="label">{{
        $t('features.portfolio.sections.skills.used_in_portfolio_label')
      }}</span>
      <div class="portfolio-skills">
        <div
          v-for="skill in skillsInPortfolio"
          :key="skill.id"
          class="skill"
        >
          <v-tooltip
            :open-on-click="true"
            :text="skill.name"
          >
            <template #activator="{ props }">
              <div
                v-bind="props"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <component :is="skill.icon" />
              </div>
            </template>
          </v-tooltip>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { KATAKANA_SKILLS } from '@/helpers/constants';
  import SectionTitle from '../SectionTitle.vue';
  import { computed, defineAsyncComponent, type Component } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const skillsInPortfolio = computed(() => {
    return skills.value.filter(skill => skill.usedInPortfolio);
  });

  const skillsByStack = computed(() => {
    return skills.value.reduce((acc, skill) => {
      if (!acc[skill.stack]) {
        acc[skill.stack] = [];
      }
      acc[skill.stack].push(skill);
      return acc;
    }, {} as Record<string, ISkill[]>);
  });

  const skills = computed<ISkill[]>(() => [
    {
      id: 1,
      name: t('features.portfolio.sections.skills.technologies.flutter'),
      stack: t('features.portfolio.sections.skills.areas.mobile'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/FlutterLogo.vue'),
      ),
    },
    {
      id: 2,
      name: t('features.portfolio.sections.skills.technologies.dart'),
      stack: t('features.portfolio.sections.skills.areas.mobile'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/DartLogo.vue'),
      ),
    },
    {
      id: 3,
      name: t('features.portfolio.sections.skills.technologies.kotlin'),
      stack: t('features.portfolio.sections.skills.areas.mobile'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/KotlinLogo.vue'),
      ),
    },
    {
      id: 4,
      name: t('features.portfolio.sections.skills.technologies.android'),
      stack: t('features.portfolio.sections.skills.areas.mobile'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/AndroidLogo.vue'),
      ),
    },
    {
      id: 5,
      name: t('features.portfolio.sections.skills.technologies.react'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/ReactLogo.vue'),
      ),
    },
    {
      id: 6,
      name: t('features.portfolio.sections.skills.technologies.vue'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/VueLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 7,
      name: t('features.portfolio.sections.skills.technologies.html'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/HtmlLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 8,
      name: t('features.portfolio.sections.skills.technologies.css'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/CssLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 9,
      name: t('features.portfolio.sections.skills.technologies.javascript'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/JavascriptLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 10,
      name: t('features.portfolio.sections.skills.technologies.typescript'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/TypescriptLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 11,
      name: t('features.portfolio.sections.skills.technologies.scss'),
      stack: t('features.portfolio.sections.skills.areas.frontend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/ScssLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 12,
      name: t('features.portfolio.sections.skills.technologies.rails'),
      stack: t('features.portfolio.sections.skills.areas.backend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/RailsLogo.vue'),
      ),
    },
    {
      id: 13,
      name: t('features.portfolio.sections.skills.technologies.mysql'),
      stack: t('features.portfolio.sections.skills.areas.backend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/MySqlLogo.vue'),
      ),
    },
    {
      id: 14,
      name: t('features.portfolio.sections.skills.technologies.redis'),
      stack: t('features.portfolio.sections.skills.areas.backend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/RedisLogo.vue'),
      ),
    },
    {
      id: 15,
      name: t('features.portfolio.sections.skills.technologies.docker'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/DockerLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 16,
      name: t('features.portfolio.sections.skills.technologies.aws'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/AwsLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 17,
      name: t('features.portfolio.sections.skills.technologies.git'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/GitLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 18,
      name: t('features.portfolio.sections.skills.technologies.github'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/GithubLogo.vue'),
      ),
      usedInPortfolio: true,
    },
    {
      id: 19,
      name: t('features.portfolio.sections.skills.technologies.gitlab'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/GitlabLogo.vue'),
      ),
    },
    {
      id: 20,
      name: t('features.portfolio.sections.skills.technologies.firebase'),
      stack: t('features.portfolio.sections.skills.areas.devops'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/FirebaseLogo.vue'),
      ),
    },
    {
      id: 20,
      name: t('features.portfolio.sections.skills.technologies.node'),
      stack: t('features.portfolio.sections.skills.areas.backend'),
      icon: defineAsyncComponent(
        () => import('/src/components/icons/skills/NodeLogo.vue'),
      ),
    },
  ]);

  interface ISkill {
    id: number;
    name: string;
    stack: string;
    icon: Component;
    usedInPortfolio?: boolean;
  }
</script>

<style scoped lang="scss">
  #skills {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 100px;

    .container {
      display: grid;
      padding: 40px;
      gap: 40px;
      margin-top: 24px;
      justify-content: center;
      grid-template-columns: 50% 50%;

      .stack-container {
        display: flex;
        border: 1px solid #1c1c1c;
        box-shadow: 2px 2px rgba(0, 0, 0, 0.3), -2px -2px rgba(0, 0, 0, 0.3);
        transition: 0.5s;
        position: relative;
        padding: 40px 24px;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;

        &:hover {
          box-shadow: 2px 2px $primary-color, 6px 6px #39dfabbe,
            10px 10px #39dfab8a, 14px 14px #39dfab73, 18px 18px #39dfab39,
            inset 2px 2px rgba(0, 0, 0, 0.244),
            inset -2px -2px rgba(0, 0, 0, 0.421);
        }

        .stack-name {
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          position: absolute;
          text-overflow: ellipsis;
          top: 0;
          left: 0;
          padding: 0 4px;
          transform: translate(-12px, -16px);
          background-color: $background-color;
        }

        .skills-container {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          width: 100%;

          .skill {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            padding: 4px;
            border-radius: 4px;
            transition: 0.2s;

            &:hover {
              background-color: #1c1c1c;
            }

            &:deep(svg) {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }

    .portfolio-skills-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: center;

      .label {
        text-align: center;
        font-size: 20px;
      }

      .portfolio-skills {
        display: flex;
        gap: 4px;
        justify-content: center;

        .skill {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
          border-radius: 50%;
          transition: 0.2s;

          &:hover {
            background-color: #1c1c1c;
          }

          &:deep(svg) {
            width: 32px;
            height: 32px;
          }
        }
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 64px 16px;
      margin-bottom: 40px;
      min-height: fit-content;

      .container {
        display: flex;
        flex-direction: column;
        gap: 52px;
        height: 100%;
        width: 100%;
        padding: 20px;

        .stack-container {
          flex: unset;
          padding: 32px 12px;
          gap: 8px;
          height: 100%;

          .skills-container {
            width: 100%;
          }

          .stack-name {
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            position: absolute;
            top: -8px;
            left: -8px;
            transform: translate(-12px, -16px);
            display: -webkit-box;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            overflow: hidden;
            width: 100%;
            -webkit-box-orient: vertical;
          }
        }
      }

      .portfolio-skills-container {
        .portfolio-skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
</style>
