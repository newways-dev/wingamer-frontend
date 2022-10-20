import clsx from 'clsx'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Menu, Modal } from '../components'
import { selectAccountPage } from '../redux/account-page/selector'
import { selectMenu } from '../redux/menu/selector'
import { selectModal } from '../redux/modal/selector'
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
      {page !== 'Buy Coins' && page !== 'Logs' && page !== 'Withdraw coins' && (
        <div className={styles.bottomShape} />
      )}
    </div>
  )
}
