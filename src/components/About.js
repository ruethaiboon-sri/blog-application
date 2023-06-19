import about from "../images/about.svg";
import "./About.css"
export default function About(){
    return(
        <div className="container">
            <h2>About Us</h2>
            <div className="link">
            <a href="https://github.com/ruethaiboon-sri">GitHub</a>
            <a href="https://www.linkedin.com/in/ruethaiboon-srithai/">LinkedIn</a>
            </div>
            <img src={about} alt="about" />
        </div>
    )
}