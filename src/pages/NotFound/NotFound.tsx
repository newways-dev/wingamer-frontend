import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <span>Page Not Found</span>
      <span>404</span>

      <Button color="purple" type="action">
        <Link to="/">Back to Home Page</Link>
      </Button>
    </div>
  )
}
