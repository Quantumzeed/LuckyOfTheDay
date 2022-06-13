import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Animated,
  scrollX,
} from 'react-native';
import React, {useRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {toturial2Spec, width, colors} from '../themes/MainTheme';

import data from '../data/data';
import * as Animatable from 'react-native-animatable';
const {ITEM_HIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE} = toturial2Spec;
const {forgroud3} = colors;

const fadInBottom = {
  0: {
    opacity: 0,
    translateX: 50,
  },
  1: {
    opacity: 1,
    translateX: 0,
  },
};

const ColorDetail = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}> */}
      <View style={[StyleSheet.absoluteFillObject]}>
        <Image
          source={{uri: item.image}}
          style={[
            StyleSheet.absoluteFillObject,
            {
              resizeMode: 'cover',
            },
          ]}
        />
      </View>
      {/* </SharedElement> */}
      <Animatable.Text
        animation={fadInBottom}
        duration={1000}
        style={[styles.itemName]}>
        {item.name}
      </Animatable.Text>
    </SafeAreaView>
  );
};

// DetailScreen.sharedElements = (route, otherRoute, showing) => {
//   const { item } = route.params;
//   return [`item.${item.key}.photo`];;
// }
// ColorDetail.sharedElements = (route, otherRoute, showing) => {

//   const { item } =route.params

//   return [{
//     id: `item.${item.key}.image`
//   },
//   {
//     id: `item.${item.key}.name`
//   }
// ]

// }

export default ColorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#275ca5',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#275ca5',
    padding: 15,
    borderRadius: 15,
  },
  itemName: {
    fontSize: 30,
    color: '#fff',
    left: SPACING * 2,
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: 100,
    bottom: SPACING,
  },
});
