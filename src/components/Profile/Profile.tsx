import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Profile.module.scss'

export interface ProfileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string
  userName: string
  coins: string
}

export const Profile = ({
  image,
  userName,
  coins,
  className,
}: ProfileProps) => {
  return (
    <div className={clsx(styles.profile, className)}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.info}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.coins}>{coins}</span>
      </div>
    </div>
  )
}
