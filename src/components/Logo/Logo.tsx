import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectColor } from '../../redux/color/selector'
import styles from './Logo.module.scss'

export const Logo = () => {
  const { color } = useSelector(selectColor)

  return (
    <Link to="/">
      <div className={styles.logo}>
        <span
          className={clsx(styles.win, {
            [styles.blue]: color === 'blue',
            [styles.orange]: color === 'orange',
            [styles.green]: color === 'green',
            [styles.purple]: color === 'purple',
          })}
        >
          WIN
        </span>
        <span className={styles.gamer}>GAMER</span>
      </div>
    </Link>
  )
}
