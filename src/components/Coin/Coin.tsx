import { ReactSVG } from 'react-svg'

import purple from '../../assets/icons/purple.svg'
import orange from '../../assets/icons/orange.svg'
import { ColorsType } from '../../types/colors'

export interface CoinProps {
  color: ColorsType
}

export const Coin = ({ color }: CoinProps) => {
  switch (color) {
    case 'orange':
      return (
        <>
          <ReactSVG src={orange} />
        </>
      )
    case 'purple':
      return (
        <>
          <ReactSVG src={purple} />
        </>
      )
    case 'green':
      return <></>
    default:
      return <></>
  }
}
