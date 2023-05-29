import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "",
            clientSecret: "",
        }),
        GoogleProvider({
            clientId: "",
            clientSecret: "",
        }),
        
    ],
};


export default NextAuth(authOptions);