import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:mac7&@127.0.0.1:5432/authjs_next_template",
  },
});
