import { Button, Field } from '../../../components'
import { Card } from '../../../page-components'
import styles from './BuyCoins.module.scss'

import coin from '../../../assets/icons/blue.svg'
import convert from '../../../assets/icons/convert.svg'
import { ReactSVG } from 'react-svg'

export const BuyCoins = () => {
  const cardHeading = <p>Buy Coins</p>

  return (
    <div className={styles.buyCoins}>
      <Card className={styles.card} heading={cardHeading}>
        <p className={styles.description}>
          The minimum deposit amount per one transaction is 5 EUR. The maximum
          deposit amount per one transaction is 500 EUR. 10 Coins = 1 EUR
        </p>
        <form action="">
          <div className={styles.fields}>
            <Field icon={coin} placeholder="100" />
            <ReactSVG src={convert} />
            <Field icon={coin} placeholder="10" />
          </div>
          <Button color="blue" type="action">
            Buy Coins
          </Button>
        </form>
      </Card>
    </div>
  )
}
