const whatIDoList = [
    {
        name: "Copywriting",
        description: "Copywriting is the craft of writing compelling, persuasive and effective language that drives action by communicating effectively and strategically. See my copywriting success stories here.",
        icon: "pencil",
        key: 1
    },
    {
        name: "Project Management",
        description: "Project management is the process of planning, organizing and managing resources to bring about the successful completion of specific project goals and objectives. See my project management success stories here.",
        icon: "projectMgmt",
        key: 2
    },
    {
        name: "Consultant",
        description: "Guiding veterans, moms, and school teachers into their dream careers - free of charge. Click here to learn more about how to work with me.",
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