import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {AppColors} from '../../assets/AppColors';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCarouselList,
  fetchGridlList,
} from '../../redux/reducers/ListItemReducer';
import CarouselItemComponent from '../../components/CarouselItemComponent';
import GridItemComponent from '../../components/GridItemComponent';

const WIDTH = Dimensions.get('screen').width;
const CarouselAutoPlayInterval = 1500;
const CAROUSEL_ITEM_WIDTH = WIDTH - WIDTH * 0.3;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const carouselListFromRedux = useSelector(state => {
    return state.listItemReducer.carouselList.slice(0, 5);
  });

  const gridListFromRedux = useSelector(state => {
    return state.listItemReducer.gridList;
  });

  useEffect(() => {
    dispatch(fetchCarouselList());
    dispatch(fetchGridlList());
    return () => {};
  }, []);

  const renderList1Item = ({item, index}) => {
    return <CarouselItemComponent item={item}></CarouselItemComponent>;
  };

  const renderCarousal = () => {
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselListFromRedux}
          renderItem={renderList1Item}
          sliderWidth={WIDTH}
          itemWidth={CAROUSEL_ITEM_WIDTH}
          autoplay
          autoplayInterval={CarouselAutoPlayInterval}
          loop
          enableSnap={true}
        />
      </View>
    );
  };

  const renderGridItem = ({item, index}) => {
    return <GridItemComponent item={item}></GridItemComponent>;
  };

  const renderGridImage = () => {
    return (
      <View style={styles.gridListContainer}>
        <FlatList
          numColumns={3}
          data={gridListFromRedux}
          keyExtractor={(item, index) => item + index}
          renderItem={renderGridItem}></FlatList>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      {renderCarousal()}
      {renderGridImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  gridListContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: AppColors.white,
    margin: 10,
  },
  main: {flex: 1, backgroundColor: AppColors.grey},
  carouselContainer: {marginVertical: 10, width: '100%'},
});

export default HomeScreen;
