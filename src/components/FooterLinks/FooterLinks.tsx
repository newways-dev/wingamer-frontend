import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './FooterLinks.module.scss'
import { setOpen } from '../../redux/menu/slice'
import { useDispatch } from 'react-redux'

export interface FooterLinksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterLinks = ({ className }: FooterLinksProps) => {
  const dispatch = useDispatch()

  return (
    <ul className={clsx(styles.links, className)}>
      <Link onClick={() => dispatch(setOpen(false))} to="/contact-us">
        <li className={styles.link}>Contact US</li>
      </Link>
      <Link onClick={() => dispatch(setOpen(false))} to="/about-us">
        <li className={styles.link}>About Us</li>
      </Link>
      <Link onClick={() => dispatch(setOpen(false))} to="/faq">
        <li className={styles.link}>FAQ</li>
      </Link>
      <Link onClick={() => dispatch(setOpen(false))} to="/terms-of-conditions">
        <li className={styles.link}>Terms and Conditions</li>
      </Link>
      <Link onClick={() => dispatch(setOpen(false))} to="/privacy-policy">
        <li className={styles.link}>Privacy Policy</li>
      </Link>
    </ul>
  )
}
