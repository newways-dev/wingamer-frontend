import { useSelector } from 'react-redux'
import { Avatar } from '../../../components'
import { Card } from '../../../page-components'
import { selectAvatar } from '../../../redux/avatar/selector'
import styles from './Avatars.module.scss'

export const Avatars = () => {
  const { avatars, premium } = useSelector(selectAvatar)

  return (
    <>
      <Card heading="Free avatars">
        <div className={styles.avatars}>
          {avatars.map((avatar, index) => (
            <Avatar image={avatar.image} index={index} key={index} />
          ))}
        </div>
      </Card>
      <Card className={styles.premiun} heading="Premium avatars">
        <div className={styles.avatars}>
          {premium.map((avatar, index) => (
            <Avatar
              image={avatar.image}
              index={index + 1 + avatars.length}
              price={avatar.price}
              key={index}
            />
          ))}
        </div>
      </Card>
    </>
  )
}
