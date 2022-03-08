// components
import Logo from '../components/Logo.js';
// routes
import { Link } from 'react-router-dom';

export default function LogoOnlyLayout() {
    return(  
        <Link to='/'>
            <Logo/>
        </Link>
    )
}