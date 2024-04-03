import classNames from 'classnames'
import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { ActiveAuthComponentContext } from '../../../../context'
import Button from '../../../../UI/button/Button'
import styles from './Login.module.scss'

const Login = () => {
    const navigate = useNavigate();
    const [activeAuthComponent, setActiveAuthComponent] = useContext(ActiveAuthComponentContext)
    const handleTabClick = (tab) => {
        setActiveAuthComponent(tab);
    };
    const handleLogin = () => {
        navigate('/profile');
    };

    return (
        <>
            <div className={styles.titleLinks}>
                <h3 className={styles.title}>Login</h3>
                <button onClick={() => handleTabClick('registration')} className={styles.btn}>Registration</button>
            </div>

            <form className={styles.form} action="">
                <label className={styles.lable} htmlFor="loginEmail">E-mail</label>
                <input className={styles.input} type="text" name="loginEmail" id="loginEmail" />

                <label className={styles.lable} htmlFor="loginPassword">Password</label>
                <input className={styles.input} type="text" name="loginPassword" id="loginPassword" />

                <div className={styles.btnLogin} >
                    <Button onClick={handleLogin} width='100%' text='Log in' />
                </div>

                <div className={styles.btnItems}>
                    <div className={styles.rememberInputCont}>
                        <input className={styles.rememberInput} type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button onClick={() => handleTabClick('forgotPassword')} className={classNames(styles.btn, styles.btnForgot)}>Forgot your password?</button>
                </div>
            </form>
        </>
    )
}

export default Login
