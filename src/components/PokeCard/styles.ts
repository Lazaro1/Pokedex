import styled from 'styled-components/native'

export const pokeContainer = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.colors.backgroundtypegrass};
`

export const pokeContainerLeft = styled.View`
  width: 167px;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`
export const pokeNumber = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.textnumber};
`
export const pokeName = styled.Text`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: bold;
  line-height: 31px;
  color: ${(props) => props.theme.colors.textwhite};
  text-transform: capitalize;
`

export const containerBadges = styled.View`
  flex-direction: row;
`

export const pokeContainerRight = styled.View`
  width: 167px;
  align-items: flex-end;
`
export const pokeballImage = styled.Image``
export const PokeUrlImg = styled.Image`
  position: absolute;
  width: 130px;
  height: 130px;
  bottom: 10px;
`
