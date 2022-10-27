export type AccountPageType =
  | 'Favorites'
  | 'Buy Coins'
  | 'Avatars'
  | 'Transaction logs'
  | 'Withdraw coins'

export interface AccountPageSliceState {
  page: AccountPageType
}
