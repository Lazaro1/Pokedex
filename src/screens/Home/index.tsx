import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import iconpoint from '../../../src/assets/images/iconpoint.svg'
import iconfilter from '../../../src/assets/images/iconfilter.svg'
import Iconarrow from '../../assets/images/iconarrow.svg'
import PokeCard from '../../components/PokeCard'
import * as S from './styles'
import { Header } from '../../components/Header'

export default function Home() {
  return (
    <S.Wrapper>
      <S.containerFilter>
        <Header icon={iconpoint} />
        <Header icon={iconfilter} />
        <Header icon={Iconarrow} />
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
        <PokeCard />
        <PokeCard />
      </S.containerCard>
    </S.Wrapper>
  )
}
