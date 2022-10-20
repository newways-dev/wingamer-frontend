import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalSliceState, ModalType } from './types'

const initialState: ModalSliceState = {
  openModal: false,
  typeModal: 'login',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload
    },
    setType: (state, action: PayloadAction<ModalType>) => {
      state.typeModal = action.payload
    },
  },
})

export const { setOpenModal, setType } = modalSlice.actions

export default modalSlice.reducer
