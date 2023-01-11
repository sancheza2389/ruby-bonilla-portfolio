const cards = [
    {
        icon: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Icons/Untitled_design_-_2023-01-10T145727.192-removebg-preview_krSWBMQHx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673380770769",
        title: "Location",
        description: "Based in the East Coast (EST.)",
        alt: "Location Ping Icon",
        key: 1
    },
    {
        icon: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Icons/Untitled_design_-_2023-01-10T145757.226-removebg-preview_-IPGDnGr5v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673380769874",
        title: "Phone",
        description: "Office: +004 444 444",
        alt: "Phone Icon",
        key: 2
    },
    {
        icon: "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Icons/Untitled_design_-_2023-01-10T145821.250-removebg-preview_dWwP8TDCw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673380769939",
        title: "Email",
        description: "Ruby@domain.com",
        alt: "Email Icon",
        key: 3
    }
]

function ContactCards() {
    const listItems = cards.map((d) => 

        <div className="card__container">
            <img src={d.icon} alt={d.alt} height="26px" width="26px"/>
            <h5 className="heading">{d.title}</h5>
            <p className="paragraph">{d.description}</p>
        </div>

    );

    return (
        <div className="cards">
            {listItems}
        </div>
    )
}

export default ContactCards;