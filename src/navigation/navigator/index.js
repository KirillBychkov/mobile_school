import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Second
} from '../../containers';
import {
  HOME,
  SECOND
} from '../../constants';
import { PressableIcon, Icon, DrawerMenu } from '../../components';

const Tab = createBottomTabNavigator();
const HomeStackNav = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Navigator = (): React.Node => {

  function buttonBack(navigation) {
    return (
      <PressableIcon style={styles.back} onPress={() => navigation.goBack()}>
        <Icon icon={Icon.icons.close} width={20} height={20} />
      </PressableIcon>
    )
  };

  function homeNavigator() {
    return (<HomeStackNav.Navigator initialRouteName={HOME}>
      <HomeStackNav.Screen
        options={{
          title: '',
          headerStyle: styles.disableHeader
        }}
        name={HOME}
        component={Home}
      />
    </HomeStackNav.Navigator>)
  }


  function tabsNav() {
    return (
      <Tab.Navigator
        initialRouteName={HOME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                icon={Icon.icons.close} width={20} height={20}
              />
            );
          }
        })}
        tabBarOptions={{
          style: styles.tabbar,
          activeTintColor: 'transparent',
          inactiveTintColor: 'transparent'
        }}
      >
        <Tab.Screen
          name={HOME}
          component={homeNavigator}
        />
        <Tab.Screen
          name={SECOND}
          component={Second}
        />
      </Tab.Navigator>
    )
  }

  function loginNav() {
    return (
      <>
        <Drawer.Navigator drawerContent={({ navigation }) => <DrawerMenu nav={navigation} />} initialRouteName={HOME}>
          <Drawer.Screen name={HOME} component={tabsNav} />
        </Drawer.Navigator>
      </>
    )
  }

  return (
    <>
      {loginNav()}
    </>

  );
}
// TODO refactor this file on small containers
const styles = StyleSheet.create({
  headerStyle: {
    // backgroundColor: colors.background,
    shadowColor: 'transparent',
    shadowOffset: {
      height: 0
    }
  },
  title: {
    fontWeight: 'bold',
    // color: colors.white
  },
  disableHeader: { height: 0 },
  back: {
    paddingLeft: 10
  },
  tabbar: {
    paddingTop: 25,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    // backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 12,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.00,

    elevation: 15,
  }
});
