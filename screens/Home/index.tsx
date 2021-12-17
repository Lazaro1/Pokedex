import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { RootTabScreenProps } from '../../types'
import iconpoint from '../../assets/images/iconpoint.png'
import iconfilter from '../../assets/images/iconfilter.png'
import iconarrow from '../../assets/images/iconarrow.png'
import { FlatList } from 'react-native'
import PokeCard from '../../components/PokeCard'
import * as S from './styles'

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <S.Wrapper>
      <S.containerFilter>
        <S.Icon source={iconpoint} />
        <S.Icon source={iconarrow} />
        <S.Icon source={iconfilter} />
      </S.containerFilter>
      <S.containerSearch>
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
      </S.containerSearch>
      <S.containerCard>
        <PokeCard />
      </S.containerCard>
    </S.Wrapper>
  )
}
