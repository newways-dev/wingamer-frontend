import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { selectAccountPage } from '../redux/account-page/selector'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { page } = useSelector(selectAccountPage)

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      {page !== 'Buy Coins' && page !== 'Logs' && page !== 'Withdraw coins' && (
        <div className={styles.bottomShape} />
      )}
    </div>
  )
}
