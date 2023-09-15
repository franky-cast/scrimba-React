function Info(props) {
    const {emailIcon, linkedInIcon, image} = props
    return (
        <div className="info-section">
            <div className="hero">
                <img className="hero__img" src={image} alt="portrait of francisco" />
            </div>

            <div className="personal">
                <h1 className="name">Francisco Castillo</h1>
                <h3 className="occupation">Software Developer</h3>
            </div>

            <div className="button-wrap d-flex">
                <a className="button email-btn row" href="#">
                <img src={emailIcon} alt="email icon"></img>
                Email
                </a>
                <a className="button linked-in-btn row" href="#">
                <img className="linked-in-icon" src={linkedInIcon} alt="linked in icon"></img>
                Linked In
                </a>
            </div>
            
        </div>
    )
}

export default Info