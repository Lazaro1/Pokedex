import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundtypegrass};
  justify-content: center;
  align-items: center;
`
export const ContainerInfo = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.backgroundwhite};
`
