import React from 'react'
import * as S from './styles'
import Badges from '../Badges'
import pokeball from '../../assets/images/Pokeball.png'
import bulbasaur from '../../assets/images/bulbasaur.svg'
import { PokeImg } from '../PokeImg'

export function PokeCard() {
  return (
    <S.pokeContainer activeOpacity={0.8}>
      <S.pokeContainerLeft>
        <S.pokeNumber>#001</S.pokeNumber>
        <S.pokeName>Bulbasaur</S.pokeName>
        <S.containerBadges>
          <Badges />
          <Badges />
        </S.containerBadges>
      </S.pokeContainerLeft>
      <S.pokeContainerRight>
        <S.pokeballImage source={pokeball} />
        <S.pokemon>
          <PokeImg icon={bulbasaur} />
        </S.pokemon>
      </S.pokeContainerRight>
    </S.pokeContainer>
  )
}
