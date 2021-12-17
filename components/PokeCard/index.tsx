import React from 'react'
import * as S from './styles'
import Badges from '../Badges'
import pokeball from '../../assets/images/Pokeball.png'

const PokeCard: React.FC = () => {
  return (
    <S.pokeContainer>
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
      </S.pokeContainerRight>
    </S.pokeContainer>
  )
}

export default PokeCard
