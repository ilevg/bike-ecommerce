import React, { useContext } from 'react'
import { ActiveAuthComponentContext } from '../../context'

import classNames from 'classnames'
import styles from './Auth.module.scss'

import ForgotPass from './modules/forgotPass/ForgotPass'
import Login from './modules/login/Login'
import Registration from './modules/registration/Registration'


const Auth = () => {
    const [activeAuthComponent, setActiveAuthComponent] = useContext(ActiveAuthComponentContext)
    
    const renderContent = () => {
        switch (activeAuthComponent) {
            case 'login':
                return <Login />;
            case 'registration':
                return <Registration />;
            case 'forgotPassword':
                return <ForgotPass />;
            default:
                return null;
        }
    };
    return (
        <div className={classNames(styles.container, "container")}>
            {renderContent()}
        </div>
    )
}

export default Auth
