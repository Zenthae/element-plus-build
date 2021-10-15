import 'primevue/resources/themes/saga-blue/theme.css';
import { createApp } from 'vue';
import App from './App.vue';
import { install } from './plugins/primevue-shorthand';

const app = createApp(App);

// usePrimeVue(app);

app.use({ install });

// app.component('Dialog', Dialog);

app.mount('#app');
