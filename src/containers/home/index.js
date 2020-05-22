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
import { IsSchoolGQL } from "../../api/isSchool.graphql";
import { useQuery } from "@apollo/react-hooks";

const mapStateToProps = state => ({
  user: state.auth.user
});

export const Home: () => React$Node = compose(connect(mapStateToProps))(({ user }) => {
  const { loading, error, data } = useQuery(IsSchoolGQL);

  console.log('______');
  console.log('loading', loading);
  console.log('user', user);
  console.log('error', error);
  console.log('data', data);
  console.log('______');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>{user.teacher.firstName}</Text>
          <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>{user.teacher.lastName}</Text>
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
