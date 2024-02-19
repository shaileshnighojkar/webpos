declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: "development" | "production";
        PORT: string;
        MUNERO_SIGNATURE_SECRET: string;
        MUNERO_API_BASE: string;
      }
    }
  }
}
