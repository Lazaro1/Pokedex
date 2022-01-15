import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { About } from '../components/About'
import { Evolution } from '../components/Evolution'
import { Stats } from '../components/Stats'
import theme from '../global/styles/theme'

const Tab = createMaterialTopTabNavigator()

type data = {
  id: number
  name: string
  imageUrl: string
  color: string
  colorBackground: string
}

type DataProps = {
  data: data
}

export function TabNavigator({ data }: DataProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: data.colorBackground },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: theme.colors.textwhite,
          fontFamily: theme.fonts.title,
          lineHeight: 19,
          borderRadius: 20
        }
      }}
    >
      {console.log(data)}
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Evolution" component={Evolution} />
    </Tab.Navigator>
  )
}
