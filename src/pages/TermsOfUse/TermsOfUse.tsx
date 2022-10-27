import styles from './TermsOfUse.module.scss'

export const TermsOfUse = () => {
  return (
    <div className={styles.tof}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Terms of Use</p>
        <p className={styles.description}>
          Welcome to WinGamer! The website that we (COMPANY– hereafter referred
          to as"WinGamer," "we," "us," or "our") operate is located at
          https://wingamer.ru. The WinGamer website's Terms of Use are described
          in this document. In these Terms of Use, "user," "you," and "your"
          refer to the person accessing the website. By using the website you
          confirm that you have read, understood, and accepted our Terms of Use.
        </p>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>1. General</p>
          <p className={styles.paragraphText}>
            The WinGamer website's Terms of Use are owned and managed by
            COMPANY. This Agreement and your use of the website are subject to
            the Russian legislation. Online skill games are available on the
            website WinGamer. The Service refers to all pertinent products on
            this website collectively. The website retains all ownership rights
            to the services it provides.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            2. Consent to the Terms of Use
          </p>
          <p className={styles.paragraphText}>
            The WinGamer platform is open to users of all ages. However, only
            users who are at least 18 years old can withdraw money and ask for a
            refund. If you do not agree to the current Terms of Use, you should
            not access this website.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>3. Privacy</p>
          <p className={styles.paragraphText}>
            Our website's privacy policy outlines how your personal information
            used on the site will be used, as well as your responsibility for
            maintaining your confidentiality. You give your consent to
            communication with you via electronic messaging, and you accept the
            terms of Service. Additionally, you acknowledge that you have access
            to the software required to obtain electronic data from the Services
            in accordance with your online
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>4. Website Usage</p>
          <p className={styles.paragraphText}>
            It has been established that the Services' "as is" foundation is the
            ability to access games. The website owns all original content. You
            acknowledge and agree that the accuracy, reliability, and usefulness
            of any data you supply are solely your responsibility. Please note
            that you can only use the website and the provided services if your
            computer satisfies the website's specifications. The WinGamer
            website keeps the authority to modify, update, and remove games and
            content from the system. We regularly perform technical tests on our
            website.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>5. Registration</p>
          <p className={styles.paragraphText}>
            To access the WinGamer website's paid services, you must first
            create an account there, which requires you to provide personal
            information. This personal data is processed in accordance with our
            Privacy Policy. The user is required to keep their username and
            password confidential and not reveal them to third parties. Your
            account must not be used by anyone else. If someone else gets access
            to your account, you are responsible for all actions that are taken
            there. You can deactivate your personal account by sending an email
            to EMAIL.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>6. Coins</p>
          <p className={styles.paragraphText}>
            Coins serve as the WinGamer website's inner virtual currency. Coins
            can be used to purchase extra features or to play paid games on the
            site. They can be purchased through your account menu and are not
            transferable to other players. Clicking the "Buy Coins" button or
            the Coin at the top of the page allows you to top up your Coins
            balance. After filling out the amount of Coins and confirming the
            website's Terms of Use, the user should move on to the payment page.
            Coins can only be used on our platform; they cannot be used to make
            purchases from other websites or physical stores.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>7. Coins Withdrawal </p>
          <p className={styles.paragraphText}>
            Only Coins obtained through online tournaments are withdrawable. In
            order to withdraw Coins the user needs to be over the age of 18. You
            can withdraw Coins by going to your account and clicking the
            "Withdraw Coins" option. Press the "Submit" button after entering
            all the necessary data. Afterward, when the request is fulfilled,
            the Coins will be deducted from your account. After that,
            information regarding the KYC (Know Your Customer) procedure will be
            given to you in order for you to submit the necessary paperwork. A
            utility bill or bank statement may be required as proof of residence
            and identification, respectively, to identify the user. Please take
            note that only the same bank card that was used to purchase the
            Coins may be used to implement the withdrawal of cash
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            8. Refunding / Canceling Deposits
          </p>
          <p className={styles.paragraphText}>
            The user has the right to ask for a refund of the money deposited
            into the account within 24 hours of the transaction date. Please get
            in touch with us via the email address listed in the Contact Us
            column to request a refund. The money can only be refunded to the
            credit card you used to purchase the Coins. Refund requests must be
            made by users who are older than 18.
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
