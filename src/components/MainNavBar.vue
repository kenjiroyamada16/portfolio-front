<template>
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
            @click.prevent="emits('scrollToSection', section)"
          >
            {{ section.navBarTitle || section.title }}
          </a>
        </li>
      </ul>
      <a class="logo">{{ t('names.jp_kenji') }}</a>
    </nav>
    <div class="horizontal-line"></div>
    <div class="vertical-line"></div>
  </div>
</template>

<script lang="ts" setup>
  import { ISection } from '@/views/PortfolioView.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const emits = defineEmits<{
    (e: 'scrollToSection', index: ISection): void;
  }>();

  const props = defineProps<{
    sections: ISection[];
    currentSectionIndex: number;
  }>();
</script>

<style lang="scss" scoped>
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

    @media (width <= $desktop-min-width) {
      display: none;
    }

    &.hidden {
      transform: translateY(-100%);
    }

    .vertical-line {
      width: 1px;
      height: 16px;
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
            font-size: 12px;
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
</style>
