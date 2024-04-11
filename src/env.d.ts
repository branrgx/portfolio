/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly PUBLIC_PAGE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}