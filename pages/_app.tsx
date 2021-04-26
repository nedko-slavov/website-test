import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../client';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import '../styles.scss';
import { UserProvider } from '../providers/UserProvider';
import { ThemeProvider } from '../providers/ThemeProvider';
import Layout from '../components/layout';

const SafeHydrate: FC = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

SafeHydrate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <SafeHydrate>
    <ApolloProvider client={client}>
      <UserProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  </SafeHydrate>
);

export default App;
