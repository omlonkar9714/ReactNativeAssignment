import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MemoizedIamge} from './CustomImageComponent';

const GridItemComponent = ({item}) => {
  return (
    <View style={styles.gridItemContainer}>
      <MemoizedIamge style={styles.gridImage} url={item}></MemoizedIamge>
    </View>
  );
};

const styles = StyleSheet.create({
  gridImage: {height: 150, borderRadius: 5, width: '100%'},
  gridItemContainer: {borderRadius: 5, margin: 2, flex: 1},
});

export default GridItemComponent;
