import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

const sql = neon('postgresql://authjs_next_template_owner:z1mcb0YdgHPT@ep-cold-darkness-a25wvtyr.eu-central-1.aws.neon.tech/authjs_next_template?sslmode=require')
export const db = drizzle(sql)
