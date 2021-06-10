import React from "react";
import {  useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import "./splashpage.css";

function Splashpage(){
  const user = useSelector(state => state.session.user);
  if (user) return <Redirect to={`/users/${user.id}/teams`} />;

  return (
  <div className="Splash-page">
    <img src='https://i.imgur.com/0PKgYt8.png' id='splash-logo' />
    <h4 className='splash-blurb'>The perfect home for your family or team to get projects completed</h4>
  </div>
  )
};

export default Splashpage;