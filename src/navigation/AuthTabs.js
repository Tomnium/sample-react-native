import React from 'react';
import {Image, StyleSheet} from 'react-native';

import LogInContainer from '../containers/LogInContainer';
import SignUpContainer from '../containers/SignUpContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

const Tab = createBottomTabNavigator();

export const AuthTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        showIcon: true,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          paddingBottom: 3,
        },
      }}>
      <Tab.Screen
        name="SignIn"
        component={LogInContainer}
        options={{
          title: 'Sign In',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/signIn.png')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUpContainer}
        options={{
          title: 'Sign Up',
          tabBarIcon: () => (
            <Image
              source={require('../../assets/signUp.png')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTabs;

// const routes = {
//   SignIn: {
//     screen: LogInContainer,
//     navigationOptions: {
//       title: 'Sign In',
//       tabBarIcon: ({tintColor}) => (
//         <Image
//           source={require('../../assets/signIn.png')}
//           style={styles.icon}
//         />
//       ),
//     },
//   },
//   SignUp: {
//     screen: SignUpContainer,
//     navigationOptions: {
//       title: 'Sign Up',
//       tabBarIcon: ({tintColor}) => (
//         <Image
//           source={require('../../assets/signUp.png')}
//           style={styles.icon}
//         />
//       ),
//     },
//   },
// };

// const routeConfig = {
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     showLabel: true,
//     showIcon: true,
//     // activeTintColor: colors.primary,
//     // inactiveTintColor: colors.secondary,
//     // indicatorStyle: { backgroundColor: colors.secondary },
//     labelStyle: {
//       // fontFamily: fonts.base,
//       fontSize: 12,
//     },
//     style: {
//       backgroundColor: 'white',
//       borderTopWidth: 0,
//       paddingBottom: 3,
//     },
//   },
// };

// export default TabNavigator(routes, routeConfig);
