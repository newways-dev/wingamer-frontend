import { configureStore } from '@reduxjs/toolkit'
import color from './color/slice'
import accountPage from './account-page/slice'
import avatar from './avatar/slice'

export const store = configureStore({
  reducer: {
    color,
    accountPage,
    avatar,
  },
})

export type RootState = ReturnType<typeof store.getState>
