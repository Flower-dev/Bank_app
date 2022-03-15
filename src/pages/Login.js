import { login } from '../hooks/useAuth'
// components
import LoginForm from '../components/LoginForm';
// custom
import '../custom/pages/login.scss';

export default function Login() {
    return (
        <div className='main bg-dark'>
            <LoginForm login={login}/>
        </div>
    )
}