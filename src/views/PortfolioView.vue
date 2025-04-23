<template>
  <div class="main-container">
    <nav class="nav-bar">
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
      <LocaleSelector />
    </nav>
    <div class="content">
      <div class="intro">
        <div class="name" data-name="NICOLAS YAMADA">NICOLAS YAMADA</div>
        <div class="role"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LocaleSelector from '@/components/LocaleSelector.vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const characters = 'あかさたなはまやらわいきしちにひみりうくすつぬふむゆるえけせてねへめれろよもほのとそこおをっん';


</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    padding: 0 4px;

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

      ul {
        padding: 12px 0;
        gap: 20px;
        display: flex;
        list-style: none;

        .nav-item {
          font-size: 12px;
          font-family: $primary-font;
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
</style>
