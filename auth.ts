import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { db } from './drizzle'
import { usersTable } from './schema'

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,
  providers: [GitHub],
  callbacks: {
    jwt({ token, user, profile, account }) {
      if (user) {
        token.id = account!.provider + profile!.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      const res = await db.select().from(usersTable)
      console.log(res)
      return session
    },
  },
})
