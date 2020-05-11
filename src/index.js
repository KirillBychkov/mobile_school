import * as React from 'react';
import { Platform } from 'react-native';
import { GatewayProvider } from 'react-gateway';
// eslint-disable-next-line import/no-unresolved

import { useScreens } from 'react-native-screens';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';

import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({ uri: 'http://ec2-35-180-30-110.eu-west-3.compute.amazonaws.com/graphql' });
const authLink = setContext(async (_, { headers }) => {
    let user: any = await AsyncStorage.getItem('loginUser');
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

const client = new ApolloClient({
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