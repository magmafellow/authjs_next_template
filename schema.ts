import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users_table', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  age: integer('age'),
  email: text('email').notNull().unique(),
})

export const postsTable = pgTable('posts_table', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export type InsertPost = typeof postsTable.$inferInsert
export type SelectPost = typeof postsTable.$inferSelect
