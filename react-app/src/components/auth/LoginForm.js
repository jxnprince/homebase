import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './login_form.css'
// import './login_form_dark.css'

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
  <div id='login-page'>
    <div id='loginFormPage'>
      <form onSubmit={onLogin} className='login-inputs'>
        <h3>Log in</h3>
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
        </div>
        <button className='login-btn' type="submit">Login</button>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;
