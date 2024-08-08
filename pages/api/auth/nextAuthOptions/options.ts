import credentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { _getUserByEmail } from "../../../../models/user.model";

interface UserData {
  id: string;
  data: {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
  };
}

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
        const userData: UserData = await _getUserByEmail(email);
        const user = userData.data;
        console.log(user);

        if (email === user.email && password === user.password) {
          return {
            id: userData.id,
            name: user.firstname + " " + user.lastname,
            email: user.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    session: async ({ token, session, user }) => {
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
