import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { Redirect } from 'react-router-dom';
import './loginbutton.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = (e) => {
    dispatch(logout());
    return <Redirect to="/" exact={true}/>
  };

  return <button onClick={onLogout} id="logout-btn">Logout</button>;
};

export default LogoutButton;
