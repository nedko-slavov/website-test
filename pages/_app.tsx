import { ApolloProvider } from '@apollo/client';
import client from '../client';
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import '../styles.scss';
import { UserProvider } from '../providers/UserProvider';
import Layout from '../components/layout';

interface SafeHydrateProps {
  children: React.ReactNode;
}

const SafeHydrate: React.FC<SafeHydrateProps> = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

SafeHydrate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

// eslint-disable-next-line react/prop-types
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SafeHydrate>
      <ApolloProvider client={client}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ApolloProvider>
    </SafeHydrate>
  );
};

export default App;
