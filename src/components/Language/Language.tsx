import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Language.module.scss'

import icon from '../../assets/images/en.png'
import down from '../../assets/icons/down.svg'
import { LanguageType } from '../../types/language'

export interface LanguageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  languages: LanguageType[]
}

export const Language = ({ languages, className }: LanguageProps) => {
  return (
    <div className={clsx(styles.language, className)}>
      <div className={styles.wrapper}>
        <img src={icon} alt="" />
        <span className={styles.title}>EN</span>
        <img src={down} alt="" />
      </div>
    </div>
  )
}
