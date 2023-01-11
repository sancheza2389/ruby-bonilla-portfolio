const experience = [
    {
        name: "Google",
        logo: "",
        duration: "OCT 2020 - 2022",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
        key: 1
    },
    {
        name: "Apple",
        logo: "",
        duration: "OCT 2020 - 2022",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
        key: 2
    }
]

const iconURL = "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Icons/Untitled-design-2023-01-09T111218069-transformed_intuj5L01.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673280898461";

function ExperienceTable() {
    const listItems = experience.map((d) => 

        <div className="experience-item__container" key={d.key}>
            <div className="experience-item--header">
                <div className="experience-item--icon">
                    <div className="pink-circle"></div>
                    <img src={iconURL} alt="Briefcase"  height="25px" width="25px"></img>
                </div>
                <div className="experience-item--heading">
                    <h4 key={d.name} className="heading heading-sml">{d.name}</h4>
                    <p key={d.duration} className="paragraph">{d.duration}</p>
                </div>
            </div>
            <div className="experience-item--description__container">
                <p key={d.description} className="paragraph">{d.description}</p>
            </div>
        </div>

    );

    return (
        <div className="experience">
            <h2 className="heading heading-md">Experience</h2>
            <div className="experience--flex">
                {listItems}
            </div>
        </div>
    );
}

export default ExperienceTable;