import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup_form.css'

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [user_avatar, setUser_Avatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateUser_avatar = (e) => {
    setUser_Avatar(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/users/${user.id}" />;
  }

  return (
    <div className='signupFormPage'>
    <h1 className='signup-title'>SignUp Page</h1>
    <form className='signup-inputs' onSubmit={onSignUp}>
      <div>
        <label>First Name</label>
        <input className='the-in'
          type="text"
          name="firstname"
          onChange={updateFirstname}
          value={firstname}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input className='the-in'
          type="text"
          name="lastname"
          onChange={updateLastname}
          value={lastname}
        ></input>
      </div>
      <div>
        <label>User Name</label>
        <input className='the-in'
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label className='email-in'>Email</label>
        <input className='the-in'
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label className='avatar-in'>User Avatar</label>
        <input className='the-in'
          type="text"
          name="user_avatar"
          onChange={updateUser_avatar}
          value={user_avatar}
        ></input>
      </div>
      <div>
        <label className='password-in'>Password</label>
        <input className='the-in'
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label className='rpt-password-in'>Confirm Password</label>
        <input className='the-in'
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpForm;
