// components
import Logo from '../components/Logo.js';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// custom
import '../custom/navbar.scss';

export default function Navbar() {
    return(
        <>
            <div className="main-nav-logo">
                <Logo/>
            </div> 
            <div>
                <div className="main-nav-item">
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                    <p>Sign In</p>
                </div>
            </div>
        </>
    )
}
