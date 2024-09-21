import { InsertPost, InsertUser } from './schema'

export const users: InsertUser[] = [
  {
    id: 1,
    email: 'email@1.ru',
    password: 'admin1',
    name: 'martin',
    age: 51,
  },
  {
    id: 2,
    email: 'email@2.ru',
    password: 'admin2',
    name: 'volga',
    age: 22,
  },
]

export const posts: InsertPost[] = [
  {
    id: 101,
    title: 'Night walking',
    content: 'Today We have walked in the forest at night',
    userId: 1,
  },
  {
    id: 102,
    title: 'Swimming',
    content: 'I like swimming',
    userId: 1,
  },

  {
    id: 103,
    title: 'Cheese cake',
    content: 'I cooked a wonderful cheese cake',
    userId: 2,
  },
  {
    id: 104,
    title: 'One road',
    content: 'One road is must be determined',
    userId: 2,
  },
]
