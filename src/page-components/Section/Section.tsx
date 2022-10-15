import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Heading } from '../../components'
import styles from './Section.module.scss'

export interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: 'pvp' | 'coin' | 'fun'
}

export const Section = ({ className, heading, children }: SectionProps) => {
  return (
    <section className={clsx(styles.section, className)}>
      <Heading type={heading} />
      <div className={styles.wrapper}>
        <div className={styles.cards}>{children}</div>
      </div>
      <div className={styles.seeMore}>
        <a href="/">SEE MORE</a>
      </div>
    </section>
  )
}
