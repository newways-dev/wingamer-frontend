import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { useState, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import { Field } from '../Field/Field'
import styles from './Modal.module.scss'

import close from '../../assets/icons/close.svg'
import search from '../../assets/icons/search.svg'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'
import { selectModal } from '../../redux/modal/selector'
import { setOpenModal, setType } from '../../redux/modal/slice'
import { Card } from '../../page-components'

import show from '../../assets/icons/preview-password.svg'
import email from '../../assets/icons/email.svg'
import user from '../../assets/icons/user.svg'
import lock from '../../assets/icons/lock.svg'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Modal = ({ className }: ModalProps) => {
  const { typeModal } = useSelector(selectModal)
  const dispatch = useDispatch()

  const [hidePassword, setHidePassword] = useState<boolean>(true)

  switch (typeModal) {
    case 'search':
      return (
        <div className={clsx(styles.search, className)}>
          <ReactSVG
            className={styles.close}
            onClick={() => dispatch(setOpenModal(false))}
            src={close}
          />
          <span className={styles.title}>search</span>
          <div className={styles.center}>
            <Field
              className={styles.input}
              icon={search}
              placeholder="find a game"
            />
            <Button type="action" color="blue">
              Search
            </Button>
          </div>
        </div>
      )
    case 'login':
      return (
        <div className={clsx(styles.login, className)}>
          <Card className={styles.card} heading="LOG IN">
            <ReactSVG
              className={styles.close}
              onClick={() => dispatch(setOpenModal(false))}
              src={close}
            />
            <div className={styles.fields}>
              <Field
                placeholder="email"
                icon={email}
                className={styles.field}
              />
              <Field
                placeholder="password"
                type={hidePassword ? 'password' : 'text'}
                icon={lock}
                className={styles.field}
                addition={
                  <ReactSVG
                    style={{ cursor: 'pointer' }}
                    onClick={() => setHidePassword(!hidePassword)}
                    src={show}
                  />
                }
              />
              <p
                onClick={() => dispatch(setType('recovery'))}
                className={styles.forgotPassword}
              >
                Forgot password?
              </p>
              <Button type="action" color="blue">
                LOG IN
              </Button>
              <div className={styles.noAccount}>
                <p>Don't have an account yet?</p>
                <p
                  className={styles.signinLink}
                  onClick={() => dispatch(setType('signin'))}
                >
                  SIGN IN
                </p>
              </div>
            </div>
          </Card>
        </div>
      )
    case 'signin':
      return (
        <div className={clsx(styles.signin, className)}>
          <Card className={styles.card} heading="SIGN IN">
            <ReactSVG
              className={styles.close}
              onClick={() => dispatch(setOpenModal(false))}
              src={close}
            />
            <div className={styles.fields}>
              <Field
                placeholder="Create a username"
                icon={user}
                className={styles.field}
              />
              <Field
                placeholder="email"
                icon={email}
                className={styles.field}
              />
              <Field
                placeholder="password"
                type={hidePassword ? 'password' : 'text'}
                icon={lock}
                className={styles.field}
                addition={
                  <ReactSVG
                    style={{ cursor: 'pointer' }}
                    onClick={() => setHidePassword(!hidePassword)}
                    src={show}
                  />
                }
              />
              <Field
                placeholder="Repeat password"
                type={hidePassword ? 'password' : 'text'}
                icon={lock}
                className={styles.field}
                addition={
                  <ReactSVG
                    style={{ cursor: 'pointer' }}
                    onClick={() => setHidePassword(!hidePassword)}
                    src={show}
                  />
                }
              />
              <Button type="action" color="blue">
                SIGN IN
              </Button>
              <div className={styles.haveAccount}>
                <p>Already have an account?</p>
                <p
                  className={styles.signinLink}
                  onClick={() => dispatch(setType('login'))}
                >
                  LOG IN
                </p>
              </div>
            </div>
          </Card>
        </div>
      )
    case 'recovery':
      return (
        <div className={clsx(styles.recovery, className)}>
          <Card className={styles.card} heading="Password Recovery">
            <ReactSVG
              className={styles.close}
              onClick={() => dispatch(setOpenModal(false))}
              src={close}
            />
            <div className={styles.fields}>
              <Field
                placeholder="email"
                icon={email}
                className={styles.field}
              />
              <Button type="action" color="blue">
                Send new password
              </Button>
            </div>
          </Card>
        </div>
      )

    default:
      return <></>
  }
}
