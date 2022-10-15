import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { Button, Language, Logo } from '../../components'
import { languages } from '../../helpers/languages'
import { links } from '../../helpers/links'
import styles from './Header.module.scss'

import search from '../../assets/icons/search.svg'

export const Header = () => {
  const [active, setActive] = useState<number>(0)
  const { pathname } = useLocation()

  const color =
    pathname === '/'
      ? 'blue'
      : pathname === '/coins'
      ? 'orange'
      : pathname === '/fun'
      ? 'green'
      : 'purple'

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.navigation}>
          <ul className={styles.links}>
            {links.map((link, index) => (
              <Link key={index} to={link.link}>
                <li
                  onClick={() => setActive(index)}
                  className={clsx(styles.link, {
                    [styles.blue]: active === index && color === 'blue',
                    [styles.orange]: active === index && color === 'orange',
                    [styles.green]: active === index && color === 'green',
                    [styles.purple]: active === index && color === 'purple',
                  })}
                >
                  {link.title}
                </li>
              </Link>
            ))}
            <ReactSVG className={styles.search} src={search} />
          </ul>
          <Button color={color} className={styles.login} type="rounded">
            Login
          </Button>
          <Language languages={languages} />
        </nav>
      </div>
    </header>
  )
}
