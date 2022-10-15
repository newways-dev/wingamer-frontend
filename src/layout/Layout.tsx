import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <div className={styles.bottomShape} />
    </div>
  )
}
