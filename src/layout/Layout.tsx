import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation()

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      {pathname !== '/account' && <div className={styles.bottomShape} />}
    </div>
  )
}
