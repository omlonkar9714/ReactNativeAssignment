import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {AppColors} from '../assets/AppColors';

const ReduxLoader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator color={AppColors.tomato}></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.transparent,
  },
  txt: {fontSize: 30, color: 'red'},
});

export default ReduxLoader;
