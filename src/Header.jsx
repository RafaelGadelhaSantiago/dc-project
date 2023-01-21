import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header__logo-container">
                <img className="header__logo" src="logo.png" alt="Logo" />
            </div>

            <div className="header__search-container">
                <input className="header__search" type="text" placeholder="Search" />
            </div>

            <nav className="header__nav-container">
                <ul className="header__nav-list">
                    <li className="header__nav-item">Home</li>

                    <li className="header__nav-item">About</li>

                    <li className="header__nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;