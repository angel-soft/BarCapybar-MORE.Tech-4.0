import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
		email: "",
		password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));

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
      <label htmlFor="first_name" className="card-input__label">Имя</label>
          <input type="text" name="first_name" id="first_name" className="card-input__input" value={formData.first_name}
            onChange={handleChange} />
        </div>
      <div className="card-input">
      <label htmlFor="last_name" className="card-input__label">Фамилия</label>
          <input type="text" name="last_name" id="last_name" className="card-input__input" value={formData.last_name}
            onChange={handleChange} />
        </div>
      <div className="card-input">
          <label htmlFor="email" className="card-input__label">Email</label>
          <input className="card-input__input" name="email" id="email" value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="card-input">
          <label htmlFor="password" className="card-input__label">Пароль</label>
          <input name="password" type="password" id="password" className="card-input__input" value={formData.password}
            onChange={handleChange} />
        </div>
      <div className="card-input">
        <label htmlFor="phone" className="card-input__label">Телефон</label>
        <input name="phone" type="text" id="phone" className="card-input__input" value={formData.phone}
            onChange={handleChange} />
        </div>
      <button className="btn">Зарегистрироваться</button>
    </form>

    <p>Уже есть аккаунт?</p>
    <Link className="nav-item-link" to="/login">Войти</Link>
  </div>
  </div>
  );
}

export default Signup;