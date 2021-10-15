import PrimeVue from 'primevue/config';
import { App } from 'vue';

export function usePrimeVue(app: App): App {
  return app;
}

export function install(app: App) {
  console.log('installing PrimeVue');

  app.use(PrimeVue, {});

  // app.component(`Accordion`, Accordion);
  // app.component(`Dialog`, Dialog);
}
