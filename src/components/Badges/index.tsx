import React from 'react'
import { View, Text } from 'react-native'
import leaf from '../../assets/images/folha.png'
import { PokeImg } from '../PokeImg'

import * as S from './styles'

type typeProps = {
  color: string
  id: number
  imageUrl: string
  name: string
}

type Props = {
  data: typeProps
}

export function Badges({ data }: Props) {
  const { color, imageUrl, name } = data
  return (
    <S.containerBadges style={{ backgroundColor: color }}>
      <S.Icon source={imageUrl} />
      <S.Name>{name}</S.Name>
    </S.containerBadges>
  )
}
