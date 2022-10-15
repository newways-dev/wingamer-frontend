import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { HeadingType } from '../../types/heading'
import styles from './Heading.module.scss'

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: HeadingType
}

export const Heading = ({ type, className }: HeadingProps) => {
  switch (type) {
    case 'pvp':
      return (
        <div className={clsx(styles.heading, className)}>
          <p className={clsx(styles.title, { [styles.pvp]: type === 'pvp' })}>
            PVP
          </p>
          <p className={styles.titleDesc}>Tournaments</p>
        </div>
      )
    case 'coin':
      return (
        <div className={clsx(styles.heading, className)}>
          <p className={clsx(styles.title, { [styles.coin]: type === 'coin' })}>
            COIN
          </p>
          <p className={styles.titleDesc}>Games</p>
        </div>
      )
    case 'fun':
      return (
        <div className={clsx(styles.heading, className)}>
          <p className={clsx(styles.title, { [styles.fun]: type === 'fun' })}>
            FUN
          </p>
          <p className={styles.titleDesc}>Games</p>
        </div>
      )

    default:
      return <></>
  }
}
