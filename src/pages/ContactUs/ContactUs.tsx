import { Button, Field } from '../../components'
import styles from './ContactUs.module.scss'

export const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Contact us</p>
        <form className={styles.form}>
          <Field type="text" className={styles.field} placeholder="Name" />
          <Field type="email" className={styles.field} placeholder="Email" />
          <Field
            type="text"
            className={styles.field}
            placeholder="Phone Number"
          />
          <Field type="text" className={styles.field} placeholder="Subject" />
          <textarea className={styles.textarea} placeholder="Write From Here" />
          <Button type="action" color="blue">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
