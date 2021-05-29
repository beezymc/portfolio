import React from "react"
import styles from "./publishedworks.module.scss"
import Project from './BookProjects'

const projectData = [
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/the-end-of-social-work-9781793511898" target="_blank">
            <img 
                src="/SocialWork.jpg"
                alt="The End of Social Work Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "The End of Social Work by Steve Burghardt",
    description: "The End of Social Work: A Defense of the Social Worker in Times of Transformation explores the deeply flawed status quo of the social work profession. Its message is clear: it is not acceptable for social workers to labor under intolerable working conditions and financial strain because they work with the poor and oppressed. Steve Burghardt addresses why social workers no longer have the income and status once shared with nurses and teachers. He addresses the leadership failures that cause social workers to be blamed for not ending poverty yet expected to handle burnout through self-care rather than collective action. He looks beyond nostrums of social justice to the indifference to systemic racism in the profession’s journals and programs and explores the damage caused by substituting individuated measures of unvalidated competencies for grounded wisdom in practice. It is thus no accident that a profession committing to “care for everyone” undermines the herculean work that so many social workers do on behalf of the poor, marginalized, and oppressed.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/latinx-healing-practices-9781793519825" target="_blank">
            <img 
                src="/Latinx.jpg"
                alt="Latinx Healing Practices Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Latinx Healing Practices, edited by Joseph M. Cervantes and Brian McNeill",
    description: "Filling a gap in the current literature, Latinx Healing Practices: Psychospiritual Counseling Interventions convenes the voices of Latinx psychologists and Indigenous spirituality practitioners to provide future and current mental health professionals with a greater understanding of Latinx spirituality, healing traditions, worldviews, and experiences. Armed with this knowledge, readers are equipped to provide their clients with counseling and interventions that are at once culturally aware and highly effective.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/puntos-de-encuentro-9781516511730" target="_blank">
            <img 
                src="/Puntos.jpg"
                alt="Puntos de encuentro Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Puntos de encuentro by María J. de la Fuente",
    description: "Puntos de encuentro: A Cross-Cultural Approach to Advanced Spanish is an innovative task- and content-based textbook that rethinks advanced Spanish instruction. Based on research on second language acquisition in the classroom, it combines language-as-discourse instruction with content-based learning. This text emphasizes the analysis of spoken and written texts drawn from real-world sources, such as journalism, history, literature, and film. Students reflect on language forms and functions in context before using task-based, collaborative activities to process language and content at higher levels by synthesizing information, distinguishing opinions from facts, drawing comparisons, and debating points of view.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/roman-people-9781516599493" target="_blank">
            <img 
                src="/RomanPeople.jpg"
                alt="Roman People Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Roman People by Robert B. Kebric",
    description: "Roman People provides students of antiquity with rich, fully realized accounts of ancient Romans, emphasizing who they were and how they viewed the world. General background information is provided to ground each personality within historical context; however, the main focus of the text is an examination of key figures and their experiences. Both well-known and everyday individuals are presented, providing readers with a balanced and nuanced representation of Roman life. The text is organized chronologically beginning in 753 B.C. and concluding with the fall of the Roman Empire in 1453.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/ethics-online-9781516592975" target="_blank">
            <img 
                src="/EthicsOnline.jpg"
                alt="Ethics Online Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Ethics Online by Robert Sharp",
    description: "Ethics Online: How the Internet and Other Technology Shifts are Changing Morality helps students understand the basics of ethics as they are lived in today’s world. The text introduces readers to traditional approaches to morality, narrows key theories into specific principles, and then uses those principles to examine many of the difficult moral questions we face in our contemporary, technology-driven society.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/an-introductory-history-of-the-united-states-in-the-middle-east-9781516532995" target="_blank">
            <img 
                src="/MiddleEast.jpg"
                alt="An Introductory History of the United States in the Middle East Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "An Introductory History of the United States in the Middle East by Caitlin Carenen",
    description: "An Introductory History of the United States in the Middle East situates American action in the Middle East within the context of American history and foreign policy. Students explore the culture, social issues, and politics of the United States in order to better understand the motivations behind American involvement in the Middle East.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/cyberspace-social-conflict-and-humanity-9781793511263" target="_blank">
            <img 
                src="/Cyberspace.jpg"
                alt="Cyberspace, Social Conflict, and Humanity Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Cyberspace, Social Conflict, and Humanity by Ramesh Sepehrrad, Ph.D.",
    description: "Cyberspace, Social Conflict, and Humanity: A Framework for Collapsing Disciplinary Barriers to Ethical Technology examines how our increasingly connected and digitized world is shaping our social experiences and interactions globally. It offers a new approach to human versus machine debate and builds the case for strategic collaboration between academia, industry, and governments who are committed to the humane advancement of knowledge and innovation. ",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/conceptual-astrophysics-9781516529711" target="_blank">
            <img 
                src="/Astro.jpg"
                alt="Conceptual Astrophysics Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Conceptual Astrophysics by Christopher Sirola",
    description: "Conceptual Astrophysics is intended for introductory (non-calculus based) astronomy. It applies our understanding of physics to astronomy and highlights recent developments in the discipline. Readers are provided with a comprehensive exploration of key theories, ideas, and processes, and develop a strong base of knowledge to support further study.",
    },
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://titles.cognella.com/essential-college-physics-volume-i-9781516548330" target="_blank">
            <img 
                src="/Physics.jpg"
                alt="Essential College Physics Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Essential College Physics by Andrew Rex and Richard Wolfson",
    description: "Essential College Physics Volume I provides students with an approachable and innovative introduction to key concepts in physics. Throughout the text, students enjoy clear and concise explanations, relevant real-world examples, and problems that help them master physics fundamentals.",
    },
]

const bookData = [
    {
        thumbnail: <div className={styles.thumbnailContainer}> 
        <a href="https://www.amazon.com/Gilt-Grandeur-Syrina-Book-ebook/dp/B01L7VFI5M/ref=sr_1_1?dchild=1&keywords=of+gilt+and+grandeur+david+rajec&qid=1622088200&sr=8-1" target="_blank">
            <img 
                src="/Gilt.jpg"
                alt="Of Gilt and Grandeur Book"
                width={150}
                height={200}
            />
        </a>
    </div>,
    title: "Of Gilt and Grandeur by David Rajec",
    description: "Of Gilt and Grandeur, the first book of the Syrina Saga, tells the story of Tovin, a young, unworldly man whose desires to bring a supernatural killer to justice come to clash with his own growing passion for a foreign noblewoman. When he painstakingly discovers more about the killer's enigmatic nature, exacting justice seems ever more futile and the girl ever the more sweet. Tovin must make a choice: To continue battling with the demons of his past at the cost of a present love, or to abandon his mad dash for vengeance entirely to more fully pursue the woman of his dreams. Never could Tovin have guessed the consequences of that decision – having to survive with naught but a grave-picked sword in a violent land darkened by thick canopies, threatening monsters, and hints of a disastrous war on the horizon, his life spiraling hopelessly into chaos. ",
    },
]

const PublishedWorks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentTitle}>
                PublishedWorks
            </div>
            <div className={styles.contentSubTitle}>
                    Editing History
            </div>
            <div className={styles.row}>
                {projectData.map((data) => <Project {...data} />)}
            </div>
            <div className={styles.contentSubTitle}>
                    Authorship History
            </div>
            <div className={styles.row}>
                {bookData.map((data) => <Project {...data} />)}
            </div>
        </div>
    )
}

export default PublishedWorks;