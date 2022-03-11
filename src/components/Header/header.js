import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav/sidenav";

const Header = (props) => {

    const navBars = () => (
        <div className="bars">
            <FontAwesomeIcon className="icon" icon={faList} onClick={props.onOpenNav} />
        </div>
    )

    const logo = () => {
        return (
            <Link to="/" className="logo">
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    return (
        <header className="header">
            <SideNav {...props}/>
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;