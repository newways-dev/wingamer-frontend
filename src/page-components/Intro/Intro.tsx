import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { Slides } from '../../components/Slides/Slides'
import { Button, Title } from '../../components'
import { Squares } from './Main/Squares'

import styles from './Intro.module.scss'
import { selectColor } from '../../redux/color/selector'
import { Coin } from './Coin/Coin'
import { Fun } from './Fun/Fun'
import { Pvp } from './Pvp/Pvp'

export const Intro = () => {
  const { pathname } = useLocation()
  const { color } = useSelector(selectColor)

  const page =
    pathname === '/'
      ? 'main'
      : pathname === '/coins'
      ? 'coins'
      : pathname === '/fun'
      ? 'fun'
      : 'pvp'

  const title =
    page === 'main' ? (
      'Play. win. Enjoy.'
    ) : page === 'coins' ? (
      'Play. win. Earn.'
    ) : page === 'fun' ? (
      'Play. win. Have fun.'
    ) : (
      <>
        Compete.
        <br /> Win. Earn.
      </>
    )

  const description =
    pathname === '/' ? (
      'Enjoy your favorite games and compete with other players around the world.'
    ) : pathname === '/coins' ? (
      <span>
        Try our <span className={styles.coinGames}>Coin Games</span> and earn
        with pleasure.
      </span>
    ) : pathname === '/fun' ? (
      <span>
        Try our <span className={styles.funGames}>Fun Games</span> and earn with
        pleasure.
      </span>
    ) : (
      <span>
        Participate in <span className={styles.pvpGames}>Tournaments</span> with
        other players and get prizes!
      </span>
    )

  return (
    <div className={styles.intro}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.info}>
            <Slides color={color} />
            <div className={styles.text}>
              <Title className={styles.title} text={title} />
              <p className={styles.description}>{description}</p>
            </div>
            <Link to={page === 'main' ? '/coins' : '/create-pvp'}>
              <Button color={color} className={styles.button} type="action">
                {page === 'main' ? 'Start now' : 'Create PVP'}
              </Button>
            </Link>
          </div>
          <div className={styles.shapes}>
            {page === 'main' && <Squares />}
            {page === 'coins' && <Coin />}
            {page === 'fun' && <Fun />}
            {page === 'pvp' && <Pvp />}
          </div>
        </div>
      </div>
    </div>
  )
}
