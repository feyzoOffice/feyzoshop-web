//eslint-disable-next-line
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;

    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

    DATABASE_URL: string;

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
  }
}
