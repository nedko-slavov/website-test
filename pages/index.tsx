import Counter from '../components/Counter';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <main>
    <ApolloProvider client={client}>
      <Counter />
    </ApolloProvider>
  </main>
);

export default App;
