import * as React from "react";
// routes
import { BrowserRouter, Switch, Route } from "react-router-dom";
// autorization
import AuthRoute from "./guards/AuthRoute";
// pages
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
// components
import Navbar from './layouts/Navbar';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
        <div className="container">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <AuthRoute>
                <User />
              </AuthRoute>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

