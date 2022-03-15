import React from "react";
// react form 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// custom 
import '../custom/loginForm.scss';


const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

export default function LoginForm({ login }) {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = async (data) => {
        await login(data.username, data.password)
        reset()
    }
     
    console.log(errors);

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username")} />
                    {errors.username && <p>{errors.username.message}</p>}  
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" {...register("password")}/>
                    {errors.password && <p>{errors.username.password}</p>} 
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label>Remember me</label>
                </div>
                <button type="submit">Sign In</button>
        
        </div>
            </form>
    )
}