import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pages } from '../../types/pages'
import { PageSliceState } from './types'

const initialState: PageSliceState = {
  page: 'main',
}

const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Pages>) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer
