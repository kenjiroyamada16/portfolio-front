import { defineStore } from 'pinia';

export const useSnackbarStore = defineStore('snackbar', {
  getters: {
    getShow: (state): boolean => state.show,
    getMessage: (state): string => state.message,
  },
  state: (): ISnackbarStoreState => ({
    show: false,
    message: '',
  }),
  actions: {
    showSnackbar(message: string) {
      this.$patch({ show: true, message: message });
      setTimeout(() => {
        this.$patch({ show: false });
      }, 3000);
    },
  },
});

export interface ISnackbarStoreState {
  show: boolean;
  message: string;
}
