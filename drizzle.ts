import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://postgres:mac7&@127.0.0.1:5432/authjs_next_template",
});

export const db = drizzle(pool);
