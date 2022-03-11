import LogoImg from '../assets/img/argentBankLogo.png';
// custom 
import '../custom/logo.scss';

export default function Logo() {

    return (
        <div className='main-nav-logo-image'>
            <img src={LogoImg} alt='logo'/>
        </div>
    )
}