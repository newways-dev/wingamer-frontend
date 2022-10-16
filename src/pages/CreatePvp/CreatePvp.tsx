import { Button, Card, Field } from '../../components'
import styles from './CreatePvp.module.scss'

import search from '../../assets/icons/search.svg'
import date from '../../assets/icons/date.svg'
import coin from '../../assets/icons/coin-fee.svg'

export const CreatePvp = () => {
  const pvpGames = [...new Array(20)].map((_, index) => (
    <Card color="purple" button="active" title="Block Puzzle" key={index} />
  ))

  return (
    <div className={styles.createPvp}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p>
            <span>PVP</span> Creating
          </p>
        </div>
        <div className={styles.firstStep}>
          <p>
            <span>01.</span> Choose a game
          </p>
          <Field
            icon={search}
            className={styles.search}
            placeholder="Find a game"
          />
        </div>
        <div className={styles.cards}>{pvpGames}</div>
        <div className={styles.secondStep}>
          <p>
            <span>02.</span> Set tournament options
          </p>
          <form className={styles.form}>
            <div className={styles.fields}>
              <Field
                className={styles.startField}
                icon={date}
                placeholder="Date of Start"
              />
              <div />
              <Field
                className={styles.endField}
                icon={date}
                placeholder="Date of Ends"
              />
              <div />
              <Field
                className={styles.coinField}
                icon={coin}
                placeholder="Coins"
              />
            </div>
            <Button color="purple" type="action">
              Create PVP
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
