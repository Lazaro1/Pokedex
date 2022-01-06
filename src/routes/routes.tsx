import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'

const { Screen, Navigator } = createNativeStackNavigator()

export function RoutesApp() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
