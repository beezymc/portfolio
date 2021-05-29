import React from 'react';
import styles from './bookprojects.module.scss';

export default ( { thumbnail, title, description } ) => (
    <div className={styles.column}>
        <div className={styles.tooltip}>
            <div className={styles.thumbnail}> {thumbnail} </div>
            <div className={styles.title}> {title} </div>
            <div className={styles.tooltiptext}>
                    {description} 
            </div>
        </div>
    </div>
)