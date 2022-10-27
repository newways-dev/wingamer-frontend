import { Header } from '../../layout/Header/Header'
import { Field } from '../Field/Field'
import { Links } from '../Links/Links'
import styles from './Menu.module.scss'

import search from '../../assets/icons/search.svg'
import { Button } from '../Button/Button'
import { Language } from '../Language/Language'
import { FooterLinks } from '../FooterLinks/FooterLinks'

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Header />
      <div className={styles.wrapper}>
        <Field
          className={styles.search}
          icon={search}
          placeholder="find a game"
        />
        <Links className={styles.links} />
        <FooterLinks className={styles.footerLinks} />
        <Button color="blue" type="action">
          search
        </Button>
        <Language className={styles.language} />
      </div>
    </div>
  )
}
