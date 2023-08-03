/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_PORT: string;
}

export interface ImportMeta {
  env: ImportMetaEnv;
}

import.meta.env.VITE_PORT;
