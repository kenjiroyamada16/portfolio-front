<template>
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
          t('features.portfolio.sections.contact.footer.repo_tip.first_part')
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
          t('features.portfolio.sections.contact.footer.repo_tip.second_part')
        }}</span>
      </div>
    </footer>
  </section>
</template>

<script lang="ts" setup>
  import {
    GITHUB_REPO_URL,
    MY_EMAIL,
    KATAKANA_CONTACT,
  } from '@/helpers/constants';
  import SectionTitle from '@/components/SectionTitle.vue';
  import Clipboard from '../icons/Clipboard.vue';
  import ClipboardCheck from '../icons/ClipboardCheck.vue';
  import { useSnackbarStore } from '@/stores/snackbar_store';
  import { ISocialLink } from '@/views/PortfolioView.vue';
  import { onMounted, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const snackbarStore = useSnackbarStore();

  const props = defineProps<{
    socialLinks: ISocialLink[];
  }>();

  const clipboardShowCheck = ref(false);
  const clipboardButton = ref();

  onMounted(() => {
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
  });
</script>

<style lang="scss" scoped>
  #contact {
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

      > div,
      > span {
        flex: 1 0;
        display: flex;
        justify-content: center;
      }

      .social-links-container {
        flex: 1 0;

        .social-link svg {
          width: 20px;
          height: 20px;
        }
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
  }
</style>
