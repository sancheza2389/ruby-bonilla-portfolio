

function DownloadButton() {
    const resume = "https://ik.imagekit.io/webzemi/Ruby-Bonilla-Portfolio/Portfolio/Main/Ruby_Bonillla_Resume_NsMfOmL3E.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1677087164088"
    return (
        <div className="button">
            <a href={resume} download="My Resume" target="_blank">
                <button type="button" className="button-download">DOWNLOAD RESUME</button>
            </a>
        </div>
    );
}

export default DownloadButton;