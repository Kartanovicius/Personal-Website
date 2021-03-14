import React from 'react';
import style from './Navbar.module.css';

const NavBar = () =>    {
    return  (
        <nav className={style.navbar}>
            <h1>Donatas Kartanovičius</h1>
            <div className="hamburger"></div>
        </nav>
    );
}

export default NavBar;