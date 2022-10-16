import { Card } from '../../components'
import { Intro, Section } from '../../page-components'

export const Fun = () => {
  const funGames = [...new Array(25)].map((_, index) => (
    <Card
      color="green"
      button="active"
      title="Block Puzzle"
      star={true}
      key={index}
    />
  ))

  return (
    <>
      <Intro />
      <Section link={false} heading="fun">
        {funGames}
      </Section>
    </>
  )
}
