import { Logo } from '../../components'
import styles from './Footer.module.scss'

export const Footer = () => {
  const links = ['Contact US', 'FAQ', 'Terms and Conditions', 'Privacy Policy']

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <ul className={styles.links}>
            {links.map((link, index) => (
              <li key={index} className={styles.link}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contacts}>
          <span>8 (800) 123-45-67</span>
          <span>info@wingamer.ru</span>
        </div>
        <div className={styles.rights}>
          <span>
            WIN GAMER. Certified online gaming provider. License №06121996
          </span>
          <span>© Copyright 2022 WIN GAMER. All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
