import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from './Signup.module.css'


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
          <h1>Создайте аккаунт</h1>
          <p>Начните работать с промптами прямо сейчас</p>
        </div>
 
        <form className={s.signupForm} onSubmit={handleSubmit}>
          <div className={s.formGroup}>
            <label htmlFor="firstName">Имя *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className={s.errorMessage}>{errors.firstName}</span>}
          </div>

          <div className={s.formGroup}>
            <label htmlFor="lastName">Фамилия *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className={s.errorMessage}>{errors.lastName}</span>}
          </div>

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

          <div className={s.formGroup}>
            <label htmlFor="confirmPassword">Подтвердите пароль *</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className={s.errorMessage}>{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className={s.signupButton}>
            Создать аккаунт
          </button>
        </form>

        <div className={s.signupFooter}>
          <p>
            Уже есть аккаунт? <Link to="/login" className={s.link}>Войти</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
