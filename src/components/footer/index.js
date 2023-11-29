import { FaFacebook, FaLinkedin } from "react-icons/fa"
const footer = () => {
    return <>
        <footer>
            <div className="footer-content">
                <h3>Socials</h3>
                <ul className="socials">
                    <li><FaFacebook size={"30"} /></li>
                    <li><FaLinkedin size={"30"} /></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {Date().split(" ")[3]}. OmaEmpire</p>
            </div>
            <div className="footer-menu">
                <address>
                    Lagos
                </address>
            </div>
        </footer>
    </>
}

export default footer;