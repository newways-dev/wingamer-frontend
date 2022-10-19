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
  type: 'action' | 'rounded' | 'login'
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
            [styles.purple]: color === 'purple',
            [styles.gray]: color === 'gray',
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
          className={clsx(styles.button, className, styles.action, {
            [styles.actionBlue]: color === 'blue',
            [styles.actionOrange]: color === 'orange',
            [styles.actionPurple]: color === 'purple',
            [styles.actionGreen]: color === 'green',
            [styles.disabled]: disabled,
          })}
          {...props}
        >
          {children}
        </button>
      )
    case 'login':
      return (
        <button
          className={clsx(styles.login, className, {
            [styles.loginBlue]: color === 'blue',
            [styles.loginOrange]: color === 'orange',
            [styles.loginPurple]: color === 'purple',
            [styles.loginGreen]: color === 'green',
          })}
          {...props}
        >
          {children}
        </button>
      )
    default:
      return <></>
  }
}
