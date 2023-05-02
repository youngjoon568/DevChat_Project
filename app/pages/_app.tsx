import { GlobalStyle } from '@/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
    color: {
        primary: '#121212',
        secondary: '#0070f3',
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