import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Profile } from '../Profile/Profile'
import styles from './Tabs.module.scss'

import image from '../../assets/images/profile-image.png'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { setAccountPage } from '../../redux/account-page/slice'
import { AccountPageType } from '../../redux/account-page/types'

export interface TabsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Tabs = ({ className }: TabsProps) => {
  const [active, setActive] = useState<number>(0)
  const dispatch = useDispatch()

  const buttons = [
    'Favorites',
    'Buy Coins',
    'Avatars',
    'Transaction logs',
    'Withdraw coins',
  ]

  const handleClick = (page: AccountPageType, index: number) => {
    setActive(index)
    dispatch(setAccountPage(page))
  }

  return (
    <div className={clsx(styles.tabs, className)}>
      <div className={styles.wrapper}>
        <Profile userName="DenisVykes" coins="11.58 coins" image={image} />
        <ul className={styles.list}>
          {buttons.map((button, index) => (
            <li
              onClick={() => handleClick(button as AccountPageType, index)}
              className={clsx(styles.item, {
                [styles.active]: active === index,
              })}
              key={index}
            >
              {button}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
