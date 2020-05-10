import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PressableIcon, Icon } from '..';

export const DrawerMenu = ({ nav }) => {

  return (
    <View style={styles.container}>
      <PressableIcon style={styles.close} onPress={() => nav.closeDrawer()}>
        <Icon icon={Icon.icons.close} width={20} height={20} />
      </PressableIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 47,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  close: {
    zIndex: 10000,
    position: 'absolute',
    top: 45,
    right: 25
  },
});
