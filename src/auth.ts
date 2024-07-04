import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { signInEmailPassword } from "@/app/auth/actions/auth-actions";

const prisma = new PrismaClient();

// Your own logic for dealing with plaintext password strings; be careful!
export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "ingrese su email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "ingrese su contraseña",
        },
      },
      authorize: async (credentials) => {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          console.log("ERRORRR");
          return null;
        }
        const user = await signInEmailPassword(
          credentials.email,
          credentials.password,
        );

        if (!user) {
          throw new Error("User not found.");
        }
        // return json object with the user data
        return user;
      },
    }),
  ],
});
