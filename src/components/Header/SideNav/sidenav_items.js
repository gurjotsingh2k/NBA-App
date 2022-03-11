import React from "react";
import './sideNav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNewspaper, faPlay, faSignInAlt, faSignOutAlt, faClipboard } from "@fortawesome/free-solid-svg-icons";

const SideNavItems = () => {

    const items = [
        {
            type: 'option',
            icon: faHome,
            text: 'Home',
            link: '/',
        },
        {
            type: 'option',
            icon: faNewspaper,
            text: 'News',
            link: '/news',
        },
        {
            type: 'option',
            icon: faPlay,
            text: 'Videos',
            link: '/videos',
        }
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon className="icon" icon={item.icon} />
                        <span>{item.text}</span>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className="container">
            {showItems()}
        </div>
    )
}

export default SideNavItems;