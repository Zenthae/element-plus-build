declare namespace NodeJS {
  interface ProcessEnv {
    APP_PORT: string;

    NODE_ENV: 'development' | 'production';
  }
}
