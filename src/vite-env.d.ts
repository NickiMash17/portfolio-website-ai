/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_AZURE_STORAGE_CONNECTION_STRING: string
  readonly VITE_MONGO_URI: string
  readonly VITE_AZURE_COGNITIVE_SERVICES_KEY: string
  readonly VITE_AZURE_BOT_SERVICE_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 