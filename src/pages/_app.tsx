import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '../store';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Episodes: {
        merge(existing = [], incoming: any) {
          return { ...existing, ...incoming };
        }
      }
    }
  })
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
export default appWithTranslation(MyApp);
