import React from 'react'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = {
  icon: React.FC<SvgProps>
}

export function PokeImg({ icon: Icon }: Props) {
  return (
    <S.Container>
      <Icon />
    </S.Container>
  )
}
