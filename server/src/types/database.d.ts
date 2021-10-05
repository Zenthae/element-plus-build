declare namespace NodeJS {
  interface ProcessEnv {
    DB_URL: string;
    DB_PORT: string;
    DB_LOGIN: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  }
}
