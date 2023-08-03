import { ImportMeta } from "../vite-env";

const env = {
  APP_BASE_API_URL: import.meta.env.VITE_APP_BASE_API_URL,
};

export const getEnv = (envVar: keyof typeof env) => env[envVar];
