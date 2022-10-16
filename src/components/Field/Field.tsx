import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Input } from '../Input/Input'
import styles from './Field.module.scss'

export interface SearchProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
  icon: string
}

export const Field = ({ icon, placeholder, className }: SearchProps) => {
  return (
    <div className={clsx(styles.field, className)}>
      <ReactSVG className={styles.icon} src={icon} />
      <Input className={styles.input} placeholder={placeholder} />
    </div>
  )
}
