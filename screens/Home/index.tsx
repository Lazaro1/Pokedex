import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'
import { RootTabScreenProps } from '../../types'
import * as S from './styles'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 3</Text>
      <S.Container>
        <Text style={styles.title}>Página 3</Text>
      </S.Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
