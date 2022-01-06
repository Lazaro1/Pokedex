import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import { PokeDetails } from '../screens/PokeDetails'

const { Screen, Navigator } = createNativeStackNavigator()

export function RoutesApp() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="PokeDetails" component={PokeDetails} />
    </Navigator>
  )
}
