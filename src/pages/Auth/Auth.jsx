import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Auth.css";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useStore();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    if(store.getState().root.isAuth) {
      toast.success(`Привет, ${store.getState().root.user.name}`);
      navigate("/");
    } else {
      toast.error("Ошибка");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <video autoPlay muted loop id="video_background">
        <source src="/video/cosmos.webm" type="video/webm" />
      </video>
      <div className="container-wrap">
        <div className="form-wrapper">
          <h2>Войти в сервис</h2>
          <form name="auth" onSubmit={handleSubmit} autoComplete={"on"}>
            <div className="card-input">
              <label htmlFor="login" className="card-input__label">
                Имя
              </label>
              <input
                autoComplete="on"
                type="text"
                name="login"
                id="login"
                className="card-input__input"
                value={formData.login}
                onChange={handleChange}
              />
            </div>
            <div className="card-input">
              <label htmlFor="password" className="card-input__label">
                Пароль
              </label>
              <input
                autoComplete="on"
                name="password"
                type="password"
                id="password"
                className="card-input__input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;
