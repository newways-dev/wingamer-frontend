import { Card } from '../../components'
import { Slides } from '../../components/Slides/Slides'
import { Intro, Section } from '../../page-components'
import styles from './Home.module.scss'

export const Home = () => {
  const tournament = [...new Array(4)].map((_, index) => (
    <Card
      color="purple"
      blockPuzzle="Block Puzzle"
      coins="1,48 COIns"
      button="active"
      ends="Ends in 2 days"
      title="Fun Block Puzzle Tournament by Shadik"
      key={index}
    />
  ))

  const coinGames = [...new Array(15)].map((_, index) => (
    <Card
      color="orange"
      coins="1,48 COIns"
      button="active"
      title="Block Puzzle"
      key={index}
    />
  ))

  const funGames = [...new Array(15)].map((_, index) => (
    <Card color="green" button="active" title="Block Puzzle" key={index} />
  ))

  return (
    <>
      <Intro />
      <Section heading="pvp" className={styles.pvp}>
        {tournament}
        <div className={styles.slider}>
          <Slides color="purple" />
          <a href="/" className={styles.seeMore}>
            SEE MORE
          </a>
        </div>
      </Section>
      <Section heading="coin" className={styles.coin}>
        {coinGames}
      </Section>
      <Section heading="fun" className={styles.fun}>
        {funGames}
      </Section>
    </>
  )
}