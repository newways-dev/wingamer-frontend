import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import { useSelector, useDispatch } from 'react-redux'

import { Language, Logo, Profile } from '../../components'
import styles from './Header.module.scss'

import { setOpen as setMenuOpen } from '../../redux/menu/slice'
import { setColor } from '../../redux/color/slice'
import { setOpenModal, setType } from '../../redux/modal/slice'

import image from '../../assets/images/profile-image.png'
import search from '../../assets/icons/search.svg'
import menu from '../../assets/icons/menu.svg'
import { selectMenu } from '../../redux/menu/selector'
import { Links } from '../../components/Links/Links'

export const Header = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
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
