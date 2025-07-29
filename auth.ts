import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ username, password }) {
        // Replace this with your actual authentication logic
        if (username === "admin" && password === "admin") {
          return { id: "1", name: "Admin" }
        }
        return null
      },
    }),
  ],
})