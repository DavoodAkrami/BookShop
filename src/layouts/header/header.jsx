import React from 'react';
import styles from './header.module.css';
import { useState } from 'react';

const Header = ({selected, setSelected}) => {

    
    return(
        <div className={styles.root}>
            <div className={styles.container}>
                <ul className={styles.header}>
                    <li>
                        <a onClick={() => setSelected(0)} style={selected === 0 ? {backgroundColor: 'gray', borderRadius: '20px'} : {}}>فروشگاه</a>
                    </li>
                    <li>
                        <a onClick={() => setSelected(1)} style={selected === 1 ? {backgroundColor: 'gray', borderRadius: '20px'} : {}}>تلفظ لغات کتاب</a>
                    </li>
                    <li>
                        <a onClick={() => setSelected(2)} style={selected === 2 ? {backgroundColor: 'gray', borderRadius: '20px'} : {}}>پاسخ تمرینات کتاب</a>
                    </li>
                    <li>
                        <a onClick={() => setSelected(3)} style={selected === 3 ? {backgroundColor: 'gray', borderRadius: '20px'} : {}}>تماس با ما</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
