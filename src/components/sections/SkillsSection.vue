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
                <div v-bind="props">
                  <component :is="skill.icon" />
                </div>
              </template>
            </v-tooltip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { KATAKANA_SKILLS } from '@/helpers/constants';
  import SectionTitle from '../SectionTitle.vue';
  import { computed, type Component } from 'vue';

  import FlutterLogo from '../icons/skills/FlutterLogo.vue';
  import DartLogo from '../icons/skills/DartLogo.vue';
  import KotlinLogo from '../icons/skills/KotlinLogo.vue';
  import AndroidLogo from '../icons/skills/AndroidLogo.vue';
  import VueLogo from '../icons/skills/VueLogo.vue';
  import ReactLogo from '../icons/skills/ReactLogo.vue';
  import HtmlLogo from '../icons/skills/HtmlLogo.vue';
  import CssLogo from '../icons/skills/CssLogo.vue';
  import JavascriptLogo from '../icons/skills/JavascriptLogo.vue';
  import TypescriptLogo from '../icons/skills/TypescriptLogo.vue';
  import ScssLogo from '../icons/skills/ScssLogo.vue';
  import RailsLogo from '../icons/skills/RailsLogo.vue';
  import MySqlLogo from '../icons/skills/MySqlLogo.vue';
  import RedisLogo from '../icons/skills/RedisLogo.vue';
  import AwsLogo from '../icons/skills/AwsLogo.vue';
  import DockerLogo from '../icons/skills/DockerLogo.vue';
  import GitLogo from '../icons/skills/GitLogo.vue';
  import GithubLogo from '../icons/skills/GithubLogo.vue';
  import GitlabLogo from '../icons/skills/GitlabLogo.vue';

  const skillsByStack = computed(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.stack]) {
        acc[skill.stack] = [];
      }
      acc[skill.stack].push(skill);
      return acc;
    }, {} as Record<string, ISkill[]>);
  });

  const skills: ISkill[] = [
    {
      id: 1,
      name: 'Flutter',
      stack: 'Mobile',
      icon: FlutterLogo,
    },
    {
      id: 2,
      name: 'Dart',
      stack: 'Mobile',
      icon: DartLogo,
    },
    {
      id: 3,
      name: 'Kotlin',
      stack: 'Mobile',
      icon: KotlinLogo,
    },
    {
      id: 4,
      name: 'Android',
      stack: 'Mobile',
      icon: AndroidLogo,
    },
    {
      id: 5,
      name: 'React',
      stack: 'Frontend',
      icon: ReactLogo,
    },
    {
      id: 6,
      name: 'Vue.js',
      stack: 'Frontend',
      icon: VueLogo,
      usedInPortfolio: true,
    },
    {
      id: 7,
      name: 'HTML',
      stack: 'Frontend',
      icon: HtmlLogo,
      usedInPortfolio: true,
    },
    {
      id: 8,
      name: 'CSS',
      stack: 'Frontend',
      icon: CssLogo,
      usedInPortfolio: true,
    },
    {
      id: 9,
      name: 'Javascript',
      stack: 'Frontend',
      icon: JavascriptLogo,
      usedInPortfolio: true,
    },
    {
      id: 10,
      name: 'Typescript',
      stack: 'Frontend',
      icon: TypescriptLogo,
      usedInPortfolio: true,
    },
    {
      id: 11,
      name: 'SCSS',
      stack: 'Frontend',
      icon: ScssLogo,
      usedInPortfolio: true,
    },
    {
      id: 12,
      name: 'Ruby on Rails',
      stack: 'Backend e Banco de Dados',
      icon: RailsLogo,
    },
    {
      id: 13,
      name: 'MySQL',
      stack: 'Backend e Banco de Dados',
      icon: MySqlLogo,
    },
    {
      id: 14,
      name: 'Redis',
      stack: 'Backend e Banco de Dados',
      icon: RedisLogo,
    },
    {
      id: 15,
      name: 'Docker',
      stack: 'DevOps',
      icon: DockerLogo,
      usedInPortfolio: true,
    },
    {
      id: 16,
      name: 'AWS',
      stack: 'DevOps',
      icon: AwsLogo,
      usedInPortfolio: true,
    },
    {
      id: 17,
      name: 'Git',
      stack: 'DevOps',
      icon: GitLogo,
      usedInPortfolio: true,
    },
    {
      id: 18,
      name: 'GitHub',
      stack: 'DevOps',
      icon: GithubLogo,
      usedInPortfolio: true,
    },
    {
      id: 19,
      name: 'GitLab',
      stack: 'DevOps',
      icon: GitlabLogo,
    },
  ];

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
        padding: 24px;
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
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          position: absolute;
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
          }
        }
      }
    }
  }
</style>
