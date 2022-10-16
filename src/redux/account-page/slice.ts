import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountPageSliceState, AccountPageType } from './types'

const initialState: AccountPageSliceState = {
  page: 'Favorites',
}

const accountPageSlice = createSlice({
  name: 'account_page',
  initialState: initialState,
  reducers: {
    setAccountPage: (state, action: PayloadAction<AccountPageType>) => {
      state.page = action.payload
    },
  },
})

export const { setAccountPage } = accountPageSlice.actions

export default accountPageSlice.reducer
