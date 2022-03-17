import * as React from "react";
// routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Navbar/>
      <BrowserRouter>
        <div className="container" type="guest">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <User />
                </AuthRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

