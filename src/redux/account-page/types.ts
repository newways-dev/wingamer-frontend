export type AccountPageType =
  | 'Favorites'
  | 'Buy Coins'
  | 'Avatars'
  | 'Logs'
  | 'Withdraw coins'

export interface AccountPageSliceState {
  page: AccountPageType
}
