import "./footer.css"
import {faTwitter, faYoutube, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
        
    )
}

export default Footer