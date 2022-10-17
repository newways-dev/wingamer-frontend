import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { Button, Field } from '../../../components'
import { Card } from '../../../page-components'
import styles from './BuyCoins.module.scss'

import coin from '../../../assets/icons/blue.svg'
import money from '../../../assets/icons/money.svg'
import convert from '../../../assets/icons/convert.svg'

export const BuyCoins = () => {
  const [reverse, setReverse] = useState<boolean>(false)
  const cardHeading = <p>Buy Coins</p>

  return (
    <div className={styles.buyCoins}>
      <Card className={styles.card} heading={cardHeading}>
        <p className={styles.description}>
          The minimum deposit amount per one transaction is 5 EUR. The maximum
          deposit amount per one transaction is 500 EUR. 10 Coins = 1 EUR
        </p>
        <form className={styles.form}>
          <div className={styles.fields}>
            {!reverse && (
              <>
                <Field
                  className={styles.field}
                  icon={coin}
                  placeholder="100"
                  addition="Coins"
                />
                <ReactSVG onClick={() => setReverse(!reverse)} src={convert} />
                <Field
                  className={styles.field}
                  icon={money}
                  placeholder="10"
                  addition="EUR"
                />
              </>
            )}
            {reverse && (
              <>
                <Field
                  className={styles.field}
                  icon={money}
                  placeholder="10"
                  addition="EUR"
                />
                <ReactSVG onClick={() => setReverse(!reverse)} src={convert} />
                <Field
                  className={styles.field}
                  icon={coin}
                  placeholder="100"
                  addition="Coins"
                />
              </>
            )}
          </div>
          <Button color="blue" type="action">
            Buy Coins
          </Button>
        </form>
      </Card>
    </div>
  )
}
