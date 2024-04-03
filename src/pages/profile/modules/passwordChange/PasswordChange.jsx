import classNames from 'classnames'
import React from 'react'
import Button from '../../../../UI/button/Button'
import styles from './PasswordChange.module.scss'

const PasswordChange = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>Changing the Password</h3>
            <form className={styles.form} action="">

                <label className={styles.lable} htmlFor="aldPass">Old password</label>
                <input className={styles.input} type="text" name="aldPass" id="aldPass" />

                <label className={styles.lable} htmlFor="newPass">New password</label>
                <input className={styles.input} type="text" name="newPass" id="newPass" />

                <label className={styles.lable} htmlFor="repeatPass">Repeat password</label>
                <input className={styles.input} type="text" name="repeatPass" id="repeatPass" />

                <div className={styles.btn}>
                    <Button width='100%' text='Change the password' />
                </div>
            </form>
        </div>
    )
}

export default PasswordChange
