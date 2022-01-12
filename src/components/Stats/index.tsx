import React from 'react'
import { Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = {
  icon: React.FC<SvgProps>
}

export function Evolution() {
  return (
    <S.Container>
      <Text>Evolution</Text>
    </S.Container>
  )
}
