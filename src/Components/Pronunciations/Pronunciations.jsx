import React from 'react';
import styles from './pronunciations.module.css';
import Header from '../../layouts/header/header';
import books from '../../data/Books.js';

const Pronunciations = () => {

    
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.pronunciation}>
                    <h1>تلفظ لغات کتاب</h1>
                    <div className={styles.pronunciation_list}>
                        {Object.entries(books.Volumes).map(([volumeKey, volume]) => (
                            <div key={volumeKey}>
                                <h2>{volume.title}</h2>
                                <ul>
                                    {Object.entries(volume.lessons).map(([lessonKey, lesson]) => (
                                        <li key={lessonKey}>
                                            <h4>{lesson.text}</h4>
                                            <audio controls src={lesson.voice}>
                                                Your browser does not support the audio element.
                                            </audio>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pronunciations;