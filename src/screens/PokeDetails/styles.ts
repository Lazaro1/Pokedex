import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundtypegrass};
`
export const ContainerHeader = styled.View`
  margin-top: ${getStatusBarHeight() + 42};
  width: 585px;
  padding: 15px;
  flex-direction: row;
`

// export const TextBackgroundHeader = styled.Text`
//   font-family: 'SF_Pro_Display';
//   font-style: normal;
//   font-weight: bold;
//   font-size: 100px;
//   line-height: 119px;
//   text-align: center;
// `

export const HeaderInfo = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 30px;
`

export const pokeContainerLeftt = styled.View`
  /* flex: 1; */
  width: 167px;
  align-items: flex-end;
`

export const PokeUrlImg = styled.Image`
  width: 130px;
  height: 130px;
`
export const pokeContainerRight = styled.View`
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
