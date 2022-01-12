import React from 'react'
import { Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = {
  icon: React.FC<SvgProps>
}

export function About() {
  return (
    <S.Container>
      <Text>About</Text>
    </S.Container>
  )
}
