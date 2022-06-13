import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ColorList from '../screens/ColorList'
import ColorDetail from '../screens/ColorDetail';

const Stack = createNativeStackNavigator()
//const Stack = createSharedElementStackNavigator()

const RootStack = () => {
  return (
      <Stack.Navigator >
        {/* <Stack.Group> */}
          <Stack.Screen name = "ColorList" component = {ColorList} options={{ headerShown: false }}/>
          <Stack.Screen name = "ColorDetail" component = {ColorDetail} options={{ headerShown: false }}
          // sharedElements={(route, otherRoute, showing) => {
          //   const { item } = route.params;
          //   return [{
          //     id: `item.${item.key}.photo`,
          //     animation: 'fade',
          //     // resize: 'clip'
          //     // align: ''left-top'
          //   },];
          // }}
          />
          {/* </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name = "ColorDetail" component = {ColorDetail} options={{ headerShown: false }}/>

          </Stack.Group> */}
      </Stack.Navigator>
  )
}

export default RootStack