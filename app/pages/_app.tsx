import { GlobalStyle } from '@/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export interface MyTheme extends DefaultTheme {
    color: {
        primary: string,
        secondary: string;
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

const theme: MyTheme = {
    color: {
        primary: '#121212',
        secondary: '#0070f3',
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

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;