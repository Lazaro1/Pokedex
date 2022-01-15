import React from 'react'
import { Text } from 'react-native'
import { SvgProps } from 'react-native-svg'

// import * as S from './styles'
import * as S from '../../global/styles/global'

type Props = {
  icon: React.FC<SvgProps>
}

export function Stats() {
  return (
    <S.GlobalContainer>
      <S.ContainerInfo
      // style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <Text style={{ textAlign: 'center' }}>Stats</Text>
      </S.ContainerInfo>
    </S.GlobalContainer>
  )
}
