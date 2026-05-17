import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from '../Signup/Signup.module.css'


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'Имя обязательно';
    if (!formData.lastName) newErrors.lastName = 'Фамилия обязательна';
    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Здесь будет отправка данных на сервер
      console.log('Регистрация:', formData);
      // Перенаправление после успешной регистрации
      navigate('/profile');
    }
  };

  return (
    <div className={s.signupPage}>
      <div className={s.signupContainer}>
        <div className={s.signupHeader}>
          <h1>Авторизация</h1>
          <p>Начните работать с промптами прямо сейчас</p>
        </div>
 
        <form className={s.signupForm} onSubmit={handleSubmit}>

          <div className={s.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className={s.errorMessage}>{errors.email}</span>}
          </div>

          <div className={s.formGroup}>
            <label htmlFor="password">Пароль *</label>
            <div className={s.passwordInputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              <button
                type="button"
                className={s.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🔒'}
              </button>
            </div>
            {errors.password && <span className={s.errorMessage}>{errors.password}</span>}
          </div>

          <button type="submit" className={s.signupButton}>
            Войти
          </button>
        </form>

        <div className={s.signupFooter}>
          <p>
            Еще нет аккаунта? <Link to="/signup" className={s.link}>Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
