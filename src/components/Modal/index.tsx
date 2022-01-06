import React, { ReactNode } from 'react'
import { ModalProps, TouchableWithoutFeedback } from 'react-native'

import * as S from './styles'

type Props = ModalProps & {
  children: ReactNode
  closeModal: () => void
}

export function Modal({ children, closeModal, ...rest }: Props) {
  return (
    <S.Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <S.Overlay>
          <S.container
            style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
          >
            <S.Bar />
            {children}
          </S.container>
        </S.Overlay>
      </TouchableWithoutFeedback>
    </S.Modal>
  )
}
