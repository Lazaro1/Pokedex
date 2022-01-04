import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Badges } from '../Badges'
import pokeball from '../../assets/images/Pokeball.png'
import { types } from '../../Data/types'
import { api } from '../../services/api'

type PokeProps = {
  name: string
  url: string
}

type Props = {
  data: PokeProps
}

export function PokeCard({ data }: Props) {
  const [dataTypes, setDataTypes] = useState<any>()

  const { name, url } = data
  const pokeNumber = url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '')
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`

  const getTypes = async () => {
    try {
      const { data } = await api.get(`/pokemon/${pokeNumber}`)
      const novoArray = [] as any
      types.map((item) => {
        data.types.map((a: any) => {
          if (item.name === a.type.name) {
            novoArray.push(item)
          }
        })
      })
      setDataTypes(novoArray)
    } catch (error) {
      throw new Error('Error')
    }
  }

  useEffect(() => {
    getTypes()
  }, [])

  return (
    <S.pokeContainer activeOpacity={0.8}>
      <S.pokeContainerLeft>
        <S.pokeNumber>{`#00${pokeNumber}`}</S.pokeNumber>
        <S.pokeName>{name}</S.pokeName>
        <S.containerBadges>
          {dataTypes?.map((type: any) => (
            <Badges key={type.id} data={type} />
          ))}
        </S.containerBadges>
      </S.pokeContainerLeft>
      <S.pokeContainerRight>
        <S.pokeballImage source={pokeball} />
        <S.PokeUrlImg
          source={{
            uri: imgUrl
          }}
        />
      </S.pokeContainerRight>
    </S.pokeContainer>
  )
}
