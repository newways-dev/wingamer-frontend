import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { useSelector, useDispatch } from 'react-redux'

import { Button, Language, Logo } from '../../components'
import { links } from '../../helpers/links'
import styles from './Header.module.scss'

import search from '../../assets/icons/search.svg'
import { selectColor } from '../../redux/color/selector'
import { setColor } from '../../redux/color/slice'

export const Header = () => {
  const { pathname } = useLocation()
  const { color } = useSelector(selectColor)
  const [active, setActive] = useState<number>(
    pathname === '/'
      ? 0
      : pathname === '/coins'
      ? 1
      : pathname === '/fun'
      ? 2
      : 3
  )
  const dispatch = useDispatch()

  useEffect(() => {
    pathname === '/'
      ? dispatch(setColor('blue'))
      : pathname === '/coins'
      ? dispatch(setColor('orange'))
      : pathname === '/fun'
      ? dispatch(setColor('green'))
      : dispatch(setColor('purple'))
  }, [pathname, dispatch])

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
          <Language />
        </nav>
      </div>
    </header>
  )
}
