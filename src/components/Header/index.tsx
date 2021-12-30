import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type Props = RectButtonProps & {
  icon: React.FC<SvgProps>
}

export function Header({ icon: Icon, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <Icon />
    </RectButton>
  )
}
