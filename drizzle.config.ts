import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://authjs_next_project_owner:DHO3GR7FcPnr@ep-royal-darkness-a2zxkfgr.eu-central-1.aws.neon.tech/authjs_next_project?sslmode=require',
  },
});
