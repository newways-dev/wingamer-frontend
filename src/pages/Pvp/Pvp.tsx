import { Card } from '../../components'
import { Intro, Section } from '../../page-components'

export const Pvp = () => {
  const pvpGames = [...new Array(16)].map((_, index) => (
    <Card
      pvp
      color="purple"
      blockPuzzle="Block Puzzle"
      coins="1,48 COIns"
      button="active"
      ends="Ends in 2 days"
      title="Fun Block Puzzle Tournament by Shadik"
      key={index}
    />
  ))

  return (
    <>
      <Intro />
      <Section link={false} heading="pvp">
        {pvpGames}
      </Section>
    </>
  )
}
