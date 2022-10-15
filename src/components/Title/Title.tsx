import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Title.module.scss'

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  text: string
}

export const Title = ({ text, className }: TitleProps) => {
  return <h1 className={clsx(styles.title, className)}>{text}</h1>
}
