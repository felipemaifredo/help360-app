//Imports

//Style
import './style-nav.css';

//Assets
import LogoHelp360 from '../../assets/imgs/help360-logo.png';

const Navbar = () => {
    
    const toggleMenu = () => {
        document.querySelector('nav').classList.toggle('nav-menu-active');
    }

    return (
        <nav>
            <a href='#sec1' className='link-img-nav'> 
                <img src={LogoHelp360} className='img-nav' alt='Logo da Help 360' />
            </a>
            <button className='btn-menu' onClick={toggleMenu}>
                <span className="line line1"></span>
				<span className="line line2"></span>
				<span className="line line3"></span>
            </button>
            <ul className='nav-menu'>
                <li className='nav-menu-itens'><a href='#sec-produtos'>Produtos</a></li>
                <li className='nav-menu-itens'><a href='#sec-feedbacks'>Feedbacks</a></li>
                <li className='nav-menu-itens'><a href='#sec-teste' className='item-destaque-menu'>Teste Grátis</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;