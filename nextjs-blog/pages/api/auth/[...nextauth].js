import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

  export const authOptions = {
    // session: {
    //   strategy: "jwt",
    //   maxAge: 60 * 60, //3600s
    //   updateAge: 60 * 60,
    //   generateSessionToken: () => {
    //     return randomUUID?.() ?? randomBytes(32).toString("hex")
    //   },
    // },
    providers: [
      CredentialsProvider({
          name: "Credentials",
          credentials: {
              username: { label: "Username", type: "text", placeholder: "your name" },
              // email: {label: "email", type: "text", placeholder: "your email"},
              password: { label: "Password", type: "password", placeholder: "password" },
          },
          async authorize(credentials, req) {
              const user = { id: "1", name: "fnjakai", username: "fnjakai", password: "password123" }
              if (
                // user.username === req.body.username && 
                // user.password === req.body.password
                user.username === credentials.username && 
                user.password === credentials.password
                ) {
                  console.log(user);
                  return user
              } else {
                  return null
              }
          }
      }),
    ],
    }

    export default NextAuth(authOptions)