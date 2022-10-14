import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import { mongoConnect } from "@/utils/middleware";

import clientPromise from "@/config/mongodb";

import { LOGIN_ERRORS } from "@/pages/auth/login/config";

import User from "@/models/User";
import type { IUser } from "@/models/User/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        accountNum: { label: "Account number", type: "number" },
        email: { label: "Email address", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await mongoConnect();

        const user: IUser | null = await User.findOne({
          accountNumber: credentials?.accountNum,
          email: credentials?.email,
        });

        if (!user) throw new Error(LOGIN_ERRORS.USER_DOES_NOT_EXIST);

        const isMatch = await user.matchPassword(credentials?.password || "");

        if (!isMatch) throw new Error(LOGIN_ERRORS.PASSWORD_REQUIRED);

        if (isMatch) {
          const response = {
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
            accountNumber: user?.accountNumber,
            role: user?.role,
          };

          return response;
        }

        return null;
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),

  secret: process.env.NEXT_AUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt: ({ token, user }) => {
      return { ...token, ...user };
    },
    session: ({ session, token }) => {
      if (token) session.id = token.id;

      const profile = {
        email: token?.email,
        firstName: token?.firstName,
        lastName: token?.lastName,
        accountNumber: token?.accountNumber,
        role: token?.role,
      };

      return {
        ...session,
        profile,
      };
    },
  },

  pages: {
    signIn: "auth/login",
  },
};

export default NextAuth(authOptions);
