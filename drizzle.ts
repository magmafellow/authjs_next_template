import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

const sql = neon('postgresql://authjs_next_project_owner:DHO3GR7FcPnr@ep-royal-darkness-a2zxkfgr.eu-central-1.aws.neon.tech/authjs_next_project?sslmode=require')
export const db = drizzle(sql)
