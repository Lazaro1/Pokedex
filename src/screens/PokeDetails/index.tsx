import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Back from '../../assets/icons/back.svg'

import { HeaderIcon } from '../../components/HeaderIcon'

import * as S from './styles'

export function PokeDetails() {
  const navigation = useNavigation()
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`
  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderIcon icon={Back} onPress={() => navigation.goBack()} />
        {/* <S.TextBackgroundHeader>BULBASAUR</S.TextBackgroundHeader> */}
        <S.HeaderInfo>
          <S.pokeContainerLeftt>
            <S.PokeUrlImg
              source={{
                uri: imgUrl
              }}
            />
          </S.pokeContainerLeftt>
        </S.HeaderInfo>
      </S.ContainerHeader>
    </S.Container>
  )
}
