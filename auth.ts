import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { db } from './drizzle'
import { usersTable } from './schema'
import {
  getUserByEmail,
  isUserById,
  registerGithubUser,
} from './app/lib/actions/users'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: '/login' },
  debug: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null

        user = await getUserByEmail(credentials.email as string)

        if (!user) {
          return null
        }

        if (user?.password === credentials.password) {
          return user
        } else {
          return null
        }
      },
    }),
    GitHub,
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      if (user && account?.provider === 'github') {
        token.id = account!.provider + profile!.id
        const isUser = await isUserById(token.id as string)
        if (!isUser) {
          const res = await registerGithubUser({
            id: token.id as string,
            email: user.email as string,
            username: user.name as string,
            password: 'github-password',
          })
        }
      }
      if (user && account?.provider === 'credentials') {
        const userDB = await getUserByEmail(user.email as string)
        token.id = userDB?.id
        token.name = userDB?.username
        console.log(account)
        console.log(profile)
        console.log(token)
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.name = token.name
      return session
    },
  },
})
