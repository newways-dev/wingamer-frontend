import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColorsType } from '../../types/colors'
import { ColorSliceState } from './types'

const initialState: ColorSliceState = {
  color: 'blue',
}

const colorSlice = createSlice({
  name: 'color',
  initialState: initialState,
  reducers: {
    setColor: (state, action: PayloadAction<ColorsType>) => {
      state.color = action.payload
    },
  },
})

export const { setColor } = colorSlice.actions

export default colorSlice.reducer
