/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import TodoScreen from './src/screens/Todoscreen';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/Rootstack';

function App() {

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
