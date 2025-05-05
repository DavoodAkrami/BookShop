import React, { useState } from 'react';
import styles from './HomePage.module.css';
import Header from '../../layouts/header/header';
import Pronunciations from '../../Components/Pronunciations/Pronunciations';
import CallWithUs from '../../Components/CallWithUs/CallWithUs';
import Footer from '../../layouts/Footer/Footer';

const HomePage = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header selected={selected} setSelected={setSelected}/>
                </div>
                {selected === 1 && (
                    <div className={styles.pronunciations}>
                        <Pronunciations />
                    </div>
                )}
                {selected === 3 && (
                    <div className={styles.callWithUs}>
                        <CallWithUs />
                    </div>
                )}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
