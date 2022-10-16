import { configureStore } from '@reduxjs/toolkit'
import color from './color/slice'
import accountPage from './account-page/slice'

export const store = configureStore({
  reducer: {
    color,
    accountPage,
  },
})

export type RootState = ReturnType<typeof store.getState>
