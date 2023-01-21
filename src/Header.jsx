import React from 'react';
import CSS from './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="header_top">
                <div className='header__logo-container'>
                    <img className='header__logo' src="logo.png" alt="Logo" />
                </div>

                <div className='header__search-container'>
                    <input className='header__search' type="text" placeholder="Search" />
                </div>

                <div className="header_link-conteiner">
                    <a href="/">Cadastre-se</a>

                    {/* será necessário cirar o componente BOTAO */}
                    <a className='header-btn' href="/">ENTRAR</a>
                </div>

                <div className="header_kart-conteiner">
                    <img className="header_kart" src="logo.png" alt="Logo" />
                </div>
            </div>

            <div className="header_bottom">
                <nav className='header__nav-container'>
                    <ul className='header__nav-menu'>
                        <li className='header__nav-item'>Home</li>

                        <li className='header__nav-item'>Produtos</li>

                        <li className='header__nav-item'>Categorias</li>

                        <li className='header__nav-item'>Meus Produtos</li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;