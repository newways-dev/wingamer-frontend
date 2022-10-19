import clsx from 'clsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from '../../helpers/links'
import { selectColor } from '../../redux/color/selector'
import styles from './Links.module.scss'
import { useDispatch } from 'react-redux'
import { setOpen } from '../../redux/menu/slice'

export interface LinksProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const Links = ({ className }: LinksProps) => {
  const dispatch = useDispatch()
  const { color } = useSelector(selectColor)
  const { pathname } = useLocation()
  const [active, setActive] = useState<number | null>(
    pathname === '/'
      ? 0
      : pathname === '/coins'
      ? 1
      : pathname === '/fun'
      ? 2
      : pathname === '/pvp'
      ? 3
      : null
  )

  const handleClick = (index: number) => {
    setActive(index)
    dispatch(setOpen(false))
  }

  return (
    <ul className={clsx(styles.links, className)}>
      {links.map((link, index) => (
        <Link key={index} to={link.link}>
          <li
            onClick={() => handleClick(index)}
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
    </ul>
  )
}
