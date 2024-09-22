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
        console.log('at authorize cb')
        let user = null

        user = await getUserByEmail(credentials.email as string)

        // if (!user) {
        //   throw new Error('User was not found.')
        // }

        console.log('at authorize end cb')
        if (user?.password === credentials.password) {
          console.log('authorize last if')
          return user
        } else {
          console.log('authorize last else')
          return null
        }
      },
    }),
    GitHub,
  ],
  callbacks: {
    async jwt({ token, user, profile, account }) {
      console.log('in jwt')
      if (user && account?.provider === 'github') {
        token.id = account!.provider + profile!.id
        const isUser = await isUserById(token.id as string)
        if (!isUser) {
          const res = await registerGithubUser({
            id: token.id as string,
            email: user.email as string,
            name: user.name as string,
            password: 'github-password',
          })
        }
      }
      if (user && account?.provider === 'credentials') {
        console.log(user)
        console.log('credentials approach')
        const userDB = await getUserByEmail(user.email as string)
        token.id = userDB?.id

        console.log(account)
        console.log(profile)
        console.log(token)
      }
      return token
    },
    async session({ session, token }) {
      console.log('in session')
      session.user.id = token.id as string
      return session
    },
  },
})
