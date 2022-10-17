import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Tabs } from '../../components'
import { selectAccountPage } from '../../redux/account-page/selector'
import { Avatars } from './Avatars/Avatars'
import { BuyCoins } from './BuyCoins/BuyCoins'
import { Favorites } from './Favorites/Favorites'

import { avatars, premiumAvatars } from '../../helpers/avatars'
import { useDispatch } from 'react-redux'
import { setAvatars, setPremium } from '../../redux/avatar/slice'
import { Logs } from './Logs/Logs'
import { Withdraw } from './Withdraw/Withdraw'

import styles from './Account.module.scss'

export const Account = () => {
  const { page } = useSelector(selectAccountPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAvatars(avatars))
    dispatch(setPremium(premiumAvatars))
  }, [dispatch])

  return (
    <div className={styles.account}>
      <div className={styles.wrapper}>
        <Tabs className={styles.tabs} />
        <div className={styles.content}>
          {page === 'Favorites' && <Favorites className={styles.favorites} />}
          {page === 'Buy Coins' && <BuyCoins />}
          {page === 'Avatars' && <Avatars />}
          {page === 'Logs' && <Logs />}
          {page === 'Withdraw coins' && <Withdraw />}
        </div>
      </div>
    </div>
  )
}
