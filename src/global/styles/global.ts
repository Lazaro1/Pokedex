import styled from 'styled-components/native'

export const GlobalContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundtypegrass};
  justify-content: center;
  align-items: center;
`
export const ContainerInfo = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backgroundwhite};
`

export const Title = styled.Text`
  font-size: 16px;
  line-height: 19px;

  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.textgrey};
`
