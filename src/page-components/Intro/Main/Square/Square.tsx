import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Square.module.scss'

export interface SquareProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Square = ({ className }: SquareProps) => {
  return <div className={clsx(styles.square, className)} />
}
