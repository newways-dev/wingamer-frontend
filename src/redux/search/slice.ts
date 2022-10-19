import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchSliceState } from './types'

const initialState: SearchSliceState = {
  open: false,
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
    setValue: (state, action: PayloadAction<string | number>) => {
      state.value = action.payload
    },
  },
})

export const { setOpen, setValue } = searchSlice.actions

export default searchSlice.reducer
