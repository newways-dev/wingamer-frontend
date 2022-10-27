import styles from './AboutUs.module.scss'

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.wrapper}>
        <p className={styles.title}>About Us</p>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>1. Platform description</p>
          <p className={styles.paragraphText}>
            WinGamer is an online gaming platform that offers online skill games
            for players of all ages. On the platform you can play free games,
            paid games and participate in Tournaments. We choose games carefully
            to find ones that not only entertain, but also train various skills
            and cognitive abilities of players, namely logic, memory, strategic
            thinking and creativity.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>2. Our Mission</p>
          <p className={styles.paragraphText}>
            We choose only those games that we are 100% sure of, to make sure
            that our users not only have fun but also learn new things.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>3. Our Purpose</p>
          <p className={styles.paragraphText}>
            Our ultimate goal is to make our platform users enjoy, benefit from
            games and want to come back to our platform.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>4. Our Principles</p>
          <p className={styles.paragraphText}>
            <ul>
              <li>- High quality content for users of all ages</li>
              <li>- Fun skill games</li>
              <li>- Ensuring the security of user data</li>
            </ul>
            Register on our website to become part of our WinGamer family!
          </p>
        </div>
      </div>
    </div>
  )
}
