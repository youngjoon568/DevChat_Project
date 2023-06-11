"use client";
import { AuthProvider } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { SessionProvider } from "next-auth/react";

export interface MyTheme extends DefaultTheme {
    color: {
        primary: string,
        secondary: string;
        dark: string;
    };
    textSize: {
        xxxl: string;
        xxl: string;
        xl: string;
        l: string;
        m: string;
        s: string;
    };
};

export const theme: MyTheme = {
    color: {
        primary: '#3F51B5',
        dark: "#283593",
        secondary: '#121212',
    },
    textSize: {
        xxxl: "2.8rem",
        xxl: "2.6rem",
        xl: "2rem",
        l: "1.8rem",
        m: "1.6rem",
        s: "1.2rem",
    },
};

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <SessionProvider session={session}>
            <UserProvider>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                    <GlobalStyle />
                </AuthProvider>
            </UserProvider>
        </SessionProvider>
    );
};

export default App;