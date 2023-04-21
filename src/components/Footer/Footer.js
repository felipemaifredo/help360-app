//Imports
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

//Style
import './style-footer.css';

//Assets
import LogoHelp360 from '../../assets/imgs/help360-logo-grande.png';
import LogoNovaya from '../../assets/imgs/novaya.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
                <div className='img-box-footer'>
                    <img src={LogoHelp360} className='img-novaya' alt='Logo da Help360' />
                </div>
                <div className='content-box-footer'>
                    <div className='colum-content'>
                        <h3 className='colum-content-title'>A Help 360</h3>
                        <Link to='/quem-somos' className='colum-content-item'>Quem Somos</Link>
                        <a href='#' className='colum-content-item'>Produtos</a>
                        <a href='#' className='colum-content-item'>Cases de Sucesso</a>
                        <a href='#' className='colum-content-item'>Avalie a Help360</a>
                        <a href='#' className='colum-content-item'>Trabalhe Conosco</a>

                    </div>
                    <div className='colum-content'>
                        <h3 className='colum-content-title'>Contato</h3>
                        <a href='#' className='colum-content-item'>Suporte</a>
                        <div className="social">
                            <a href="#" target="_blanck"><BsFacebook className="social-icon" /></a>
                            <a href="#" target="_blanck"><BsInstagram className="social-icon" /></a>
                            <a href="#" target="_blanck"><BsLinkedin className="social-icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='novaya-box'>
                <a href='https://www.instagram.com/novaya.on/' target='_blanck'>
                    <img src={LogoNovaya} className='img-novaya' alt='Logo da Novaya' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;