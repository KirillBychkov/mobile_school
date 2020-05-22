// @flow
import { Storage } from '../utils/storage';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { URL } from '../constants';

import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';


const uploadLink = createUploadLink({ uri: `${URL}/graphql` });
const authLink = setContext(async (_, { headers }) => {
  let user: any = await Storage.get({ key: 'loginUser' });
  user = user ? JSON.parse(user) : null;
  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : '',
    },
  };
});

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id,
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, uploadLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});