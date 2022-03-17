import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { setInfos, setToken } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const firstName = useSelector((state) => state.user.infos.firstName);
    const token = useSelector((state) => state.user.token);

    const onSignOut = () => {
        dispatch(setToken(''));
        dispatch(setInfos({}));
        navigate("/");
    }

    return (
        <div className="main-nav">
            <Link to={`/`} className="main-nav-logo">
                <Banner/>
            </Link>
            {
                token ?
                    (
                        <div className="nav">
                            <Link to={`/profile`} className="main-nav-item">
                                <FontAwesomeIcon icon={faUserCircle} />
                                <p className="nav-text">{firstName}</p>
                            </Link>

                            <div onClick={onSignOut} className="main-nav-item">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                <p className="nav-text">Sign Out</p>
                            </div>
                        </div>
                    ) :
                    (
                        <Link to={`/login`} className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <p className="nav-text">Sign In</p>
                        </Link>
                    )
            }
        </div>
    )
}
