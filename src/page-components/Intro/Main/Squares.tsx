import clsx from 'clsx'
import { Square } from './Square/Square'
import styles from '../Intro.module.scss'

import image from '../../../assets/images/home-banner.png'

// const firstRow = [
//   <Square className={clsx(styles.square, styles.transparent)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
// ]

// const secondRow = [
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
// ]
// const thirdRow = [
//   <Square className={clsx(styles.square, styles.transparent)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
// ]
// const fourthRow = [
//   <Square className={clsx(styles.square, styles.transparent)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.green)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.purple)} />,
// ]
// const fifthRow = [
//   <Square className={clsx(styles.square, styles.transparent)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.orange)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
//   <Square className={clsx(styles.square, styles.blue)} />,
// ]

export const Squares = () => {
  return (
    <>
      <img src={image} alt="" />
      {/* {firstRow.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {secondRow.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {thirdRow.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {fourthRow.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {fifthRow.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </>
  )
}
