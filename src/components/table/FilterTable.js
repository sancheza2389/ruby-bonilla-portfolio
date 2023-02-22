import {useState, useEffect} from 'react';

const portfolio = [
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/webzemi_gKOpR37FwJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085409143",
        name: "WebZemi",
        description: "I recently led a web project for Webzemi, a cool web development company in New York. As the project lead, I got to flex my management skills by overseeing the entire project from start to finish. I managed a diverse team of talented web developers, designers, and wordsmiths (aka copywriters) to make sure everything was running smoothly and we hit our deadlines. I also got to work closely with the client to understand their needs and goals, and kept them in the loop with regular updates. It was a wild ride, but we made it to the finish line and launched a killer website that speaks to the team's expertise and meets potential clients where they are!",
        category: ["all", "project manager", "writer", "consultant"],
        key: 1
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/blogs_GPPtqS0LX5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085409547",
        name: "Blogs, Books, and Beyond",
        description: "I had the amazing opportunity to lead a project called 'Blogs, Books, and Beyond' that spanned four continents and nine countries. The goal of this online event was to create a platform for writers, publishers, editors, illustrators, copywriters, and others in the industry to connect, learn from one another, and share their expertise. As project lead, I worked closely with our team to ensure that the event was geared towards catering to the unique needs of all these different groups, while also fostering a sense of community and inclusivity. Despite the challenges of coordinating across different time zones and cultures, we were able to successfully execute an event that brought together creative minds from all over the world. ",
        category: ["all", "consultant"],
        key: 2
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/acuity_-7x-Eo1t4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085408764",
        name: "Acuity Brands",
        description: "I had the opportunity to lead a project aimed at revamping the Investor Relations website for Acuity Brands, a leading technology company. As project lead, I worked closely with the client to understand their goals and vision for the site, as well as the needs of their stakeholders. We wanted to create a site that not only provided relevant information to investors, but also highlighted the company's values and successes. To achieve this, I worked with a team of talented web developers, designers, and copywriters to create a site that was easy to navigate, visually appealing, and informative. We also took a mobile-first approach to ensure that the site was accessible to investors on the go. Overall, the project was a great success, and we received positive feedback from the client and their stakeholders.",
        category: ["all", "project manager"],
        key: 3
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/workhuman_NeAbTgXmo-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085409710",
        name: "Spotlight (Workhuman)",
        description: "I had the pleasure of leading a project to create a website for Spotlight, a major event thrown by Workhuman, a leading provider of human-centered solutions for the workplace. The goal of the website was to provide information about the event and help attendees plan their experience. As project lead, I worked with the Workhuman team to understand their vision for the event and the needs of their audience. I also collaborated with a team of web developers, designers, and content creators to create a site that was visually stunning and easy to navigate. The site featured an interactive schedule, speaker profiles, and other resources to help attendees make the most of the event. It was a rewarding project, and I am proud to have played a part in helping make Spotlight a success.",
        category: ["all", "project manager"],
        key: 4
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/kingdom__-AMXW1dj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085411434",
        name: "Kingdom Women",
        description: " Leading the project to create a website for Surreal Eyewear, a leading eyewear retailer, was an exciting and challenging opportunity. Working closely with the team at Surreal Eyewear, I gained a deep understanding of their customer base and unique approach to eyewear sales. My goal was to design a website that captured their brand identity and showcased their extensive collection of eyewear. Collaborating with a team of designers and developers, we created a visually appealing and user-friendly site that made it easy for customers to browse and purchase eyewear. By employing a clean design and seamless functionality, we aimed to enhance the overall user experience, which ultimately contributed to increased sales and customer satisfaction.",
        category: ["all", "writer", "project manager"],
        key: 5
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/surreal_Q1Enuk79Ht.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677085411057",
        name: "Surreal Eyewear",
        description: "Leading the project to create a website for Surreal Eyewear, a leading eyewear retailer, was an exciting and challenging opportunity. Working closely with the team at Surreal Eyewear, I gained a deep understanding of their customer base and unique approach to eyewear sales. My goal was to design a website that captured their brand identity and showcased their extensive collection of eyewear. Collaborating with a team of designers and developers, we created a visually appealing and user-friendly site that made it easy for customers to browse and purchase eyewear. By employing a clean design and seamless functionality, we aimed to enhance the overall user experience, which ultimately contributed to increased sales and customer satisfaction.",
        category: ["all", "project manager"],
        key: 6
    }
];


const FilterTable = () => {    
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);
    
    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map( p => ({ ...p, filtered: p.category.includes(filter) }) );
        setProjects(filtered);
    }, [filter]);

    return(
        <div className="table__container">
            <div className="filter-label__container" id="labelContainer">
                <button active={filter === 'all'} onClick={ ()=> setFilter('all')} className="filter-label filter-label__active">All</button>
                <button active={filter === 'writer'} onClick={ ()=> setFilter('writer') } className="filter-label">Writing</button>
                <button active={filter === 'project manager'} onClick={ ()=> setFilter('project manager')} className="filter-label">Project Management</button>
                <button active={filter === 'consultant'} onClick={ ()=> setFilter('consultant')} className="filter-label">Consulting</button>
            </div>
            <div className="table">
                {projects?.map(item => item.filtered === true ? (
                    <div className="table-item" key={item.key}>
                        <img key={item.Image} src={item.image} alt="portfolio item" className="table-item--image"/>
                        <h3 key={item.name} className="heading heading-sml">{item.name}</h3>
                        <p key={item.description} className="paragraph">{item.description}</p>
                    </div>
                ) : '')}
            </div>
            <>
                {(() => {
                    let labels = document.getElementsByClassName("filter-label");
                    
                    for(let i = 0; i < labels.length; i++){
                        labels[i].addEventListener("click", function(){
                            let current = document.getElementsByClassName("filter-label__active");
                            current[0].className = current[0].className.replace("filter-label__active", "");
                            this.className += " filter-label__active";
                        })
                    }
                })()}
            </>
        </div>
    )
}

export default FilterTable;