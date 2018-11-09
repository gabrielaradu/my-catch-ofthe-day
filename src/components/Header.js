import React from "react";
import logo from "../images/logo.svg";
import '../css/App.css';

const Header = props => (
    <header className="App-header">
        <img id="logo" src={logo} className="App-logo" alt="logo"/>
        <p id="title">
            Welcome to the fish market
        </p>
    </header>
);
export default Header;