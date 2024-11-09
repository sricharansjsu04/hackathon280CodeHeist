import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <div className={styles.headerLogin}>
          <h1>CMPE 280 HACKATHON</h1>
        </div>
        <div className={styles.login}>
          <header><h2>LOGIN</h2></header>
          <div className={styles.formElements}>
            <label htmlFor="username"><h4>Email_ID</h4></label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formElements}>
            <label htmlFor="password"><h4>Password</h4></label>
            <input type="password" name="password" />
          </div>
          <div className={styles.formElements}>
            <input onClick={onLogin} className={styles.buttonLogin} type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
