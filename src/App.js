/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

import Router from './router';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
