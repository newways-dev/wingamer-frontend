import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { useSelector, useDispatch } from 'react-redux'

import { Button, Language, Logo, Profile } from '../../components'
import { links } from '../../helpers/links'
import styles from './Header.module.scss'

import { selectColor } from '../../redux/color/selector'
import { setOpen as setMenuOpen } from '../../redux/menu/slice'
import { setColor } from '../../redux/color/slice'
import { setOpen } from '../../redux/search/slice'
import { setOpenModal, setType } from '../../redux/modal/slice'

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

  useEffect(() => {
    pathname === '/'
      ? dispatch(setColor('blue'))
      : pathname === '/coins'
      ? dispatch(setColor('orange'))
      : pathname === '/fun'
      ? dispatch(setColor('green'))
      : dispatch(setColor('purple'))
  }, [pathname, dispatch])

  const handleSearch = () => {
    dispatch(setType('search'))
    dispatch(setOpenModal(true))
  }

  const handleLogin = () => {
    dispatch(setType('login'))
    dispatch(setOpenModal(true))
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.navigation}>
          <Links className={styles.links} />
          <ReactSVG
            onClick={() => handleSearch()}
            className={styles.search}
            src={search}
          />
          <button
            className={clsx(styles.login, {
              [styles.loginBlue]: color === 'blue',
              [styles.loginOrange]: color === 'orange',
              [styles.loginGreen]: color === 'green',
              [styles.loginPurple]: color === 'purple',
            })}
            onClick={() => handleLogin()}
          >
            Login
          </button>
          {/* <Link to="/account">
            <Profile userName="DenisVykes" coins="11.58 coins" image={image} />
          </Link> */}
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
