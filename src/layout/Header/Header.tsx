import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { useSelector, useDispatch } from 'react-redux'

import { Button, Language, Logo, Profile } from '../../components'
import { links } from '../../helpers/links'
import styles from './Header.module.scss'

import { selectColor } from '../../redux/color/selector'
import { setOpen as setMenuOpen } from '../../redux/menu/slice'
import { setColor } from '../../redux/color/slice'
import { setOpen } from '../../redux/search/slice'

import image from '../../assets/images/profile-image.png'
import search from '../../assets/icons/search.svg'
import menu from '../../assets/icons/menu.svg'
import { selectMenu } from '../../redux/menu/selector'
import { Links } from '../../components/Links/Links'

export const Header = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { color } = useSelector(selectColor)
  const { openMenu } = useSelector(selectMenu)

  // const [active, setActive] = useState<number | null>(
  //   pathname === '/'
  //     ? 0
  //     : pathname === '/coins'
  //     ? 1
  //     : pathname === '/fun'
  //     ? 2
  //     : pathname === '/pvp'
  //     ? 3
  //     : null
  // )

  useEffect(() => {
    pathname === '/'
      ? dispatch(setColor('blue'))
      : pathname === '/coins'
      ? dispatch(setColor('orange'))
      : pathname === '/fun'
      ? dispatch(setColor('green'))
      : pathname === '/pvp'
      ? dispatch(setColor('purple'))
      : dispatch(setColor('white'))
  }, [pathname, dispatch])

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.navigation}>
          <Links className={styles.links} />
          <ReactSVG
            onClick={() => dispatch(setOpen(true))}
            className={styles.search}
            src={search}
          />
          {/* <Button color={color} className={styles.login} type="login">
            Login
          </Button> */}
          <Link to="/account">
            <Profile userName="DenisVykes" coins="11.58 coins" image={image} />
          </Link>
          <Language className={styles.language} />
          <ReactSVG
            onClick={() => dispatch(setMenuOpen(!openMenu))}
            src={menu}
            className={styles.menuIcon}
          />
        </nav>
      </div>
    </header>
  )
}
