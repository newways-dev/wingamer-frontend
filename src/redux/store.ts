import { configureStore } from '@reduxjs/toolkit'
import color from './color/slice'
import accountPage from './account-page/slice'
import avatar from './avatar/slice'
import search from './search/slice'
import menu from './menu/slice'
import modal from './modal/slice'

export const store = configureStore({
  reducer: {
    color,
    accountPage,
    avatar,
    search,
    menu,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
