import React from "react"
import styles from "./codesamples.module.scss"
import Project from './CodeProjects'

const projectData = [
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/writingotaku" target="_blank">
                <img 
                    src="/WritingOtaku.png"
                    alt="Writing Otaku (Website) Thumbnail"
                    width={200}
                    height={150}
                />
            </a> 
        </div>,
        title: "Writing Otaku",
        description: "A blog-style app that allows users to register and later log in to an account. Then the user can make, edit, or delete posts. They can view their own posts via their dashboard, and view all user posts via a viewboard.", 
        technologies: "Technologies used include Postgres, Node.js, Express.js, Redis, React.js, and Next.js."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/portfolio" target="_blank"> 
                <img 
                    src="/Portfolio.png"
                    alt="Portfolio (Website) Thumbnail"
                    width={200}
                    height={150}
                />
            </a>
        </div>,
        title: "Portfolio",
        description: "A portfolio website complete with About, Resume, Work Samples, and Contact pages.",
        technologies: "Technologies used include Node.js, React.js, and Next.js."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://www.pheezx.com" target="_blank"> 
                <img 
                    src="/Pheezx.png"
                    alt="Pheezx (Website) Thumbnail"
                    width={200}
                    height={150}
                />
            </a>
        </div>,
        title: "Pheezx",
        description: "Assisted a colleague with their tutoring website, creating the Passport.js login strategies using Google and Facebook, and updating the related Postgres data tables.",
        technologies: "Technologies used include Postgres, Node.js, React.js, and Next.js."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/webbased_snake" target="_blank"> 
                <img 
                    src="/SnookWeb.png"
                    alt="Snake Game (Web) Thumbnail"
                    width={150}
                    height={150}
                />
            </a>
        </div>,
        title: "Snake Game (Web)",
        description: "This app is a web-based snake game, where the arrow keys control the snake as the user tries to avoid the walls or the snake itself to eat the food.",
        technologies: "Created using Javascript, HTML, and CSS."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/wikicommonsscraper" target="_blank">  
                <img 
                    src="/WebScraper.png"
                    alt="Web Scraper Thumbnail"
                    width={200}
                    height={150}
                />
            </a>
        </div>,
        title: "Web Scraper (Wikimedia Commons)",
        description: "This widget automates the process of downloading images from wikimedia commons provided you have a list of image URLs in the provided .txt file.",
        technologies: "Created using Javascript."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
            <a href="https://github.com/beezymc/jwt_project" target="_blank">  
                <img 
                    src="/JwtProject.png"
                    alt="Jwt Project Thumbnail"
                    width={200}
                    height={150}
                />
            </a>
        </div>,
        title: "Register and Login with JWT",
        description: "This is a registration and login app I made to familiarize myself with JWT.",
        technologies: "Technologies used include Postgres, Node.js, Express.js, and React.js."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/login_registration" target="_blank">  
                <img 
                    src="/PassportProject.png"
                    alt="Passport.js Project Thumbnail"
                    width={200}
                    height={150}
                />
            </a>
        </div>,
        title: "Register and Login with Passport.js",
        description: "This is a registration and login app I made to familiarize myself with Passport.js.",
        technologies: "Technologies used include MongoDB, Node.js, and Express.js."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
            <a href="https://github.com/beezymc/webbased_connectfour" target="_blank">  
                <img 
                    src="/ConnectWeb.png"
                    alt="Connect Four (Web) Thumbnail"
                    width={150}
                    height={150}
                />
            </a>           
        </div>,
        title: "Connect Four (Web)",
        description: "A Connect Four game in which two users take turns clicking to place their shape into a mutable grid until one gets four in a row (vertical, horizontal, or diagonal), or the board is filled (making it a draw).",
        technologies: "Created using Javascript, HTML, and CSS."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/consolebased_connectfour" target="_blank">  
                <img 
                    src="/ConsoleConnect.png"
                    alt="Connect Four (Console) Thumbnail"
                    width={150}
                    height={150}
                />
            </a>
        </div>,
        title: "Connect Four (Console)",
        description: "A Connect Four game in which two users take turns typing coordinates to place their shape into a mutable grid until one gets four in a row (vertical, horizontal, or diagonal), or the board is filled (making it a draw).",
        technologies: "Created using Javascript."
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}>
            <a href="https://github.com/beezymc/consolebased_minesweeper" target="_blank">           
                <img 
                    src="/ConsoleSweeper.png"
                    alt="Minesweeper (Console) Thumbnail"
                    width={150}
                    height={150}
                />
            </a>
        </div>,
        title: "Minesweeper (Console)",
        description: "A Minesweeper game in which a user reveals cells by inputting coordinates until the user reveals all non-bomb cells, or reveals a bomb. The board size and number of bombs are mutable.",
        technologies: "Created using Javascript."
    },
    {
    thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://codepen.io/Drajec" target="_blank">
            <img 
                src="/Codepen.png"
                alt="My Codepen Thumbnail"
                width={200}
                height={150}
            />
        </a>
    </div>,
    title: "David's Codepen",
    description: "Click here to check out my codepen.io profile, where I made a few other fun little programs!",
    },
]

const CodeSamples = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentTitle}>
                CodeSamples
            </div>
            <div className={styles.row}>
                {projectData.map((data) => <Project {...data} />)}
            </div>
        </div>
    )
}

export default CodeSamples;