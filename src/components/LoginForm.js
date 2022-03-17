import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slice";
// hooks
import useApi from "../hooks/useApi";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = await useApi.login(email, password);
            if (token) {
                dispatch(setToken(token));
                navigate("/profile");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email} onChange={onEmailChange}/>
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={onPasswordChange}/>
                        </div>

                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button onClick={onSubmit} className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </div>
    )
}
