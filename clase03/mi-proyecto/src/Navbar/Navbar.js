import React from 'react'
import "./Navbar.css";
import NavbarItem from './NavbarItem/NavbarItem';
function Navbar() {
    return (
        <nav>
            <ul className="main-nav">
                <NavbarItem texto="ADMIN"/>
                <NavbarItem texto="Pages"/>
                <NavbarItem texto="Charts"/>
                <NavbarItem texto="Tables"/>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
            </ul>
        </nav>
    )
}

export default Navbar