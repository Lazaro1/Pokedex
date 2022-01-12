import React from 'react'
import { Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = {
  icon: React.FC<SvgProps>
}

export function Stats() {
  return (
    <S.Container>
      <Text>Stats</Text>
    </S.Container>
  )
}
