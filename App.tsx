import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dash from './src/Dash';
import { Provider } from 'react-redux';
import store from './src/reducers/store';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <BrowserRouter >
          <Dash />
        </BrowserRouter >
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
