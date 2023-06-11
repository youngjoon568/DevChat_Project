import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "이메일 *", type: "email", placeholder: "이메일을 입력해 주세요." },
                password: { label: "비밀번호 *", type: "password", placeholder: "비밀번호를 입력해 주세요." }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string };
                

                return { id: "1", email: "chaeyj568@gmail.com", username: "채영준", created_at: "2023-05-28 12:05:05" };
            },
        }),
        GithubProvider({
            clientId: "",
            clientSecret: ""
        }),
        GoogleProvider({
            clientId: "",
            clientSecret: ""
        })
    ],
    pages: {
        signIn: "/api/signin",
        signOut: "/auth/signout",
        error: "/auth/error",
    },
    callbacks: {

    },
};

export default NextAuth(authOptions);