import React from 'react'
import { View, Text } from 'react-native'
import leaf from '../../assets/images/folha.png'

import * as S from './styles'

const Badges: React.FC = () => {
  return (
    <S.containerBadges>
      <S.Icon source={leaf} />
      <S.Name>Grass</S.Name>
    </S.containerBadges>
  )
}

export default Badges
