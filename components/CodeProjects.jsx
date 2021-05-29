import React from 'react';
import styles from './codeprojects.module.scss'

export default ( { thumbnail, title, description, technologies } ) => (
    <div className={styles.column}>
        <div className={styles.tooltip}>
            <div className={styles.thumbnail}> {thumbnail} </div>
            <div className={styles.title}> {title} </div>
            <div className={styles.tooltiptext}>
                    {description} 
                    <br />
                    {technologies}
            </div>
            <div className={styles.textbox}>
                    {description} 
                    <br />
                    {technologies}
            </div>
        </div>
    </div>
)
