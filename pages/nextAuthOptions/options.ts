import credentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, //valid for one day
  },
  providers: [
    credentialsProvider({
      credentials: {
        email: {
          type: "email",
          label: "email",
        },
        password: {
          type: "password",
          label: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (email === "kwabs@dev.com" && password === "1234") {
          return { id: "1", username: "kwabs", email };
        } else {
          return null;
        }
      },
    }),
  ],
};
