import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://authjs_next_template_owner:z1mcb0YdgHPT@ep-cold-darkness-a25wvtyr.eu-central-1.aws.neon.tech/authjs_next_template?sslmode=require",
  },
});
