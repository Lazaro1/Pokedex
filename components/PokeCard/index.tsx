import React from 'react'
import { View, Text } from 'react-native'

import * as S from './styles'

const PokeCard: React.FC = () => {
  return (
    <S.pokeContainer>
      <S.pokeContainerLeft>
        <S.pokeNumber>#001</S.pokeNumber>
        <S.pokeName>Bulbasaur</S.pokeName>
      </S.pokeContainerLeft>
      <S.pokeContainerRight></S.pokeContainerRight>
    </S.pokeContainer>
  )
}

export default PokeCard
