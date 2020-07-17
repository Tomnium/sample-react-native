import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import React from 'react';

import HomeContainer from '../containers/HomeContainer';
import OpenCart from '../components/NavButtons/OpenCart';
import OpenHome from '../components/NavButtons/OpenHome';
import LogIn from '../containers/authButtons/LogIn';
import CartContainer from '../containers/CartContainer';
import LogOut from '../containers/authButtons/LogOut';
import AuthTabs from './AuthTabs';

const Stack = createStackNavigator();

// export const AppNavOld = StackNavigator(
//   {
//     Home: {screen: HomeContainer},
//     Cart: {screen: CartContainer},
//     Auth: {screen: AuthTabs},
//   },
//   {
//     navigationOptions: ({navigation}) => ({
//       headerStyle: {
//         backgroundColor: '#f8f9fa',
//       },
//       headerTintColor: '#f8f9fa',
//       headerTitleStyle: {},
//       headerLeft: (
//         <View style={{flexDirection: 'row'}}>
//           <OpenHome navigation={navigation} />
//           <OpenCart navigation={navigation} />
//         </View>
//       ),
//       headerRight: (
//         <View style={{flexDirection: 'row'}}>
//           <LogIn navigation={navigation} />
//           <LogOut navigation={navigation} />
//         </View>
//       ),
//     }),
//   },
// );

export const AppNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#f8f9fa',
        },
        headerTintColor: '#f8f9fa',
        headerTitleStyle: {},
        headerLeft: () => (
          <View style={{flexDirection: 'row'}}>
            <OpenHome navigation={navigation} />
            <OpenCart navigation={navigation} />
          </View>
        ),
        // headerRight: () => (
        //   <View style={{flexDirection: 'row'}}>
        //     <LogIn navigation={navigation} />
        //     <LogOut navigation={navigation} />
        //   </View>
        // ),
      })}>
      <Stack.Screen name="Home" component={HomeContainer} initialParams={{ name: 'Home' }}/>
      <Stack.Screen name="Cart" component={CartContainer} initialParams={{ name: 'Cart' }}/>
      <Stack.Screen name="Auth" component={AuthTabs} initialParams={{ name: 'Auth' }}/>
    </Stack.Navigator>
  );
}

// export const AuthNavigator = SwitchNavigator(
//   {
//     App: AppNav,
//   },
//   {initialRouteName: 'App'},
// );
