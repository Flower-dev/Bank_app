import { useState } from 'react';
import axios from 'axios';
// react form 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// custom 
import '../custom/loginForm.scss';


const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(SignupSchema)
      });
    
      const [role, setRole] = useState("tech");
      const [resStatus, setResStatus] = useState("");
    
      const onSubmit = (data) => {
        data.role = role;
        console.log(data);
    
        axios
          .post('http://localhost:3001/user/login', data)
          .then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
              setResStatus("Successful Registration!");
            } else {
              setResStatus("error");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    
      console.log(resStatus);
    
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