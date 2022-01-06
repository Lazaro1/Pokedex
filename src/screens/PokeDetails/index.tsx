import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Back from '../../assets/icons/back.svg'

import { HeaderIcon } from '../../components/HeaderIcon'

import * as S from './styles'

export function PokeDetails() {
  const navigation = useNavigation()
  return (
    <S.Container>
      <S.ContainerHeader>
        {/* <HeaderIcon icon={Back} onPress={() => navigation.goBack()} /> */}
        <S.TextBackgroundHeader>BULBASAUR</S.TextBackgroundHeader>
      </S.ContainerHeader>
    </S.Container>
  )
}
