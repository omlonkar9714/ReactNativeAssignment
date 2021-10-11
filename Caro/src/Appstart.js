import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppColors} from './assets/AppColors';
import ReduxLoader from './components/ReduxLoader';
import {persistor, store} from './redux/Store';
import BottomTabNavigator from './routes/BottomTabNavigator';

const Appstart = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ReduxLoader></ReduxLoader>} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={styles.top}></SafeAreaView>
          <SafeAreaView style={styles.btm}>
            <BottomTabNavigator></BottomTabNavigator>
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  top: {flex: 0, backgroundColor: AppColors.white},
  btm: {flex: 1, backgroundColor: AppColors.white},
});

export default Appstart;
