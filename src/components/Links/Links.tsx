import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styles from './Links.module.scss'
import { useDispatch } from 'react-redux'
import { setOpen } from '../../redux/menu/slice'
import { selectPage } from '../../redux/page/selector'
import { Pages } from '../../types/pages'
import { setPage } from '../../redux/page/slice'

export interface LinksProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const Links = ({ className }: LinksProps) => {
  const dispatch = useDispatch()
  const { page } = useSelector(selectPage)

  // const { color } = useSelector(selectColor)
  // const { pathname } = useLocation()
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

  const handleClick = (page: Pages) => {
    dispatch(setOpen(false))
    dispatch(setPage(page))
  }

  return (
    <ul className={clsx(styles.links, className)}>
      <Link to="/">
        <li
          onClick={() => handleClick('main')}
          className={clsx(styles.link, { [styles.blue]: page === 'main' })}
        >
          Homepage
        </li>
      </Link>
      <Link to="/coins">
        <li
          onClick={() => handleClick('coins')}
          className={clsx(styles.link, { [styles.orange]: page === 'coins' })}
        >
          Play 4 coins
        </li>
      </Link>
      <Link to="/fun">
        <li
          onClick={() => handleClick('fun')}
          className={clsx(styles.link, { [styles.green]: page === 'fun' })}
        >
          Play 4 fun
        </li>
      </Link>
      <Link to="/pvp">
        <li
          onClick={() => handleClick('pvp')}
          className={clsx(styles.link, { [styles.purple]: page === 'pvp' })}
        >
          PVP
        </li>
      </Link>
      {/* {links.map((link, index) => (
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
      ))} */}
    </ul>
  )
}
