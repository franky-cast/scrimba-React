import twitterLogo from "../assets/twitter-logo.png"
import fbLogo from "../assets/fb-logo.png"
import igLogo from "../assets/ig-logo.png"

function Footer() {
    return (
        <div className="footer">
            <a href="#"><img className="logo" src={twitterLogo} alt="twitter icon" /></a>
            <a href="#"><img className="logo ig-logo" src={igLogo} alt="twitter icon" /></a>
            <a href="#"><img className="logo fb-logo" src={fbLogo} alt="twitter icon" /></a>
        </div>
    )
}
export default Footer