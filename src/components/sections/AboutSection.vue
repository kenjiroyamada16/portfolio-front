<template>
  <section id="about">
    <div class="description-container">
      <SectionTitle
        :key="$i18n.locale"
        :jp-text="KATAKANA_ABOUT"
        >{{ $t('features.portfolio.sections.about.title') }}</SectionTitle
      >
      <span class="introduction">{{
        $t(
          'features.portfolio.sections.about.description.paragraphs.introduction',
        )
      }}</span>
      <span class="middle">{{
        $t('features.portfolio.sections.about.description.paragraphs.middle')
      }}</span>
      <span class="conclusion">{{
        $t(
          'features.portfolio.sections.about.description.paragraphs.conclusion',
        )
      }}</span>
      <Planet class="planet-icon" />
    </div>
    <div class="profile-info">
      <div class="photo-container">
        <span class="decor-chars"></span>
        <span class="decor-chars"></span>
        <img
          src="/src/assets/images/profile_photo.webp"
          loading="lazy"
        />
      </div>
      <span class="quote"
        ><q
          >Quando criança, eu considerava o misterioso assustador. Agora sei que
          ele não é mau. Nós e o universo somos um com o desconhecido. Eu estou
          pronto.</q
        ></span
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { KATAKANA_ABOUT } from '@/helpers/constants';
  import SectionTitle from '../SectionTitle.vue';
  import Planet from '../icons/Planet.vue';
</script>

<style lang="scss" scoped>
  #about {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 100px;

    .description-container {
      display: flex;
      gap: 12px;
      flex-direction: column;
      width: 50%;
      position: relative;

      span {
        text-align: justify;
        font-size: 14px;
        font-weight: 400;
        z-index: 1;
      }

      .planet-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        width: 200px;
        height: 200px;
        opacity: 0.4;
        transform: translate(-50%, -50%);

        &:deep(#planet) {
          animation: spin 40s linear infinite;
          transform-origin: center;
        }
      }
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      margin: 12px;

      .photo-container {
        margin: 32px;
        width: 180px;
        height: 180px;
        position: relative;
        transition: 0.3s;
        z-index: 0;
        box-shadow: 2px 2px 1px 1px $background-color,
          8px 8px 1px 1px $primary-color;

        .name {
          z-index: -1;
          position: absolute;
          font-weight: 600;
          transform: translateY(-50%) rotate(90deg);
          color: $primary-color;
          right: -25%;
          font-size: 24px;
          top: 50%;
        }

        &:hover {
          box-shadow: 2px 2px 1px 1px $background-color,
            24px 24px 1px 1px $primary-color;
        }

        img {
          object-fit: cover;
          width: 180px;
          height: 180px;
        }

        .decor-chars {
          
        }
      }

      .quote {
        padding: 0 64px;
        text-align: center;
        font-size: 10px;
        font-weight: 400;
        font-style: italic;
      }
    }

    @media (max-width: $desktop-min-width) {
      padding: 64px 8px;
      margin-bottom: 40px;
      min-height: fit-content;
      flex-direction: column;

      .description-container {
        width: 100%;
      }
    }

    @media (max-width: 1300px) {
      .description-container {
        width: 80%;
      }
    }
  }

  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
</style>
