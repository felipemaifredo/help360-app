//Imports
import React, { useState } from "react";

//Style
import './style-nav.css';

//Assets
import LogoHelp360 from '../../assets/imgs/help360-logo.png';

const Navbar = () => {
    return (
        <nav>
            <a href='#sec1' className='link-img-nav'> 
                <img src={LogoHelp360} className='img-nav' alt='Logo da Help 360' />
            </a>
            <ul className='nav-menu'>
                <li className='nav-menu-itens'><a href='#sec-produtos'>Produtos</a></li>
                <li className='nav-menu-itens'><a href='#sec-feedbacks'>Feedbacks</a></li>
                <li className='nav-menu-itens'><a href='#sec-teste' className='item-destaque-menu'>Teste Grátis</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;