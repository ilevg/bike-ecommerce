import classNames from 'classnames'
import React, { useContext } from 'react'
import { ActiveAuthComponentContext } from '../../../../context'
import Button from '../../../../UI/button/Button'
import styles from './Registration.module.scss'

const Registration = () => {
    const [activeAuthComponent, setActiveAuthComponent] = useContext(ActiveAuthComponentContext)

    const handleTabClick = (tab) => {
        setActiveAuthComponent(tab);
    };
    return (
        <>
            <div className={styles.titleLinks}>
                <h3 className={styles.title}>Registration</h3>
                <button onClick={() => handleTabClick('login')}
                    className={styles.btn}>Login</button>
            </div>

            <form className={styles.form} action="">
                <label className={styles.lable} htmlFor="name">Name</label>
                <input className={styles.input} type="text" name="name" id="name" />

                <label className={styles.lable} htmlFor="loginEmail">E-mail</label>
                <input className={styles.input} type="text" name="loginEmail" id="loginEmail" />

                <label className={styles.lable} htmlFor="loginPassword">Password</label>
                <input className={styles.input} type="text" name="loginPassword" id="loginPassword" />

                <label className={styles.lable} htmlFor="repeatPassword">Repeat Password</label>
                <input className={styles.input} type="text" name="repeatPassword" id="repeatPassword" />

                <div className={styles.btnLogin}>
                    <div className={styles.btnLoginCont} >
                        <Button width='100%' text='Registration' />
                    </div>
                    <div>
                        <span className={styles.lableEnterBtn}>Have you already registered? </span>
                        <button onClick={() => handleTabClick('login')} className={classNames(styles.btn, styles.btnEnter)}> Login</button>
                    </div>
                </div>


            </form>
        </>
    )
}

export default Registration
