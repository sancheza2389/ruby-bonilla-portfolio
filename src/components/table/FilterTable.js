import {useState, useEffect} from 'react';

const portfolio = [
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161148.538_ZzMoqjt5f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779343",
        name: "Project 1",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "project manager"],
        key: 1
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T160922.897_TA2DwhlGgz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779339",
        name: "Project 2",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "writer", "consultant"],
        key: 2
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161040.163_PUp6GPVlU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779322",
        name: "Project 3",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "writer"],
        key: 3
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T160746.796_EJ5mflM4UB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779270",
        name: "Project 4",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "writer", "consultant"],
        key: 4
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161105.835_bYlgEmBbd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779260",
        name: "Project 5",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "project manager"],
        key: 5
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161004.429_-rjQM4tJi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298779062",
        name: "Project 6",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "project manager", "consultant", "writer"],
        key: 6
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161027.666_9BEKr2xxam.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298778973",
        name: "Project 7",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "writer", "consultant"],
        key: 7
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T161204.878_f9vyM0J0j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298778784",
        name: "Project 8",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "project manger"],
        key: 8
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T160948.137_hflkx4BeH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298778631",
        name: "Project 9",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "consultant", "project manager"],
        key: 9
    },
    {
        image: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Untitled_design_-_2023-01-09T160803.350_t8ieu54CW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673298778670",
        name: "Project 10",
        description: " Lorem ipsum dolor sit amet, ad pro nihil fastidii.",
        category: ["all", "writer", "consultant"],
        key: 10
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