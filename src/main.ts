import { registerPlugins } from '@/plugins';
import App from './App.vue';
import { createApp } from 'vue';

import '@fontsource/metropolis/300.css';
import '@fontsource/metropolis/400.css';
import '@fontsource/metropolis/700.css';
import '@fontsource/metropolis/800.css';
import '@fontsource/metropolis/900.css';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
