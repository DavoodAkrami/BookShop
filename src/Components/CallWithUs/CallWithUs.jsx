import React from 'react';
import OwnerInfo  from '../../data/OwnerInfo';
import styles from './CallWithUs.module.css';

const CallWithUs = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>تماس با ما</h1>
                </div>
                <div className={styles.body}>
                    <div className={styles.email}>
                        <p>ایمیل: {<a href={`mailto:${OwnerInfo.Email}`}>{OwnerInfo.Email}</a>}</p>
                    </div>
                    <div className={styles.phone}>
                        <p>شماره تلفن: {OwnerInfo.Phone}</p>
                    </div>
                    <div className={styles.address}>
                        <p>آدرس: <a href={`https://maps.app.goo.gl/1234567890`}>{OwnerInfo.Address}</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallWithUs;
