import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
      // OAuth authentication providers...
      GoogleProvider(<NextAuthProviders>{
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GitHubProvider(<NextAuthProviders>{
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }), 
    ],
    // callbacks go here...
  }

  export default NextAuth(authOptions)
