import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import UserList from "./pages/UserList/UserList";
import { Profile } from "./pages/Profile/Profile";
import { AuthRedirect } from "./AuthRedirect";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthRedirect />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
