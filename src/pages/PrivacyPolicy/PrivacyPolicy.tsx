import styles from './PrivacyPolicy.module.scss'

export const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Privacy Policy WinGamer</p>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>1. Commitment to Privacy</p>
          <p className={styles.paragraphText}>
            WinGamer, sometimes referred to as "WinGamer," "we," "our," or "us"
            in this privacy statement, is committed to protecting the privacy of
            each and every visitor to this website. The terms "you" and "your"
            relate to the user of the site in this privacy statement. The
            WinGamer website is owned and run by COMPANY NAME. The goal of this
            privacy statement is to be open and honest about WinGamer's privacy
            practices and principles. It provides information on the data we
            gather from website visitors based on their use of WinGamer.ru.
            Please read this document completely before entering any information
            on our website.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            2. Data Gathering and Utilization
          </p>
          <p className={styles.paragraphText}>
            On WinGamer.ru you can play free games without having to sign up.
            However, in order to play paid games a user needs to create a
            personal account and top up the account balance. The website
            automatically gathers information from users, including their IP
            address and sensitive data. The website could assess its user base
            using this information. We reserve the right to distribute all of
            your data to third parties for marketing reasons. In order to track
            whether or not users click on the links, we might provide them.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>3. Sign Up Data</p>
          <p className={styles.paragraphText}>
            To finish the registration procedure, you need to submit personal
            information - in particular, your name and email address. Throughout
            the registration process, you will not be prompted for any extra
            information; all registration data is provided voluntarily. The
            information you provide during the signup process allows us to
            contact you.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>4. Transaction Data</p>
          <p className={styles.paragraphText}>
            We gather transaction-related data and display it in the form of a
            transaction log that includes all deposits, payments, and
            withdrawals. The transaction log is accessible through your account
            menu. Please be aware that your data is never used for purposes not
            expressly permitted by our Privacy Policy and Terms of Use.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>5. Championships</p>
          <p className={styles.paragraphText}>
            All registered users on WinGamer.ru can create or participate in
            Championships. In the List of Participants' Results, the top five
            users' scores are displayed.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>6. Disclosure of Data</p>
          <p className={styles.paragraphText}>
            In the following situations, your information may be disclosed to
            third parties:
            <ol type="a">
              <li>
                if you've given us your consent. These third parties can only
                use your data in strict accordance with our instructions and our
                Privacy Policy;
              </li>
              <li>
                If we determine that this information is required for any
                purpose;
              </li>
              <li>
                If we take any action necessary to abide by any applicable law,
                regulation, court process, other any governmental or regulatory
                responsibility;
              </li>
              <li>
                If we take measures to prevent damage or injury to the site's
                property.
              </li>
            </ol>
            Any sensitive data will be kept confidential if the website is
            involved in any type of sale. By providing your personal
            information, you authorize its transfer outside of the country where
            you currently reside.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            7. Data Modification and Removal
          </p>
          <p className={styles.paragraphText}>
            Your game preferences can be changed along with your account
            settings. By emailing us at EMAIL at any time, you can revoke your
            registration on our website. Requests that require technical work,
            endanger others' privacy, prevent users from paying for the service,
            or prevent it from being improved may be turned down by the website.
            We believe that the administrative, technological, and physical
            precautions and protections we have put in place for the
            Registration Data and Transaction Data that we gather are
            sufficient. The services of a PCI DSS Level 1 compliant service
            store Transaction Information.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>8. Cookies</p>
          <p className={styles.paragraphText}>
            Cookies are little files that are saved on your device after you
            visit a website. They include information related to your web
            browser and the particular website you visited. Cookie files are
            stored on your hard drive. Cookies may be used to recognize you and
            add to your history if you visit a particular website again. Cookies
            do not pose a threat to other devices and cannot be used to spread
            viruses or run malware on your computer. You can choose whether or
            not to accept cookies. Most browsers accept cookies by default. To
            disable cookies, you can modify your browser's settings. If you
            choose to accept cookies, you will later have the choice to reject
            them.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>How to Reach Us</p>
          <p className={styles.paragraphText}>
            If you have any questions left, feel free to get in touch with us by
            clicking the ‘Contact Us’ button or sending an email to EMAIL. We
            are glad to help!
          </p>
        </div>
      </div>
    </div>
  )
}
