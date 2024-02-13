import classNames from 'classnames'
import React from 'react'
import styles from './ContactAbout.module.scss'

const ContactAbout = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5610513692445!2d-0.14353338687849773!3d51.54539567858985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae2989f1b99%3A0x506c6806cea82bb9!2s147%20Kentish%20Town%20Rd%2C%20London%20NW1%208PR%2C%20UK!5e1!3m2!1sen!2spl!4v1706894215511!5m2!1sen!2spl"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
      <div className={classNames(styles.contact, 'container')}>
        <div className={styles.info}>
          <div>
            <h4 className={styles.infoTitle}>Адрес магазина:</h4>
            <span>7/8 Dovator str., 1, London, UK</span>
          </div>
          <div>
            <h4 className={styles.infoTitle}>Working hours:</h4>
            <span>Monday — Sunday from 10:00 to 20:00</span>
            <div>SEVEN DAYS A WEEK</div>
          </div>
          <div>
            <h4 className={styles.infoTitle}>Phone numbers:</h4>
            <a href="+14950557586">+1 (495) 055-75-86</a>
            <div>
            <a href="+14950551245">+1 (495) 055-75-86</a>
            </div>
          </div>
          <div>
            <h4 className={styles.infoTitle}>E-mail:</h4>
            <a href="mailto:order@world-bike.com">order@world-bike.com</a>
          </div>
        </div>

        <table className={styles.table}>
          <span className={styles.tableTitle}>Legal information:</span>
          <tr>
            <td>Name:</td>
            <td className={styles.tableInfo}>World Bike Co.</td>
          </tr>

          <tr>
            <td>INN:</td>
            <td className={styles.tableInfo}>402573939444</td>
          </tr>

          <tr>
            <td>Legal address:</td>
            <td className={styles.tableInfo}>7/8 Dovator str., 1, London, UK</td>
          </tr>

          <tr>
            <td>Payment account:</td>
            <td className={styles.tableInfo}>40802810800000085888</td>
          </tr>

          <tr>
            <td>Bank:</td>
            <td className={styles.tableInfo}>"Millenium"</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ContactAbout
