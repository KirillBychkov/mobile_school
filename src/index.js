import * as React from 'react';
import { Platform } from 'react-native';
import { GatewayProvider } from 'react-gateway';
// eslint-disable-next-line import/no-unresolved

import { useScreens } from 'react-native-screens';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

const authLink = setContext((_, { headers }) => {
    let user: any = localStorage.getItem('loginUser');
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
    link: ApolloLink.from([authLink]),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
        query: {
            fetchPolicy: 'cache-first',
        },
    },
});
// Create the client as outlined in the setup guide
const client = new ApolloClient({ cache });

import { Store } from './store';

Platform.select({ ios: useScreens, android: () => { } })();

console.disableYellowBox = true;

export const Application = (): React.Node => (
    <ApolloProvider client={client}>
      <GatewayProvider>
        <Store />
      </GatewayProvider>
    </ApolloProvider>
);