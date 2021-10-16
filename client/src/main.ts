import '@/assets/styles/layout.scss';
import { router } from '@/router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.use(router);

app.mount('#app');
