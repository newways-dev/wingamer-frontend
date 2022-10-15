import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button } from '../Button/Button'
import { Coin } from '../Coin/Coin'
import styles from './Card.module.scss'

import img from '../../assets/images/TournamentCard.png'
import { ColorsType } from '../../types/colors'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
  coins?: string
  ends?: string
  blockPuzzle?: string
  button?: 'active' | 'disable'
  color: ColorsType
}

export const Card = ({
  title,
  coins,
  button,
  ends,
  blockPuzzle,
  color,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img} alt="" />
      </div>
      <div className={styles.wrapper}>
        {blockPuzzle && ends && (
          <div className={styles.top}>
            <span className={styles.blockPuzzle}>{blockPuzzle}</span>
            <span className={styles.ends}>{ends}</span>
          </div>
        )}
        <p className={styles.title}>{title}</p>
        <div className={styles.bottom}>
          {coins && (
            <div className={styles.price}>
              <Coin color={color} />
              <span className={styles.coins}>{coins}</span>
            </div>
          )}
          <Button
            color={color}
            className={styles.button}
            disabled={button === 'disable'}
            type="rounded"
          >
            PLAY
          </Button>
        </div>
      </div>
    </div>
  )
}
