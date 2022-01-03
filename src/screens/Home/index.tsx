import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import iconpoint from '../../../src/assets/images/iconpoint.svg'
import iconfilter from '../../../src/assets/images/iconfilter.svg'
import Iconarrow from '../../assets/images/iconarrow.svg'
import { PokeCard } from '../../components/PokeCard'
import * as S from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { FlatList } from 'react-native-gesture-handler'

export default function Home() {
  const pokeData = [
    {
      id: 1,
      name: 'Bulbasur',
      type: 'Grass',
      img: 'SVG'
    },
    {
      id: 2,
      name: 'Bulbasur',
      type: 'Grass',
      img: 'SVG'
    },
    {
      id: 3,
      name: 'Bulbasur',
      type: 'Grass',
      img: 'SVG'
    },
    {
      id: 4,
      name: 'Bulbasur',
      type: 'Grass',
      img: 'SVG'
    },
    {
      id: 5,
      name: 'Bulbasur',
      type: 'Grass',
      img: 'SVG'
    }
  ]

  return (
    <S.Wrapper>
      <S.Header>
        <S.containerFilter>
          <HeaderIcon icon={iconpoint} />
          <HeaderIcon icon={iconfilter} />
          <HeaderIcon icon={Iconarrow} />
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
      </S.Header>
      <FlatList
        data={pokeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PokeCard />}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20
        }}
      />
    </S.Wrapper>
  )
}
