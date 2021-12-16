import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1
  background-color: white;
`

export const containerHeader = styled.View`
  width: 414px;
  height: 291px;
  /* padding: 30px; */
  /* background: red; */
`

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  margin-right: 25px;
  /* align-self: center; */
  /* margin: auto auto 10px auto; */
`

export const containerFilter = styled.View`
  /* width: 414px; */
  margin-right: 15px;
  padding: 15px;
  height: 100px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  /* background: red; */
`

export const containerSearch = styled.View`
  padding: 30px;
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
  width: 334px;
  height: 60px;
  margin-left: -5px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`

export const Input = styled.TextInput``
