// components
import Logo from '../components/Logo.js';


// custom
import '../custom/navbar.scss';

export default function Navbar() {
    return(
        <>
            <div className="main-nav-logo">
                
                <Logo link to="/"/>
                
            </div> 
            <div>
                <div className="main-nav-item">
                  
                    <p>Sign In</p>
                </div>
            </div>
        </>
    )
}


// IMPORTANT : Gérer le lien pour retour vers la page HOME