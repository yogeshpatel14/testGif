/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/controller/home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
