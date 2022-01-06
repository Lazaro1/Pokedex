import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundtypegrass};
`
export const ContainerHeader = styled.View`
  margin-top: ${getStatusBarHeight() + 42};
  /* padding-horizontal: 30px; */
  width: 585px;

  /* background-color: red; */
`

export const TextBackgroundHeader = styled.Text`
  font-family: 'SF_Pro_Display';
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 119px;
  text-align: center;
`
