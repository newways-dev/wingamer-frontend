import { AvatarType } from '../../types/avatar'

export interface AvatarSliceState {
  avatars: AvatarType[]
  premium: AvatarType[]
  selected: number
}
