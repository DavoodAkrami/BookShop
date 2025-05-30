import styles from './Footer.module.css';
import OwnerInfo from '../../data/OwnerInfo';
import Books from '../../data/books';

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <h3>فروشگاه کتاب</h3>
                </div>
                <div className={styles.ownerInfo}>
                    <p>نام: {OwnerInfo.Name}</p>
                    <p>ایمیل: {OwnerInfo.Email}</p>
                    <p>شماره تلفن: {OwnerInfo.Phone}</p>
                    <p>آدرس: {OwnerInfo.Address}</p>
                </div>
                <div className={styles.copyRight}>
                <p>© {new Date().getFullYear()} Book Shop. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;