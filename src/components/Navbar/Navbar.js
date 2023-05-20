//Imports
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoHelp360 from '../../assets/imgs/help360-logo.png';
//Style
import './style-nav.css';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
        setAria()
    };

    const setAria = () => {
        let btnMenu = document.querySelector('.btn-menu');
        let Nav = document.querySelector('nav');
        let isActive = Nav.classList.contains('nav-menu-active');
        
        btnMenu.setAttribute('aria-expanded', !isActive);
        if (isActive) {
            btnMenu.setAttribute('aria-label', 'Abrir Menu');
        } else {
            btnMenu.setAttribute('aria-label', 'Fechar Menu');
        }
    }

    const verifyMenu = () => {
        let btnMenu = document.querySelector('.btn-menu');
        let btnMenuStyles = getComputedStyle(btnMenu);
        let isFlex = btnMenuStyles.display === 'flex';
        if (isFlex) {
            toggleMenu();
        };
    };

    const renderLink = (text, link, Tag) => {
        return (
            isHome ? (
              <a href={link} className="navigation-link" onClick={verifyMenu}> {text} </a>
            ) : (
              <Link to="/"> {text} </Link>
            )
        )
    };
      
    return (
        <nav className={`${isMenuActive ? 'nav-menu-active' : ''} ${isHome ? 'nav-menu-home' : ''}`}>
            {isHome ? (
                    <a href='#sec1' className='link-img-nav navigation-link'> 
                        <img href='#sec1' src={LogoHelp360} className='img-nav' alt='Logo da Help 360'  /> 
                    </a> 
                ) : ( 
                    <Link to="/" className='link-img-nav'> 
                        <img src={LogoHelp360} className='img-nav' alt='Logo da Help 360' /> 
                    </Link> 
                )}
            <button className='btn-menu' onClick={toggleMenu} aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                <span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
            </button>
            <ul className='nav-menu'>
                <li className='nav-menu-itens'>
                    {renderLink("Produtos", "#sec4" )}
                </li>
                <li className='nav-menu-itens'>
                    {renderLink("Feedbacks", "#ClientsSection" )}
                </li>
                <li className='nav-menu-itens item-destaque-menu'>  
                    <Link to="/fale-conosco"> Teste Grátis </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
