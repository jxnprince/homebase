import React, { useState } from 'react';
import { useHistory } from 'react-router-dom' 
import './NavBar.css'
import LogoutButton from '../auth/LogoutButton';
import { NavDropdown } from 'react-bootstrap';
import  { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session"


const NavigationBar = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  
  const guestLogin = () => {
    dispatch(login("demo@aa.io", "password"))
    history.push(`/users/1/teams`)
  }

  if (!user){
    return (
      <div className='whole-nav'>
      
        <div className='left-item'>
          <a href='/' exact="true" className="active-home">
            <img src='https://i.imgur.com/sEtt2fu.png' id='header-logo'/>
          </a>
        </div>
        <div id='nav-spacer'/>
        
        <div className='right-items'>
          <a href='/login' exact="true" className="active-gst-login">Login</a>
          <a onClick={guestLogin} exact="true" className="active-login">Guest Login</a>
          <a href='/sign-up' exact="true" className="active-signup">Sign Up</a>
        </div>
  
      </div>
    )
  }else{
    return (
      <div className='whole-nav'>
        <div className='left-item'>
          <a href='/' exact="true" className="active-home">
            <img src='https://i.imgur.com/sEtt2fu.png' id='header-logo'/>
          </a>
        </div>

        <div id='nav-spacer-main'/>

        <div className='right-items'>
          <NavDropdown title={user.username} id="collasible-nav-dropdown">
            <NavDropdown.Item href={`/users/${user.id}/teams`}>{user.username}'s Dashboard</NavDropdown.Item>
            <NavDropdown.Item title='Logout'><LogoutButton /></NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
)
}
}

export default NavigationBar;