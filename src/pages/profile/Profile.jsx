import { useContext } from 'react'
import classNames from 'classnames'
import styles from './Profile.module.scss'

import PersonalData from './modules/personalData/PersonalData'
import SideMenu from './modules/sideMenu/SideMenu'
import PasswordChange from './modules/passwordChange/PasswordChange'
import OrderHistory from './modules/orderHistory/OrderHistory'
import { ActiveProfileTabContext } from '../../context'

const Profile = () => {
    const [activeTab] = useContext(ActiveProfileTabContext)
    const renderContent = () => {
        switch (activeTab) {
            case 'history':
                return <OrderHistory />;
            case 'data':
                return <PersonalData />;
            case 'password':
                return <PasswordChange />;
            default:
                return null;
        }
    };

    return (
        <div className={classNames('container', styles.profile)}>
            <SideMenu />
            {renderContent()}
        </div>
    )
}

export default Profile
