import NextAuth, { Session, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "12e4185da0415b78032f",
            clientSecret: "18d65d17c934236f7c4737b91a295ef97e48d5e0",
        }),
        GoogleProvider({
            clientId: "3649145811-gfp6v8k3qclvluvnv53vhg5e7v7bll0s.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    database: {
        type: "mysql",
        client: db,
    },
    pages: {
        signIn: "/api/signin",
    },
    callbacks: {
        async session({ session, user }: { session: Session; user: User }): Promise<Session> {
            const { email, name } = user;
            session.user = user;

            const existingUser: any = await db.query("SELECT * FROM users WHERE email = ?", [email]);

            console.log(existingUser);
            
            if (!existingUser.length) {
                await db.query("INSERT INTO users (username, email) VALUES (?, ?)", [name, email]);
            };

            session.user = user;
            return session;
        },
    },
};

export default NextAuth(authOptions);