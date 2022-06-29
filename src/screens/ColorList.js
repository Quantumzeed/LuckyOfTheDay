import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  onPress,
  Image,
  Animated,
  scrollX,
  onScroll,
  useRef,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import data from '../data/data';
import {toturial2Spec, width, colors} from '../themes/MainTheme';
const {ITEM_HIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE} = toturial2Spec;
const {forground3, textLight} = colors;

const powerColor = ({color}) => (
  <View>
    <Text>{color}</Text>
  </View>
);

const ColorList = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  //const translateX = useSharedValue(0);

  return (
    <SafeAreaView style={[styles.container]}>
      <Text
        style={{
          fontSize: 30,
          color: '#44a6a6',
          left: SPACING,
          fontWeight: '800',
        }}>
        Color Of The Day
      </Text>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.2, 1],
          });

          return (
            // <ScrollView>
            <View
              onPress={() => {
                //navigation.push('ColorDetail', {item});
              }}
              style={styles.itemContainer}>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {overflow: 'hidden', borderRadius: RADIUS},
                ]}>
                <Animated.Image
                  source={{uri: item.image}}
                  style={[
                    StyleSheet.absoluteFillObject,
                    {
                      resizeMode: 'cover',
                      transform: [{scale}],
                    },
                  ]}
                />
              </View>

              <Animated.Text
                style={[
                  styles.itemName,
                  ,
                  {color: item.color},
                  {
                    transform: [{translateX}],
                  },
                ]}>
                {item.name}
                <Animated.View style={{transform: [{translateX}]}}>
                  <View style={[styles.itemBox]}>
                    <Text style={[styles.text]}>Power Positive</Text>
                    <Animated.Text
                      style={[styles.itemBox2, {transform: [{translateX}]}]}>
                      {item.power1 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.power1},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.power2 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.power2},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.power3 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.power3},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.power4 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.power4},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                    </Animated.Text>
                  </View>
                  <View>
                    <View style={[styles.itemBox]}>
                      <Text style={[styles.text]}>Work</Text>
                      <View>
                        <Animated.Text
                          style={[
                            styles.itemBox2,
                            {transform: [{translateX}]},
                          ]}>
                          {item.work1 !== '' ? (
                            <TouchableOpacity
                              style={[
                                styles.itemColor,
                                {backgroundColor: item.work1},
                              ]}></TouchableOpacity>
                          ) : (
                            <></>
                          )}
                          {item.work2 !== '' ? (
                            <TouchableOpacity
                              style={[
                                styles.itemColor,
                                {backgroundColor: item.work2},
                              ]}></TouchableOpacity>
                          ) : (
                            <></>
                          )}
                          {item.work3 !== '' ? (
                            <TouchableOpacity
                              style={[
                                styles.itemColor,
                                {backgroundColor: item.work3},
                              ]}></TouchableOpacity>
                          ) : (
                            <></>
                          )}
                          {item.work4 !== '' ? (
                            <TouchableOpacity
                              style={[
                                styles.itemColor,
                                {backgroundColor: item.work4},
                              ]}></TouchableOpacity>
                          ) : (
                            <></>
                          )}
                        </Animated.Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.itemBox]}>
                    <Text style={[styles.text]}>Money</Text>
                    <Animated.Text
                      style={[styles.itemBox2, {transform: [{translateX}]}]}>
                      {item.money1 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.money1},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.money2 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.money2},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.money3 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.money3},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.money4 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.money4},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                    </Animated.Text>
                  </View>
                  <View>
                    <View style={[styles.itemBox]}>
                      <Text style={[styles.text]}>Love</Text>
                      <Animated.Text
                        style={[styles.itemBox2, {transform: [{translateX}]}]}>
                        {item.love1 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.love1},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.love2 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.love2},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.love3 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.love3},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.love4 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.love4},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                      </Animated.Text>
                    </View>
                  </View>
                  <View style={[styles.itemBox]}>
                    <Text style={[styles.text]}>Health</Text>
                    <Animated.Text
                      style={[styles.itemBox2, {transform: [{translateX}]}]}>
                      {item.health1 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.health1},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.health2 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.health2},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.health3 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.health3},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item.health4 !== '' ? (
                        <TouchableOpacity
                          style={[
                            styles.itemColor,
                            {backgroundColor: item.health4},
                          ]}></TouchableOpacity>
                      ) : (
                        <></>
                      )}
                    </Animated.Text>
                  </View>
                  <View>
                    <View style={[styles.itemBox]}>
                      <Text style={[styles.text]}>Unlucky</Text>
                      <Animated.Text
                        style={[styles.itemBox2, {transform: [{translateX}]}]}>
                        {item.unlucky1 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.unlucky1},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.unlucky2 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.unlucky2},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.unlucky3 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.unlucky3},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                        {item.unlucky4 !== '' ? (
                          <TouchableOpacity
                            style={[
                              styles.itemColor,
                              {backgroundColor: item.unlucky4},
                            ]}></TouchableOpacity>
                        ) : (
                          <></>
                        )}
                      </Animated.Text>
                    </View>
                  </View>
                </Animated.View>
              </Animated.Text>
            </View>

            // </ScrollView>
          );
        }}
      />
      {/* <Animated.Text style={{backgroundColor: colorInterpolate}}>
        test
      </Animated.Text> */}
    </SafeAreaView>
  );
};

export default ColorList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: forground3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#275ca5',
    padding: 15,
    borderRadius: 15,
  },
  itemContainer3: {margin: SPACING, justifyContent: 'center'},
  itemContainer2: {
    width: ITEM_WIDTH,
    //alignItems: 'center',
    margin: SPACING,
    backgroundColor: '#275ca5',
    borderRadius: SPACING,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HIGHT,
    margin: SPACING,
    // shadowColor: 'gray',
    // shadowOffset: {
    //   width: ITEM_WIDTH * 0.068,
    //   height: ITEM_WIDTH * 0.068,
    // },
    // shadowOpacity: 0.68,
    // shadowRadius: ITEM_WIDTH * 0.068,
  },
  itemName: {
    justifyContent: 'center',
    fontSize: 30,
    color: textLight,
    left: SPACING,
    fontWeight: '800',
    width: ITEM_WIDTH * 0.8,
    textTransform: 'uppercase',
    position: 'absolute',
    top: SPACING,
    bottom: SPACING,
    //backgroundColor: 'blue',
    opacity: 1,
    shadowColor: 'gray',
    shadowOffset: {
      width: ITEM_WIDTH * 0.068,
      height: ITEM_WIDTH * 0.068,
    },
    shadowOpacity: 0.68,
    shadowRadius: ITEM_WIDTH * 0.068,
  },
  itemName2: {
    margin: SPACING,
    fontSize: 30,
    color: textLight,
    fontWeight: '800',
    textTransform: 'uppercase',
    position: 'relative',
  },
  itemIndex: {
    fontWeight: '800',
    color: textLight,
    fontSize: 18,
  },
  indexContainer: {
    position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.75,
  },
  indexContainer2: {
    //position: 'absolute',
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,

    justifyContent: 'center',
    alignItems: 'center',
  },
  noIndex: {
    color: '#fff',
    fontSize: 8,
  },
  colorContainer: {
    left: SPACING,
    width: ITEM_WIDTH * 0.8,
    top: SPACING * 4,
    //backgroundColor: 'green',
    //opacity: 0.5,
  },
  colorBox: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: textLight,
  },
  colorBox2: {},
  itemBox: {
    marginTop: SPACING / 5,
    //bottom: 20,
    //backgroundColor: 'blue',
    width: ITEM_WIDTH * 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    //color: textLight,
  },
  itemBox2: {
    marginTop: SPACING / 2,
    //backgroundColor: 'green',
    width: ITEM_WIDTH * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemColor: {
    bottom: SPACING,
    left: SPACING,
    width: 42,
    height: 42,
    borderRadius: 26,
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.82,
  },
  text: {
    color: textLight,
    fontWeight: '800',
  },
});
