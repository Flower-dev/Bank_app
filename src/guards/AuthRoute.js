import React from "react";
import {
    Route,
    Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRoute(props) {
    const { path, children } = props;
    const token = useSelector((state) => state.user.token);
    if (token) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        )
    }
    return <Navigate to="/login" />
}
