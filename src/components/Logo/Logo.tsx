import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.win}>WIN</span>
      <span className={styles.gamer}>GAMER</span>
    </div>
  )
}
