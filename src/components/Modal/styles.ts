import styled from 'styled-components/native'

export const Modal = styled.Modal``

export const Overlay = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundmodal};
`

export const container = styled.View`
  flex: 1;
  margin-top: 510px;
  background-color: ${(props) => props.theme.colors.backgroundwhite};
  align-items: center;
`

export const Bar = styled.View`
  width: 80px;
  height: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.backgroundwhite};
  align-self: center;
  margin-top: -15px;
`
