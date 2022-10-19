import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button } from '../Button/Button'
import { Coin } from '../Coin/Coin'
import styles from './Card.module.scss'

import starIcon from '../../assets/icons/star.svg'
import img from '../../assets/images/TournamentCard.png'
import { ColorsType } from '../../types/colors'
import { ReactSVG } from 'react-svg'
import clsx from 'clsx'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
  coins?: string
  ends?: string
  blockPuzzle?: string
  button?: 'active' | 'disable'
  star?: boolean
  color: ColorsType
  pvp?: boolean
}

export const Card = ({
  title,
  coins,
  button,
  ends,
  blockPuzzle,
  star,
  color,
  pvp,
}: CardProps) => {
  return (
    <div className={clsx(styles.card, { [styles.pvpCard]: pvp })}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={img} alt="" />
        {star && (
          <div className={styles.star}>
            <ReactSVG
              className={clsx(styles.starIcon, {
                [styles.orange]: color === 'orange',
                [styles.green]: color === 'green',
                [styles.gray]: button === 'disable',
              })}
              src={starIcon}
            />
          </div>
        )}
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
            // color="gray"
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
