import React from "react"
import styles from "./resume.module.scss"
import SpeakingSvg from "../public/speaking.jsx"
import WritingSvg from "../public/writing.jsx"
import CodingSvg from "../public/programming.jsx"
import CopySvg from "../public/copy.jsx"
import ResumeElements from "./ResumeElements";

const resumeData = [
    {
        icon: <CodingSvg />,
        leftcolumn: "Programming",
        rightcolumn: ["Programming Languages: Javascript", "Frontend: React.js, Next.js, HTML, CSS/SCSS", "Backend: Node.js, Express.js", "Data: PostgreSQL, Redis, MongoDB"]
    },
    {
        icon: <SpeakingSvg />,
        leftcolumn: "Editing",
        rightcolumn: ["Developmental Consulting", "Project Management", "Adobe Suite", "Microsoft Office Suite"]
    },
    {
        icon: <CopySvg />,
        leftcolumn: "Copyediting",
        rightcolumn: ["Styles: CMS, APA, and MLA", "Academic and Trade Titles", "Light-to-Heavy Copyedits", "Communication-Comfortable"]
    },
    {
        icon: <WritingSvg />,
        leftcolumn: "Writing",
        rightcolumn: ["Novelwriter (Science-Ficton/Fantasy)", "Professional Essayist", "Blogging History", "Philosopher"]
    }
]

const Resume = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentTitle}>
                Resume
            </div>
            <div className={styles.resumeLink}>
                <a href="/Resume.pdf" target="_blank">
                    Click for Full PDF
                </a>
            </div>
            <div className={styles.contentSubTitle}>
                    General Overview
            </div>
            <div className={styles.row}>
                {resumeData.map((data) => <ResumeElements {...data} />)}
            </div>
        </div>
    )
}

export default Resume;