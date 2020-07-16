/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Store from './src/Store';
import {Provider} from 'react-redux';
import {AuthNavigator} from './src/navigation/navigation';

const App: () => React$Node = () => {
  return (
    <Provider store={Store}>
      <AuthNavigator />
    </Provider>
  );
};

export default App;
