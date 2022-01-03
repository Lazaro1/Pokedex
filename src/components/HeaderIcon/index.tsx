import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = RectButtonProps & {
  icon: React.FC<SvgProps>
}

export function HeaderIcon({ icon: Icon, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <Icon />
    </S.Container>
  )
}
