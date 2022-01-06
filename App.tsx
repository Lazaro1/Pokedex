import React from 'react'
import Home from './src/screens/Home'

import { ThemeProvider } from 'styled-components'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import theme from './src/global/styles/theme'
import { PokemonProvider } from './src/hooks/usePoke'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    SF_Pro_Display: require('./src/assets/fonts/SFProDisplay-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </ThemeProvider>
  )
}
