import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Avatar.module.scss'

import check from '../../assets/icons/check.svg'
import { Button } from '../Button/Button'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../redux/avatar/slice'
import { useSelector } from 'react-redux'
import { selectAvatar } from '../../redux/avatar/selector'

export interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string
  index: number
  price?: number
}

export const Avatar = ({ price, index, image, className }: AvatarProps) => {
  const { selected } = useSelector(selectAvatar)
  const dispatch = useDispatch()

  return (
    <div className={clsx(styles.avatar, className)}>
      {index === selected && (
        <div className={styles.check}>
          <ReactSVG src={check} />
        </div>
      )}
      <div
        className={clsx(styles.image, {
          [styles.selected]: index === selected,
        })}
      >
        <img src={image} alt="" />
      </div>
      {price && index !== selected && (
        <span className={styles.price}>{price} coins</span>
      )}
      {index !== selected && (
        <Button onClick={() => dispatch(setAvatar(index))} type="rounded">
          {price ? 'buy' : 'select'}
        </Button>
      )}
    </div>
  )
}
