import clsx from 'clsx'
import { Button, Title } from '../../../components'
import { Slides } from '../../../components/Slides/Slides'
import styles from './Main.module.scss'
import { Square } from './Square/Square'

export const Main = () => {
  const firstRow = [
    <Square className={clsx(styles.square, styles.transparent)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
  ]
  const secondRow = [
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
  ]
  const thirdRow = [
    <Square className={clsx(styles.square, styles.transparent)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
  ]
  const fourthRow = [
    <Square className={clsx(styles.square, styles.transparent)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.green)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.purple)} />,
  ]
  const fifthRow = [
    <Square className={clsx(styles.square, styles.transparent)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.orange)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
    <Square className={clsx(styles.square, styles.blue)} />,
  ]

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <Slides color="blue" />
        <div className={styles.text}>
          <Title className={styles.title} text="Play. win. Enjoy." />
          <p className={styles.description}>
            Enjoy your favorite games and compete with other players around the
            world.
          </p>
        </div>
        <Button className={styles.button} type="action">
          Start now
        </Button>
      </div>
      <div className={styles.squares}>
        {firstRow}
        {secondRow}
        {thirdRow}
        {fourthRow}
        {fifthRow}
      </div>
    </div>
  )
}
