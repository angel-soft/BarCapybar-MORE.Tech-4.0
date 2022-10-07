import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
		password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    navigate("/");
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
    <h2>Зарегистрируйте свой аккаунт</h2>
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

    <p>Уже есть аккаунт?</p>
    <Link className="nav-item-link" to="/login">Войти</Link>
  </div>
  </div>
  );
}

export default Auth;