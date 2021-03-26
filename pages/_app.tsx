import { ApolloProvider } from '@apollo/client';
import client from '../client';
import { AppProps } from 'next/app';
import '../styles.scss';

const SafeHydrate: React.FC = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

// eslint-disable-next-line react/prop-types
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SafeHydrate>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SafeHydrate>
  );
};

export default App;
