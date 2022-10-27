import styles from './FAQ.module.scss'

export const FAQ = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.wrapper}>
        <p className={styles.title}>F.A.Q. WinGamer</p>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            1. Can I play on WinGamer without registration?
          </p>
          <p className={styles.paragraphText}>
            Playing free games does not require any registration, but you must
            first register an account before using any of the site's paid
            features.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            2. How can I sign up for WinGamer?
          </p>
          <p className={styles.paragraphText}>
            To make an account, you must click the "Sign up" button. Complete
            all required fields, and an email confirmation will be delivered to
            your inbox. After you verify the email address, the registration
            procedure is complete. You may now access and use your account.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            3. Where can I choose a profile picture?
          </p>
          <p className={styles.paragraphText}>
            In your account settings you can choose a profile picture. First buy
            a profile picture, then decide on one from your collection of
            purchased images.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>4. What are Starred Games?</p>
          <p className={styles.paragraphText}>
            Starred games are games that you mark with a star. You can access
            them quickly through your account menu.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>5. What are Coins Used for?</p>
          <p className={styles.paragraphText}>
            Coins can be used to purchase more platform features or to play paid
            games. Click the "Buy Coins" button in the menu or the Coin at the
            top of the page to purchase Coins. Then, enter the number of Coins
            you want to purchase, acknowledge that you have read and agree to
            the website's Terms of Use, and move on to the checkout page.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            6. Who can take part in Tournaments?
          </p>
          <p className={styles.paragraphText}>
            Tournaments are open to every user who has finished the registration
            process. In order to access Tournaments, click on the ‘Tournaments’
            in the menu. There you will see all the Tournaments which are
            available at the moment. Pick the one you would like to participate
            in and have fun!
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            7. Do I Need to Pay an Entrance Fee to Take Part in Tournaments?
          </p>
          <p className={styles.paragraphText}>
            Yes. You have to pay an entrance fee to take part in a Tournaments.
            If you win a Tournament, you will get the sum of all the entry fees
            paid by other users, except the platform commission.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            8. Is it Possible for Me to Create Tournaments?
          </p>
          <p className={styles.paragraphText}>
            Yes, without a doubt. New Tournaments can be created by any user who
            has signed up. Once all the necessary information has been entered,
            click the "Create PVP" button. The game, the start and end dates of
            the Tournaments, and the cost of entry can all be selected after
            that. All done. Your Tournament is open to other participants!
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            9. How long do Tournaments last?
          </p>
          <p className={styles.paragraphText}>
            When users create a new Tournament, they decide how long it will
            last.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            10. Where can I find my Tournaments results?
          </p>
          <p className={styles.paragraphText}>
            You can only see the results of the top 5 players in active
            Tournaments.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>11. How can I withdraw Coins?</p>
          <p className={styles.paragraphText}>
            Only Coins won in Tournaments can be withdrawn. Go to your account
            and click the "Withdraw Coins" option to convert Coins to fiat
            money. After providing all the required details, click the "Submit"
            button. When the request is finished, the Coins will be deducted
            from your balance. Following that, information on the KYC procedure
            and how to submit the necessary paperwork will be given to you. Our
            customer service team will be available to you for 24 hours. Only
            the bank card you used to purchase the Coins can be used to withdraw
            the money. Additionally, you must be older than 18 in order to
            submit a withdrawal request. Please do not hesitate to contact our
            support team if you desire to withdraw your request, and the Coins
            will be returned to your balance.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            12. What is the transaction log for?
          </p>
          <p className={styles.paragraphText}>
            The transaction log records all of your actions, including
            replenishing your balance, winning, using, and withdrawing Coins
            from it.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p className={styles.paragraphTitle}>
            13. What if I didn’t find the answer to my question?
          </p>
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
