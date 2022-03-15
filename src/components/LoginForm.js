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

export default function LoginForm() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = async (data) => {
        // await login(data.username, data.password)
        reset()
    }
     
    console.log(errors);

    return (
        <div className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label>Username</label>
                    <input type="text" id="username" {...register("username")} />
                    {errors.username && <p>{errors.username.message}</p>}  
                </div>
                <div className="input-wrapper">
                    <label>Password</label>
                    <input type="text" id="password" {...register("password")}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label>Remember me</label>
                </div>
                <input type="submit" />
        
            </form>
        </div>
    )
}