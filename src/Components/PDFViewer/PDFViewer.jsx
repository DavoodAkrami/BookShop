import React from 'react';
import styles from './pdfViewer.module.css';
import books from '../../data/Books.js';

const PDFViewer = () => {
    // Function to convert Google Drive view URL to preview URL
    const getPreviewUrl = (url) => {
        return url.replace('/view?usp=drive_link', '/preview');
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.pdf_viewer}>
                    <h1>کتاب درسی</h1>
                    <div className={styles.pdf_list}>
                        {Object.entries(books.Volumes).map(([volumeKey, volume]) => (
                            <div key={volumeKey} className={styles.volume}>
                                <h2>{volume.title}</h2>
                                <ul className={styles.lessons}>
                                    {Object.entries(volume.lessons).map(([lessonKey, lesson]) => (
                                        <li key={lessonKey} className={styles.lesson}>
                                            <h4>{lesson.text}</h4>
                                            <div className={styles.pdf_container}>
                                                <iframe
                                                    src={getPreviewUrl(lesson.pdf)}
                                                    width="100%"
                                                    height="600px"
                                                    style={{ border: 'none' }}
                                                    title={`PDF for ${lesson.text}`}
                                                    allow="autoplay"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer; 