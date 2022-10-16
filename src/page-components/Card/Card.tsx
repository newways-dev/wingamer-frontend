import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string | JSX.Element
  children: ReactNode
}

export const Card = ({ heading, children, className }: CardProps) => {
  return (
    <div className={clsx(styles.accountCard, className)}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
