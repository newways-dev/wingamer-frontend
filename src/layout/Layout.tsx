import clsx from 'clsx'
import { useEffect, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Menu, Modal } from '../components'
import { selectAccountPage } from '../redux/account-page/selector'
import { selectMenu } from '../redux/menu/selector'
import { selectModal } from '../redux/modal/selector'
import { setPage } from '../redux/page/slice'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { page } = useSelector(selectAccountPage)
  const { openModal } = useSelector(selectModal)
  const { openMenu } = useSelector(selectMenu)

  const { pathname } = useLocation()
  const dispatch = useDispatch()

  console.log(pathname)

  useEffect(() => {
    const currentPage =
      pathname === '/'
        ? 'main'
        : pathname === '/coins'
        ? 'coins'
        : pathname === '/fun'
        ? 'fun'
        : pathname === '/pvp'
        ? 'pvp'
        : ''

    dispatch(setPage(currentPage))
  }, [dispatch, pathname])

  return (
    <div
      className={clsx(
        styles.layout,
        { [styles.openModal]: openModal },
        { [styles.openMenu]: openMenu }
      )}
    >
      <Header />
      {openMenu && <Menu />}
      {openModal && <Modal className={styles.modal} />}
      <main className={styles.main}>{children}</main>
      <Footer />
      {page !== 'Buy Coins' &&
        page !== 'Transaction logs' &&
        page !== 'Withdraw coins' && <div className={styles.bottomShape} />}
    </div>
  )
}
