import { ReactNode } from 'react'
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
  icon?: string
  addition?: ReactNode
  type?: 'text' | 'email' | 'password'
}

export const Field = ({
  addition,
  icon,
  placeholder,
  type,
  className,
}: SearchProps) => {
  return (
    <div className={clsx(styles.field, className)}>
      {icon && <ReactSVG className={styles.icon} src={icon} />}
      <Input type={type} className={styles.input} placeholder={placeholder} />
      <span>{addition}</span>
    </div>
  )
}
