import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './login_form.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => { 
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}/teams`} />;
  }

  return (
    <div id='loginFormPage'>
    <h1>Login Page</h1>
    <form onSubmit={onLogin} className='login-inputs'>
      <div className='the-errors'>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='email-container'>
        <label className='the-labels'
        htmlFor="email">Email</label>
        <input className='email-input'
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='password-container'>
        <label  className='the-labels' htmlFor="password">Password</label>
        <input 
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button className='login-btn' type="submit">Login</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
