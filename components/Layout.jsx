import React from "react"
import styles from './layout.module.scss'
import Link from "next/link";

const About = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.nameSpace}>
                    <div className={styles.name}><Link href="/">David Rajec</Link></div>
                    <div className={styles.title}>Developer, Editor, Author</div>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.navigationItems}><Link href="/">About</Link></div>
                    <div className={styles.navigationItems}><Link href="/resume">Resume</Link></div>
                    <div className={styles.navigationItems}><Link href="/codesamples">CodeSamples</Link></div>
                    <div className={styles.navigationItems}><Link href="/publishedworks">PublishedWorks</Link></div>
                    <div className={styles.navigationItems}><Link href="/contact">Contact</Link></div>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img 
                        src="/david.png"
                        alt="picture of David"
                    />
                </div>
                <div className={styles.content}>{props.children}</div>
            </div>
        </div>
    )
}

export default About;