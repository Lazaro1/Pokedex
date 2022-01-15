import React from 'react'
import { Text } from 'react-native'

import * as S from '../../global/styles/global'

export function About() {
  return (
    <S.GlobalContainer>
      <S.ContainerInfo
      // style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <S.Title>
          Bulbasaur can be seen napping in bright sunlight.{'\n'} There is a
          seed on its back. By soaking up the{'\n'} sun's rays, the seed grows
          progressively larger.
        </S.Title>
      </S.ContainerInfo>
    </S.GlobalContainer>
  )
}
