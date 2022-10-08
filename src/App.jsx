import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import { Profile } from "./pages/Profile/Profile";
import { AuthRedirect } from "./AuthRedirect";
import { Navigation } from "./components/navigation";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Marketplace from "./pages/Marketplace/Marketplace";

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
          <Route path="/login" element={<Auth />} />
          <Route
            path="/users"
            element={
              <>
                <Navigation />
                <UserList />
              </>
            }
          />
        <Route
            path="/users/:userId"
            element={
                <>
                    <Navigation />
                    <User/>
                </>
            }
        />
            <Route
                path="/marketplace"
                element={
                    <>
                        <Navigation />
                        <Marketplace/>
                    </>
                }
            />
          <Route
            path="/profile"
            element={
              <>
                <Navigation />
                <Profile />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Main />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-left" />
    </>
  );
}

export default App;
