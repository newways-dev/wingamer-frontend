import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Language.module.scss'

import icon from '../../assets/images/en.png'
import down from '../../assets/icons/down.svg'

export const languages = [
  { title: 'EN', icon: require('../../assets/images/en.png') },
  { title: 'EN', icon: require('../../assets/images/en.png') },
  { title: 'EN', icon: require('../../assets/images/en.png') },
  { title: 'EN', icon: require('../../assets/images/en.png') },
  { title: 'EN', icon: require('../../assets/images/en.png') },
]

export interface LanguageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Language = ({ className }: LanguageProps) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className={styles.languageContainer}>
      <div className={clsx(styles.language, className)}>
        <div onClick={() => setActive(!active)} className={styles.wrapper}>
          <img src={icon} alt="" />
          <span className={styles.title}>EN</span>
          <img
            className={clsx(styles.arrow, { [styles.active]: active })}
            src={down}
            alt=""
          />
        </div>
      </div>
      {active && (
        <div className={styles.options}>
          {languages.map((language, index) => (
            <div key={index} className={styles.option}>
              <div className={styles.image}>
                <img src={language.icon} alt="" />
              </div>
              <span>{language.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
