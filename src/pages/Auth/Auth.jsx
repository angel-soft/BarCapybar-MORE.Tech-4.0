import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import "./Auth.css";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.root.isAuth);
  const [formData, setFormData] = useState({
    login: "",
		password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    setTimeout(() => { 
      if(isAuth) {
        toast("Вы успешно зарегистрированы");
        navigate("/");
      } else {
        toast("Ошибка");
      }
    }, 1000);
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
    <div className="container-wrap">
    <div className="form-wrapper">
    <h2>Войти в сервис</h2>
    <form onSubmit={handleSubmit}>
      <div className="card-input">
      <label htmlFor="login" className="card-input__label">Имя</label>
          <input type="text" name="login" id="login" className="card-input__input" value={formData.login}
            onChange={handleChange} />
        </div>
        <div className="card-input">
          <label htmlFor="password" className="card-input__label">Пароль</label>
          <input name="password" type="password" id="password" className="card-input__input" value={formData.password}
            onChange={handleChange} />
        </div>
      <button className="btn">Войти</button>
    </form>
  </div>
  </div>
  );
}

export default Auth;