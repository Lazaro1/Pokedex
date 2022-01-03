import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundwhite};
`

export const Header = styled.View`
  margin-top: ${getStatusBarHeight()};
`
export const Icon = styled.Image`
  margin-right: 25px;
`

export const containerFilter = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

export const containerSearch = styled.View`
  padding: 20px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};

  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: ${(props) => props.theme.colors.textblack};
`

export const Label = styled.Text`
  margin-bottom: 15px;
  margin-left: -15px;
  padding: 15px;

  font-family: ${(props) => props.theme.fonts.title};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.theme.colors.textgrey};
`

export const inputArea = styled.View`
  padding: 15px;

  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.backgrounddefaultinput};
`

export const Input = styled.TextInput``

export const containerCard = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
