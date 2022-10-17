import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvatarType } from '../../types/avatar'
import { AvatarSliceState } from './types'

const initialState: AvatarSliceState = {
  avatars: [],
  premium: [],
  selected: 0,
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: initialState,
  reducers: {
    setAvatars: (state, action: PayloadAction<AvatarType[]>) => {
      state.avatars = action.payload
    },
    setPremium: (state, action: PayloadAction<AvatarType[]>) => {
      state.premium = action.payload
    },
    setAvatar: (state, action: PayloadAction<number>) => {
      state.selected = action.payload
    },
  },
})

export const { setAvatars, setPremium, setAvatar } = avatarSlice.actions

export default avatarSlice.reducer
