import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Dash from './src/Dash';
import store from './src/reducers/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = "dark"; // useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Provider store={store}>
          <Dash />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
