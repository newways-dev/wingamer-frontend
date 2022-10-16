import clsx from 'clsx'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ColorsType } from '../../types/colors'
import styles from './Slides.module.scss'

export interface SlidesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: ColorsType
}

export const Slides = ({ color, className }: SlidesProps) => {
  const [active, setActive] = useState(0)

  const slides = [...new Array(5)].map((_, index) => (
    <div
      key={index}
      onClick={() => setActive(index)}
      className={clsx(styles.slide, {
        [styles.blue]: active === index && color === 'blue',
        [styles.orange]: active === index && color === 'orange',
        [styles.purple]: active === index && color === 'purple',
        [styles.green]: active === index && color === 'green',
      })}
    />
  ))

  return <div className={clsx(styles.slides, className)}>{slides}</div>
}
