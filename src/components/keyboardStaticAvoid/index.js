// @flow

import * as React from 'react';
import {
  KeyboardAvoidingView as KeyboardAvoidingViewNative,
  Platform,
  StyleSheet
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type IProps = {
  fullHeight?: boolean,
  children: any,
  contentContainerStyle?: Object
};

export const KeyboardStaticAvoid = ({
  fullHeight,
  children,
  contentContainerStyle,
  ...props
}: IProps): React.Node => (
  // $FlowFixMe
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={{
      ...(fullHeight ? { flexGrow: 1 } : {}),
      ...contentContainerStyle
    }}
    keyboardShouldPersistTaps="handled"
    enableResetScrollToCoords
    enableOnAndroid
    {...props}
  >
    {children}
  </KeyboardAwareScrollView>
);

KeyboardStaticAvoid.defaultProps = {
  fullHeight: false,
  contentContainerStyle: {}
};

export const KeyboardAvoidingView = ({ children }: { children: any }) => (
  <KeyboardAvoidingViewNative
    style={styles.wrapper}
    contentContainerStyle={styles.content}
    behavior="padding"
    enabled={Platform.OS !== 'android'}
  >
    {children}
  </KeyboardAvoidingViewNative>
);

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  content: { flexGrow: 1 }
});


// <KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}></KeyboardStaticAvoid>