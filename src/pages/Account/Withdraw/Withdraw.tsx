import { Button, Field, Input } from '../../../components'
import { Card } from '../../../page-components'

import styles from './Withdraw.module.scss'

import user from '../../../assets/icons/user.svg'
import email from '../../../assets/icons/email.svg'
import coin from '../../../assets/icons/blue.svg'
import message from '../../../assets/icons/message.svg'

export const Withdraw = () => {
  return (
    <>
      <Card heading="Withdraw Coins">
        <div className={styles.fields}>
          <Field
            className={styles.username}
            placeholder="Username"
            icon={user}
          />
          <Field className={styles.email} placeholder="E-Mail" icon={email} />
          <Field
            className={styles.coins}
            placeholder="11.58"
            addition="coins"
            icon={coin}
          />
          <Field
            className={styles.message}
            placeholder="Message"
            icon={message}
          />
        </div>
        <div className={styles.terms}>
          <Input type="checkbox" />
          <p>
            I have read, understood and agreed to the <span>Terms of Use</span>{' '}
            and the <span>Privacy Policy</span> of the website
          </p>
        </div>
        <Button color="blue" type="action">
          Send Request
        </Button>
      </Card>
    </>
  )
}
