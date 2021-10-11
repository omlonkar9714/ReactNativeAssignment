import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../assets/AppColors';
import {MemoizedIamge} from './CustomImageComponent';

const CarouselItemComponent = ({item}) => {
  return (
    <View style={styles.caroImageContainer}>
      <MemoizedIamge url={item} style={styles.caroImage}></MemoizedIamge>
    </View>
  );
};

const styles = StyleSheet.create({
  caroImage: {height: 300, borderRadius: 10, width: '100%'},
  caroImageContainer: {
    backgroundColor: AppColors.white,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselItemComponent;
