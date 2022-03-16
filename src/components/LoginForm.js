import { useState } from 'react';
// react form 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// routes
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";
// hooks
import  login  from '../hooks/useApi';
// custom 
import '../custom/loginForm.scss';



const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(SignupSchema)
      });
 
    
      const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = await login(email, password);
            if (token) {
                dispatch(setToken(token));
                navigate("/user");
            }
        } catch (e) {
            console.log(e);
        }
    }
   
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='sign-in-content'>
                    <i className='fa fa-user-circle sign-in-icon'></i>
                    <h1>Sign In</h1>
                    <div className='input-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' {...register('username')} />
                        {errors.username && <p>{errors.username.message}</p>}  
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' id='password' {...register('password')}/>
                        {errors.password && <p>{errors.username.password}</p>} 
                    </div>
                    <div className='input-remember'>
                        <input type='checkbox' id='remember-me' />
                        <label>Remember me</label>
                    </div>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </div>
            </form>
    )
}
