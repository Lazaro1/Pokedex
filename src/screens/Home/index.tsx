import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import iconpoint from '../../../src/assets/images/iconpoint.svg'
import iconfilter from '../../../src/assets/images/iconfilter.svg'
import Iconarrow from '../../assets/images/iconarrow.svg'
import { PokeCard } from '../../components/PokeCard'
import * as S from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { FlatList } from 'react-native-gesture-handler'
import { api } from '../../services/api'
import { usePoke } from '../../hooks/usePoke'
import { Modal } from '../../components/Modal'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const { getPokemon, page, pokeData, nextPage } = usePoke()

  const navigation = useNavigation()
  useEffect(() => getPokemon() as any, [])

  function handleCloseModal() {
    setOpenModal(false)
  }

  function handleOpenModal() {
    setOpenModal(true)
  }

  function handlePokeDetails() {
    navigation.navigate('PokeDetails')
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.containerFilter>
          <HeaderIcon icon={iconpoint} onPress={handleOpenModal} />
          <HeaderIcon icon={iconfilter} onPress={handleOpenModal} />
          <HeaderIcon icon={Iconarrow} onPress={handleOpenModal} />
        </S.containerFilter>
        <S.containerSearch>
          <S.Title>Pokédex</S.Title>
          <S.Label>
            Search for Pokémon by name or using the National Pokédex number.
          </S.Label>
          <S.inputArea>
            <FontAwesome
              name="search"
              size={15}
              style={{ marginRight: 15, color: '#747476' }}
            />
            <S.Input placeholder="What Pokémon are you looking for?" />
          </S.inputArea>
        </S.containerSearch>
      </S.Header>
      <FlatList
        data={pokeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PokeCard data={item} onPress={handlePokeDetails} />
        )}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20
        }}
        // onEndReached={() => nextPage(page + 50)}
      />
      <Modal visible={openModal} closeModal={handleCloseModal}>
        <S.Label>TEste</S.Label>
      </Modal>
    </S.Wrapper>
  )
}
