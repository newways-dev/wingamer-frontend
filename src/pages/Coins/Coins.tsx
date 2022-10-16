import { Card } from '../../components'
import { Intro, Section } from '../../page-components'

export const Coins = () => {
  const coinGames = [...new Array(25)].map((_, index) => (
    <Card
      color="orange"
      coins="1,48 COIns"
      button="active"
      title="Block Puzzle"
      star={true}
      key={index}
    />
  ))

  return (
    <>
      <Intro />
      <Section link={false} heading="coin">
        {coinGames}
      </Section>
    </>
  )
}
