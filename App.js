/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Store from './src/Store';
import {Provider} from 'react-redux';
import {AppNav} from './src/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
