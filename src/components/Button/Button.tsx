import clsx from 'clsx'
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ColorsType } from '../../types/colors'
import styles from './Button.module.scss'

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  type: 'action' | 'rounded'
  disabled?: boolean
  color?: ColorsType
}

export const Button = ({
  children,
  type,
  className,
  disabled,
  color,
  ...props
}: ButtonProps) => {
  switch (type) {
    case 'rounded':
      return (
        <button
          disabled={disabled}
          className={clsx(styles.button, className, styles.rounded, {
            [styles.blue]: color === 'blue',
            [styles.orange]: color === 'orange',
            [styles.purple]: color === 'purple',
            [styles.green]: color === 'green',
            [styles.disabled]: disabled,
          })}
          {...props}
        >
          {children}
        </button>
      )
    case 'action':
      return (
        <button
          className={clsx(styles.button, className, styles.action)}
          {...props}
        >
          {children}
        </button>
      )
    default:
      return <></>
  }
}
