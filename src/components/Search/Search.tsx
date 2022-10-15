import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Search.module.scss'

import close from '../../assets/icons/close.svg'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

export const Search = () => {
  const [value, setValue] = useState<string | number>('')

  return (
    <div className={styles.search}>
      <ReactSVG src={close} />
      <span>SEARCH</span>
      <Input />
      <Button type="action">Search</Button>
    </div>
  )
}
