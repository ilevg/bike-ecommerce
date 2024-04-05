import classNames from 'classnames';
import React, { useContext } from 'react';
import { ActiveProfileTabContext } from '../../../../context';
import styles from './SideMenu.module.scss';

const SideMenu = () => {
    const [activeTab, setActiveTab] = useContext(ActiveProfileTabContext);

    const getButtonClassName = (tabName) => classNames(styles.btn, {
        [styles.btnActive]: activeTab === tabName
    });
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.sideMenu}>
            <h3 className={styles.subtitle}>My profile</h3>
            <button onClick={() => handleTabClick('history')} className={getButtonClassName('history')} type='button'>Order history</button>
            <button onClick={() => handleTabClick('data')} className={getButtonClassName('data')} type='button'>Personal data</button>
            <button onClick={() => handleTabClick('password')} className={getButtonClassName('password')} type='button'>Changing the password</button>
            <button className={styles.exitBtn} type='button'>Exit</button>
        </div>
    );
};
export default SideMenu;
