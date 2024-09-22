import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users_table', {
  id: text('id').primaryKey(),
  username: text('name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
})

export const postsTable = pgTable('posts_table', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
})

// export const messagesTable = pgTable('messages_table', {
//   id: text('id').primaryKey(),
//   content: text('content').notNull(),
//   createdAt: timestamp('created_at').notNull().defaultNow(),
//   toWhom: text('to_whom')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'set null' }),
//   byWho: text('by_who')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'set null' }),
// })

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export type InsertPost = typeof postsTable.$inferInsert
export type SelectPost = typeof postsTable.$inferSelect

// export type InsertMessage = typeof messagesTable.$inferInsert
// export type SelectMessage = typeof messagesTable.$inferSelect
