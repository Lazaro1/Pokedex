import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`
export const Icon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  margin-right: 25px;
`

export const containerFilter = styled.View`
  /* height: 100px; */
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

export const containerSearch = styled.View`
  padding: 20px;
`

export const Title = styled.Text`
  /* ajustar fonte */
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #17171b;
`

export const Label = styled.Text`
  margin-bottom: 15px;
  margin-left: -15px;
  padding: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`

export const inputArea = styled.View`
  padding: 15px;

  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`

export const Input = styled.TextInput``

export const containerCard = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
