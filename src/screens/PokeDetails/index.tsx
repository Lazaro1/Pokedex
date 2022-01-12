import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Back from '../../assets/icons/back.svg'
import bug from '../../assets/images/bug.png'

import { HeaderIcon } from '../../components/HeaderIcon'

import * as S from './styles'
import theme from '../../global/styles/theme'
import { Badges } from '../../components/Badges'
import { TabNavigator } from '../../routes/TabNavigator'

export function PokeDetails() {
  const navigation = useNavigation()
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`

  const data = {
    id: 1,
    name: 'bug',
    imageUrl: bug,
    color: theme.colors.typebug
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ContainerArrow>
          <HeaderIcon icon={Back} onPress={() => navigation.goBack()} />
        </S.ContainerArrow>
        {/* <S.TextBackgroundHeader>bulbasaur</S.TextBackgroundHeader> */}
        <S.HeaderInfo>
          <S.pokeContainerLeftt>
            <S.PokeUrlImg
              source={{
                uri: imgUrl
              }}
            />
          </S.pokeContainerLeftt>
          <S.pokeContainerRight>
            <S.pokeNumber>{`#001`}</S.pokeNumber>
            <S.pokeName>BULBASAUR</S.pokeName>
            <S.containerBadges>
              <Badges data={data} />
              <Badges data={data} />
            </S.containerBadges>
          </S.pokeContainerRight>
        </S.HeaderInfo>
      </S.ContainerHeader>
      <NavigationContainer independent={true}>
        <TabNavigator />
      </NavigationContainer>
    </S.Container>
  )
}
