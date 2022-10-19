import { Field } from '../../../components'
import { Card } from '../../../page-components'
import { logs } from '../../../helpers/logs'
import styles from './Logs.module.scss'

import date from '../../../assets/icons/date.svg'
import clsx from 'clsx'

export const Logs = () => {
  const heading = (
    <div className={styles.heading}>
      <p>Transactions Logs</p>
      <div className={styles.fields}>
        <Field className={styles.field} icon={date} placeholder="Date From" />
        <Field className={styles.field} icon={date} placeholder="Date To" />
      </div>
    </div>
  )

  return (
    <>
      <Card className={styles.card} heading={heading}>
        <ul className={styles.logs}>
          {logs.map((log, index) => (
            <li key={index} className={styles.log}>
              <span className={styles.time}>{log.time}</span>
              <div />
              <span className={styles.action}>{log.action}</span>
              <span
                className={clsx(styles.amount, {
                  [styles.red]: log.amount.charAt(0) === '-',
                  [styles.green]: log.amount.charAt(0) === '+',
                })}
              >
                {log.amount}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  )
}
