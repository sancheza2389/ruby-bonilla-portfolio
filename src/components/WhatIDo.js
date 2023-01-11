const whatIDoList = [
    {
        name: "Copywriting",
        description: "It is a long established fact that a reader will be distracted by the readable content.",
        icon: "pencil",
        key: 1
    },
    {
        name: "Project Management",
        description: "It is a long established fact that a reader will be distracted by the readable content.",
        icon: "projectMgmt",
        key: 2
    },
    {
        name: "Consultant",
        description: "It is a long established fact that a reader will be distracted by the readable content.",
        icon: "cellPhone",
        key: 3
    }
]

function WhatIDo(){
    const listItems = whatIDoList.map((d) => 
        <div className="wid-entry" key={d.key}>
            <div className="wid-entry_image">
                <div className="pink-circle"></div>
                <img key={d.icon} src="#" alt="pencil icon" className={d.icon}></img>
            </div>
            <div className="wid-entry_copy">
                <h3 key={d.name} className="heading heading-sml">{d.name}</h3>
                <p key={d.description} className="paragraph">{d.description}</p>
            </div>
        </div>
    );

    return (
        <div className="wid">
            <h2 className="heading heading-md">What I do</h2>
            <div className="wid-entries">
                {listItems}
            </div>
        </div>
    );

}

export default WhatIDo;