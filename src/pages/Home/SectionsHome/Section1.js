//Styles
import './style-section1.css';

//Assets
import { Link } from 'react-router-dom';
import LogoHelp360Grande from '../../../assets/imgs/help360-logo-grande.png';


const Section1 = () => {
    return (
        <section id='sec1' className='section'>
            <img src={LogoHelp360Grande} alt='Logo Help360' />
            <h1>
                Seu Atendimento mais
                <span className="span-pai"> 
                    <span className="span-1">Fácil </span>
                    <span className="span-3">Acelerado </span>
                    <span className="span-2">Ágil </span>
                    <span className="span-4">Eficiente </span>
                </span>
            </h1>
            <div className='btns-box'>
                <Link to="/fale-conosco"> Teste Grátis </Link>
                <a href='#sec-contato'>Fale Conosco</a>
            </div>
        </section>
    )
}

export default Section1;