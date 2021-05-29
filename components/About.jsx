import  React from "react"
import styles from "./about.module.scss"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img 
                    src="/david.png"
                    alt="picture of David"
                    width={250}
                    height={300}
                />
                </div>
            <div className={styles.contentTitle}>
                Hi, I'm David!
            </div>
            <div className={styles.contentBodyAbout}>
                I love making a Positive Impact in the world through the medium of Language.
            </div>
            <div className={styles.contentBodyAbout}>
                From Web Development, to Editorial Work, to Authoring Fantasy and Science Fiction, I weave Dreams into Reality.
            </div>
            <div className={styles.contentBodyAbout}>
                I stay Driven by one Motivating question:
            </div>
            <div className={styles.pullQuote}>
                What Should We Create Today?
            </div>
        </div>
    )
}

export default About;