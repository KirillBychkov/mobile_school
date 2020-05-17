// @flow

import AsyncStorage from '@react-native-community/async-storage';

export const Storage = {
  get: ({ key }: { key: string }) => AsyncStorage.getItem(key),
  set: ({ key, value }: { key: string, value: string }) =>
    AsyncStorage.setItem(key, value)
};
