import { useSelector } from 'react-redux'
import { Card, Tabs } from '../../components'
import { Section } from '../../page-components'
import { selectAccountPage } from '../../redux/account-page/selector'
import styles from './Account.module.scss'
import { BuyCoins } from './BuyCoins/BuyCoins'
import { Favorites } from './Favorites/Favorites'

export const Account = () => {
  const { page } = useSelector(selectAccountPage)

  return (
    <div className={styles.account}>
      <div className={styles.wrapper}>
        <Tabs className={styles.tabs} />
        <div className={styles.content}>
          {page === 'Favorites' && <Favorites className={styles.favorites} />}
          {page === 'Buy Coins' && <BuyCoins />}
        </div>
      </div>
    </div>
  )
}
