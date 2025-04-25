<template>
  <div
    ref="technologiesList"
    class="technologies-list"
  >
    <span
      ref="currentTechnology"
      class="current-technology"
      >0</span
    >
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const technologiesList = ref();
  const currentTechnology = ref();
  const technologies = ['Flutter', 'Dart', 'Kotlin', 'Vue', 'Ruby on Rails'];

  const startAnimation = () => animateTechnologies();

  const animateTechnologies = (initialIndex?: number) => {
    const elementContainer = technologiesList.value as HTMLElement;
    const elementSpan = currentTechnology.value as HTMLElement;
    const index = initialIndex || 0;

    if (!(elementContainer || elementSpan)) return;

    const initial = technologies[index];

    elementContainer.classList.remove('ready');
    elementContainer.classList.add('writing');

    setTimeout(
      () => {
        elementSpan.textContent = initial;
        sortLettersAnimation(elementSpan, initial);
        elementContainer.classList.remove('writing');
        elementContainer.classList.add('ready');

        setTimeout(() => {
          let nextIndex = index + 1;

          if (nextIndex > technologies.length - 1) nextIndex = 0;

          animateTechnologies(nextIndex);
        }, 3000);
      },
      initialIndex == undefined ? 500 : 800,
    );
  };

  const sortLettersAnimation = (element: HTMLElement, original: string) => {
    if (!element) return;

    const vocabulary =
      'アカサタナイキシチニウクスツヌネテセケエオコソトノンホヘフヒハマミムメモヨユヤマラリルレロ';

    let iteration = 0;
    let interval = setInterval(() => {
      const displayedText = original
        .split('')
        .map((originalChar, i) => {
          const char =
            vocabulary[Math.floor(Math.random() * vocabulary.length)];

          if (i < iteration) return originalChar;
          return char;
        })
        .join('');

      element.textContent = displayedText.slice(0, iteration + 1);

      iteration += 1 / 4;

      if (iteration >= original.length) {
        clearInterval(interval);
        element.textContent = original;
      }
    }, 15);
  };

  defineExpose({
    startAnimation,
  });
</script>

<style lang="scss" scoped>
  .technologies-list {
    position: relative;
    width: 100%;
    text-wrap: nowrap;
    overflow: hidden;
    text-transform: uppercase;

    .current-technology {
      display: inline-block;
      font-size: 48px;
      font-weight: 700;
      transition: opacity 0.3s, transform 0.7s;
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $primary-color;
      position: absolute;
      transform-origin: left;
      transition: 0.7s transform;
    }

    &.writing {
      .current-technology {
        transform: translateX(-200%);
        opacity: 0;
      }

      &:after {
        transform-origin: left;
        transform: translate(-50%, -50%) scaleX(1);
      }
    }

    &.ready {
      &:after {
        transform-origin: right;
        transform: translate(-50%, -50%) scaleX(0);
      }

      .current-technology {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
</style>
