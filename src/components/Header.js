import React, { Component } from 'react';
import '../master.css';
import './header.css';
import logo from './logo.png';

function Header(props) {
    return (
        <header>
            <img src={logo} className='logo' alt='Website logo'/>
            <h1>Project Task Manager</h1>
        </header>
    );
}

export default Header;