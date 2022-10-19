import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { setOpen } from '../../redux/search/slice'
import { ReactSVG } from 'react-svg'
import { Field } from '../Field/Field'
import styles from './Search.module.scss'

import close from '../../assets/icons/close.svg'
import search from '../../assets/icons/search.svg'
import { Button } from '../Button/Button'

export interface ModalSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search = ({ className }: ModalSearchProps) => {
  const dispatch = useDispatch()

  return (
    <div className={clsx(styles.search, className)}>
      <ReactSVG
        className={styles.close}
        onClick={() => dispatch(setOpen(false))}
        src={close}
      />
      <span className={styles.title}>search</span>
      <div className={styles.center}>
        <Field
          className={styles.input}
          icon={search}
          placeholder="find a game"
        />
        <Button type="action" color="blue">
          Search
        </Button>
      </div>
    </div>
  )
}
