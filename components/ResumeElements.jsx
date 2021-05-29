import React from "react"
import styles from "./resumeelements.module.scss"

export default ( { icon, leftcolumn, rightcolumn } ) => (
    <div className={styles.column}>
        <div className={styles.icon}> {icon} </div>
        <div className={styles.titleColumn}>
            {leftcolumn}
        </div>
        {rightcolumn.map((element) => 
        <div className = {styles.cardContainer}>
            <div className={styles.cardColumnText}> 
                {element} 
            </div>
        </div>)}
    </div>
)