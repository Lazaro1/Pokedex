import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { About } from '../components/About'
import { Stats } from '../components/Evolution'
import { Evolution } from '../components/Stats'
import theme from '../global/styles/theme'

const Tab = createMaterialTopTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.backgroundtypegrass },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: theme.colors.textwhite,
          fontFamily: theme.fonts.title,
          lineHeight: 19,
          textTransform: 'lowercase'
        }
      }}
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Evolution" component={Evolution} />
    </Tab.Navigator>
  )
}
