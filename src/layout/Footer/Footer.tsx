import { FooterLinks, Logo } from '../../components'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <FooterLinks />
          {/* <ul className={styles.links}>
            <Link to="/contact-us">
              <li className={styles.link}>Contact US</li>
            </Link>
            <Link to="/about-us">
              <li className={styles.link}>About Us</li>
            </Link>
            <Link to="/faq">
              <li className={styles.link}>FAQ</li>
            </Link>
            <Link to="/terms-of-conditions">
              <li className={styles.link}>Terms and Conditions</li>
            </Link>
            <Link to="/privacy-policy">
              <li className={styles.link}>Privacy Policy</li>
            </Link>
          </ul> */}
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
