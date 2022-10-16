import { configureStore } from '@reduxjs/toolkit'
import color from './color/slice'

export const store = configureStore({
  reducer: {
    color,
  },
})

export type RootState = ReturnType<typeof store.getState>
