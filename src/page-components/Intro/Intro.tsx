import styles from './Intro.module.scss'
import { Main } from './Main/Main'

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.wrapper}>
        <Main />
      </div>
    </div>
  )
}
