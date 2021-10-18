import '@/assets/styles/layout.scss';
import { router } from '@/router';
import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);

app.use(router);

app.mount('#app');
