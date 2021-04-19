import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          photos: {
            keyArgs: false,

            merge(existing = { data: [], links: {}, meta: {} }, incoming = {}) {
              if (incoming.meta.totalCount === 0) {
                return {
                  __typename: 'PhotosPage',
                  data: [],
                  links: incoming.links,
                  meta: incoming.meta,
                };
              }

              const result =
                incoming.data.length > 0
                  ? {
                      __typename: 'PhotosPage',
                      data: [...existing?.data, ...incoming.data],
                      links: incoming.links,
                      meta: incoming.meta,
                    }
                  : existing;

              return result;
            },
          },
          users: {
            keyArgs: false,
            merge(existing = { data: [] }, incoming = {}) {
              // console.log('incoming', incoming);
              // console.log('existing', existing);

              // const result =
              //   incoming.data.length > 0
              //     ? {
              //         __typename: 'UsersPage',
              //         data: [...existing?.data, ...incoming.data],
              //       }
              //     : existing;

              // return result;
              return incoming;
            },
          },
        },
      },
    },
  }),
});
