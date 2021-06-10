import React from "react";
import { Nav, Navbar, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./FooterStyles.css"

function FooterComponent() {
    return (
<Navbar className='footer-container' fixed='bottom'>

    <div className="footer-button">
    <DropdownButton
    key={"up"}
    id="dropdown-button-drop-up"
    drop={"up"}
    variant="secondary" 
    size="sm"
    title={'About'}>
        <Dropdown.Item href={'https://github.com/jxnprince/homebase'}>Repo</Dropdown.Item>
        <Dropdown.Item href={'https://github.com/jxnprince/homebase#readme'}>ReadMe</Dropdown.Item>
    </DropdownButton>
    </div>

    <div className="footer-button">
    <DropdownButton
    key={"up"}
    id="dropdown-button-drop-up"
    drop={"up"}
    variant="secondary" 
    size="sm"
    title={'Ashley Brown'}>
        <Dropdown.Item href={'https://www.linkedin.com/in/ashleybrown121389/'}>LinkedIn</Dropdown.Item>
        <Dropdown.Item href={'https://github.com/ashley-brown13'}>GitHub</Dropdown.Item>
    </DropdownButton>
    </div>

    <div className="footer-button">
        <DropdownButton
        key={"up"}
        id="dropdown-button-drop-up"
        drop={"up"}
        variant="secondary"
        size="sm"
        title={'Jackson Prince'}>
            <Dropdown.Item href={'https://www.linkedin.com/in/jackson-prince-4b3a637b/'}>LinkedIn</Dropdown.Item>
            <Dropdown.Item href={'https://github.com/jxnprince'}>GitHub</Dropdown.Item>
        </DropdownButton>
    </div>

        <div className="footer-button">
        <DropdownButton
        key={"up"}
        id="dropdown-button-drop-up"
        drop={"up"}
        variant="secondary"
        size="sm"
        title={'Maricio Harris'}>
            <Dropdown.Item href={'https://www.linkedin.com/in/maricio-harris-0547491b9/'}>LinkedIn</Dropdown.Item>
            <Dropdown.Item href={'https://github.com/maricio41'}>GitHub</Dropdown.Item>
        </DropdownButton>
    </div>

    <div className="footer-button">
        <DropdownButton
        key={"up"}
        id="dropdown-button-drop-up"
        drop={"up"}
        variant="secondary"
        size="sm" 
        title={'LaTanya Cheatam'}
        className="footer-button">
            {/* <Dropdown.Item href={'https://www.linkedin.com/'}>LinkedIn</Dropdown.Item> */}
            <Dropdown.Item href={'https://github.com/LaTCheatam'}>GitHub</Dropdown.Item>
        </DropdownButton>
    </div>

</Navbar>
        );
}

export default FooterComponent