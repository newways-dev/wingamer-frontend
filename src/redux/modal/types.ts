export type ModalType = 'login' | 'signin' | 'recovery' | 'search'

export interface ModalSliceState {
  openModal: boolean
  typeModal: ModalType
}
