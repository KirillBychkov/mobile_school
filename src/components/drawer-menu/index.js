import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PressableIcon, Icon } from '..';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { actionLogin } from '../../store/actions'


type Props = {
  login: (r: any) => void,
}

const mapDispatchToProps = {
  login: actionLogin
};

export const DrawerMenu = compose(connect(null, mapDispatchToProps))(({ nav, login }: Props) => {

  function redirectTo() {
    login({ isLogin: false })
  }
  return (
    <View style={styles.container}>
      <PressableIcon style={styles.close} onPress={() => nav.closeDrawer()}>
        <Icon icon={Icon.icons.close} width={20} height={20} />
      </PressableIcon>
      <TouchableOpacity onPress={redirectTo}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
});

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
