import * as React from 'react';
import { Platform } from 'react-native';
import { GatewayProvider } from 'react-gateway';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';

import { Store } from './store';

Platform.select({ ios: useScreens, android: () => { } })();

console.disableYellowBox = true;

export const Application = (): React.Node => (
  <GatewayProvider>
    <Store />
  </GatewayProvider>
);