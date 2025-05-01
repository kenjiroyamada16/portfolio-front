import { KATAKANA_CHARS } from './constants';

export const sortLettersAnimation = (
  element: HTMLElement,
  options?: {
    original?: string;
    initialAlphabet?: string;
    speedMs?: number;
    steps?: number;
    typewrite?: boolean;
  },
) => {
  if (!element) return;

  const originalText = options?.original || element.dataset.value || '';
  const alphabet = options?.initialAlphabet || KATAKANA_CHARS;

  let iteration = 0;

  element.dataset.opacity = '0';

  let interval = setInterval(() => {
    const displayedText = originalText
      .split('')
      .map((originalChar, i) => {
        const char = alphabet[Math.floor(Math.random() * alphabet.length)];

        if (i < iteration) return originalChar;
        return char;
      })
      .join('');

    if (options?.typewrite) {
      element.textContent = displayedText.slice(0, iteration + 1);
    } else {
      element.textContent = displayedText;
    }

    iteration += options?.steps || 1 / 2;

    if (iteration >= originalText.length) {
      clearInterval(interval);
      element.textContent = originalText;
      element.dataset.opacity = '1';
    }
  }, options?.speedMs || 50);
};
