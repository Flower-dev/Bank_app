// redux
import { useDispatch, useSelector } from 'react-redux';
import { setInfos, setToken } from '../redux/slices/user';
// routes
import { Link, useHistory } from 'react-router-dom';
// components
import Logo from '../components/Logo';
// icons (fontawesome lib)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// custom
import '../custom/navbar.scss';


// -------------------------------------------------------------

export default function Navbar() {
    // redux
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.infos.firstName);
    const token = useSelector((state) => state.user.token);
    // routes
    const history = useHistory();
    
    const onSignOut = () => {
        dispatch(setToken(''));
        dispatch(setInfos({}));
        history.push('/');
    }

    return (
        <div className='main-nav'>
            <Link to='/' className='main-nav-logo'>
                <Logo/>
            </Link>
            {token ?
                (
                    <div className='nav'>
                        <Link to='/profile' className='main-nav-item'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <p className='nav-text'>{firstName}</p>
                        </Link>
                        <div onClick={onSignOut} className='main-nav-item'>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <p className='nav-text'>Sign Out</p>
                        </div>
                    </div>
                ) :
                (
                    <Link to='/login' className='main-nav-item'>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <p className='nav-text'>Sign In</p>
                    </Link>
                )
            }
        </div>
    )
}
