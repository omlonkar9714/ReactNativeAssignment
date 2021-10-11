import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppColors} from '../assets/AppColors';

export const ImageComponent = props => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[props.style, {top: 0, left: 0, right: 0, bottom: 0}]}>
      <FastImage
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoad={() => {
          setLoading(false);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        style={[props.style]}
        source={{uri: props.url}}></FastImage>
      {loading && (
        <View
          style={[
            props.style,
            {
              justifyContent: 'center',
              position: 'absolute',
              alignItems: 'center',
            },
          ]}>
          <ActivityIndicator color={AppColors.tomato}></ActivityIndicator>
        </View>
      )}
    </View>
  );
};

export const MemoizedIamge = React.memo(ImageComponent);

// export default CustomImageComponent;
