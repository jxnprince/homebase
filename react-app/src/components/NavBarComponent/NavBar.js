import React from 'react';
import './NavBar.css'
import LogoutButton from '../auth/LogoutButton';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import  { useDispatch, useSelector } from "react-redux";


const NavigationBar = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  if (!user){ 
    return (
      <Navbar className='color-nav' fixed='top'>
        <Container>
              <Nav>
                <Nav.Link href='/' exact={true} activeClassName="active">HomeBase</Nav.Link>
                <Nav.Link href='/login' exact={true} activeClassName="active">Login</Nav.Link>
                <Nav.Link href='/guest' exact={true} activeClassName="active">Guest Login</Nav.Link>
                <Nav.Link href='/sign-up' exact={true} activeClassName="active">Sign Up</Nav.Link>
              </Nav>
        </Container>
      </Navbar>
    )
  }else{ 
    return (
      <Navbar className='color-nav' fixed='top'>
        <Container>
              <Nav>
                <Nav.Link href='/' exact={true} activeClassName="active">HomeBase</Nav.Link>
                <NavDropdown title={user.username} id="collasible-nav-dropdown">
                  <NavDropdown.Item href='/'>{user.username}'s Dashboard</NavDropdown.Item>
                  <NavDropdown.Item title='Logout'><LogoutButton /></NavDropdown.Item>
                </NavDropdown>
              </Nav>
        </Container>
      </Navbar>
)
}
}

// const NavigationBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact={true} activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" exact={true} activeClassName="active">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <LogoutButton />
//         </li>
//       </ul>
//     </nav>
    
//   );
// }

export default NavigationBar;
