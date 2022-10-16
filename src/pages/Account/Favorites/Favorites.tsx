import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Card } from '../../../components'
import { Section } from '../../../page-components'

export interface FavoritesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Favorites = ({ className }: FavoritesProps) => {
  const coinGames = [...new Array(15)].map((_, index) => (
    <Card
      color="orange"
      coins="1,48 COIns"
      button="active"
      title="Block Puzzle"
      star={true}
      key={index}
    />
  ))

  const funGames = [...new Array(15)].map((_, index) => (
    <Card
      color="green"
      button="active"
      title="Block Puzzle"
      star={true}
      key={index}
    />
  ))

  return (
    <div className={className}>
      <Section link={false} heading="coin">
        {coinGames}
      </Section>
      <Section link={false} heading="fun">
        {funGames}
      </Section>
    </div>
  )
}
