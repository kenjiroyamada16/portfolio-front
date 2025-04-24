<template>
  <div class="main-container">
    <nav
      class="nav-bar"
      ref="navBar"
    >
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
      <LocaleSelector class="locale-selector" />
    </nav>
    <div class="left-aside-content">
      <div class="social-info">
        <div class="social-link">
          <Github />
        </div>
        <div class="social-link">
          <Linkedin />
        </div>
        <div class="separator"></div>
      </div>
    </div>
    <div class="content">
      <section
        ref="introSection"
        id="intro"
      >
        <div class="profile">
          <div class="name-container">
            <span class="jp-name">{{ t('names.jp_kenji') }}</span>
            <span
              class="pt-name sort-letters"
              data-name="NICOLAS YAMADA"
              >NICOLAS YAMADA</span
            >
          </div>
          <div class="photo-container"></div>
        </div>
      </section>
      <section
        ref="projectsSection"
        id="projects"
      >
        a
      </section>

      <div class="footer">
        <div class="next-section">Projetos</div>
        <div class="separator"></div>
      </div>
    </div>
    <div class="right-aside-content">
      <div class="navigation-tiles">
        <div
          class="navigation-bar"
          v-for="section in sections"
          :key="section.value"
          @click="scrollToSection(section.value)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Github from '@/components/icons/Github.vue';
  import Linkedin from '@/components/icons/Linkedin.vue';
  import LocaleSelector from '@/components/LocaleSelector.vue';
  import { onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const navBar = ref();
  const introSection = ref();
  const projectsSection = ref();

  const currentSectionIndex = ref(0);
  const sections = [introSection, projectsSection];

  const scrollToSection = (newSection: HTMLElement) => {
    if (newSection) {
      const sectionInList = sections.find(
        section => section.value.id == newSection.id,
      );

      newSection.scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex.value = sections.indexOf(sectionInList);
    }
  };

  // const sortLettersAnimation = event => {
  //   const target = event.currentTarget as HTMLElement;
  //   const original = target.textContent || '';
  //   const chars =
  //     'アカサタナイキシチニウクスツヌネテセケエオコソトノンホヘフヒハマミムメモヨユヤマラリルレロ';
  //   let iteration = 0;

  //   clearInterval(interval);

  //   interval = setInterval(() => {
  //     const text = Array.from(original)
  //       .map((ch, idx) =>
  //         ch === ' ' || idx < iteration
  //           ? original[idx]
  //           : chars[Math.floor(Math.random() * chars.length)],
  //       )
  //       .join('');

  //     target.innerText = text;
  //     iteration += 1 / 3;

  //     if (iteration >= original.length) {
  //       clearInterval(interval);
  //       target.innerText = original;
  //     }
  //   }, 30);
  // };

  onMounted(() => {
    // document
    //   .querySelectorAll('.sort-letters')
    //   .forEach((element: HTMLElement) => {
    //     element.onmouseover = sortLettersAnimation;
    //   });

    window.addEventListener('wheel', (event: WheelEvent) => {
      const nextSection = sections[currentSectionIndex.value + 1];
      const previousSection = sections[currentSectionIndex.value - 1];

      if (event.deltaY > 0 && nextSection.value)
        scrollToSection(nextSection.value);

      if (event.deltaY < 0 && previousSection.value)
        scrollToSection(previousSection.value);
    });
  });
</script>

<style lang="scss" scoped>
  .main-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding: 0 4px;
    overflow: hidden;
    display: flex;

    .right-aside-content {
      height: 100vh;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 64px;
      position: fixed;
      right: 0;

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

      .social-info {
        display: flex;
        bottom: 0;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        justify-self: flex-end;

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
      width: 100%;
      align-items: center;

      .footer {
        display: flex;
        flex-direction: column;
        bottom: 0;
        position: fixed;
        justify-content: center;
        align-items: center;

        .next-section {
          font-weight: 300;
          text-transform: uppercase;
        }

        .separator {
          width: 1px;
          height: 40px;
          background-color: white;
        }
      }

      section {
        height: 100vh;
        position: relative;
        max-height: 100vh;
        margin-bottom: 50vh;
        padding: 0 100px;
        width: 100%;

        &:first-child {
          height: 80vh;
          max-height: 80vh;
        }

        &#intro {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .profile {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .name-container {
              display: flex;
              position: relative;
              overflow: visible;
              margin-left: 100px;

              .pt-name {
                text-wrap-style: pretty;
                width: 460px;
                font-size: 64px;
                line-height: 64px;
                font-weight: 900;
              }

              .jp-name {
                color: $primary-color;
                font-size: 100px;
                position: absolute;
                z-index: -1;
                top: 0;
                right: 0;
                transform: translate(-20px, -40px);
              }
            }

            .photo-container {
              width: 400px;
              height: 400px;
              background-size: contain;
              margin-right: 100px;
              box-shadow: 0px 4px 1px 1px $background-color,
                56px 56px 1px 1px $primary-color;
              background-image: url('/src/assets/images/profile_photo.jpg');
            }
          }
        }
      }
    }

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
      transform: translateY(-100%);

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

      .locale-selector {
        position: static;
      }

      ul {
        padding: 12px 0;
        gap: 20px;
        display: flex;
        list-style: none;

        .nav-item {
          font-size: 12px;
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
