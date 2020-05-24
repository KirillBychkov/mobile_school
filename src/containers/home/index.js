/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getUserInfo } from "../../functions";

const mapStateToProps = state => ({
  user: state.auth.user
});

export const Home: () => React$Node = compose(connect(mapStateToProps))(({ user }) => {
  const { userInfo, roleText }  = getUserInfo(user);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>{roleText}</Text>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>{userInfo.firstName}</Text>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>{userInfo.lastName}</Text>
        </View>

      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }
});
