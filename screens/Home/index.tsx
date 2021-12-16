import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { RootTabScreenProps } from '../../types'
import * as S from './styles'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <S.Wrapper>
      <S.containerHeader>
        <S.Title>Pokédex</S.Title>
        <S.Label>
          Search for Pokémon by name or using the National Pokédex number.
        </S.Label>
        <S.inputArea>
          <FontAwesome
            name="search"
            size={15}
            style={{ marginRight: 15, color: '#747476' }}
          />
          <S.Input placeholder="What Pokémon are you looking for?" />
        </S.inputArea>
      </S.containerHeader>
    </S.Wrapper>
  )
}
