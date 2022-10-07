import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SmoothScroll from "smooth-scroll";
import Main from "./pages/Main/Main"
import Auth from "./pages/Auth/Auth"
import { AuthRedirect } from "./AuthRedirect";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


function App() {

  return (
    <BrowserRouter>
    <AuthRedirect />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/login" element={<Auth />}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;


