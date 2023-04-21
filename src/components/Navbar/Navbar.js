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
            <button className='btn-menu' onClick={toggleMenu}>
                <span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
            </button>
            <ul className='nav-menu'>
                <li className='nav-menu-itens'>
                    {isHome ? ( <a href='#sec1' className='navigation-link' > Produtos </a> ) : ( <Link to="/" > Produtos </Link> )}
                </li>
                <li className='nav-menu-itens'>
                    {isHome ? ( <a href='#ClientsSection' className='navigation-link'>Feedbacks</a> ) : ( <Link to="/">Feedbacks</Link> )}
                </li>
                <li className='nav-menu-itens'>
                    {isHome ? ( <a href='#sec6' className='item-destaque-menu navigation-link'>Teste Grátis</a> ) : ( <Link to="/" className='item-destaque-menu'>Teste Grátis</Link> )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
