import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Second,
  Auth
} from '../../containers';
import {
  HOME,
  SECOND,
  AUTH
} from '../../constants';
import { PressableIcon, Icon, DrawerMenu } from '../../components';

const LoginNav = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNav = createStackNavigator();
const Drawer = createDrawerNavigator();

const mapStateToProps = state => ({
  isLogin: state.auth.login.isLogin
});

export const Navigator = compose(connect(mapStateToProps))((props): React.Node => {
  const { isLogin } = props;

  console.log('isLogin111', isLogin)

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

  function logOut() {
    return (<LoginNav.Navigator initialRouteName={AUTH}>
      <LoginNav.Screen
        options={{
          title: '',
          headerStyle: styles.disableHeader
        }}
        name={AUTH}
        component={Auth}
      />
    </LoginNav.Navigator>)
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
      {!isLogin ? logOut() : loginNav()}
    </>

  );
})

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
