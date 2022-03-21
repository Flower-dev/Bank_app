import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { setInfos, setToken } from '../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Navbar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const firstName = useSelector((state) => state.user.infos.firstName);
    const token = useSelector((state) => state.user.token);

    const onSignOut = () => {
        dispatch(setToken(''));
        dispatch(setInfos({}));
        history.push('/');
    }

    return (
        <div className='main-nav'>
            {/* <Link to={`/`} className='main-nav-logo'> */}
                <Logo/>
            {/* </Link>
            {
                token ?
                    (
                        <div className='nav'>
                            <Link to={`/profile`} className='main-nav-item'>
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
                        <Link to={`/login`} className='main-nav-item'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <p className='nav-text'>Sign In</p>
                        </Link>
                    )
            } */}
        </div>
    )
}
