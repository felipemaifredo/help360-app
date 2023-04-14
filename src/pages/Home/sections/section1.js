//Styles
import './style-section1.css';

//Assets
import LogoHelp360Grande from '../../../assets/imgs/help360-logo-grande.png';


const Section1 = () => {
    return (
        <section id='sec1' className='section'>
            <img src={LogoHelp360Grande} alt='Logo Help360' />
            <h1>
                Seu Atendimento mais
                <span class="span-pai"> 
                    <span class="span-1">Fácil</span>
                    <span class="span-3">Acelerado</span>
                    <span class="span-2">Ágil</span>
                    <span class="span-4">Eficiente</span>
                </span>
            </h1>
            <div className='btns-box'>
                <a href='#sec-teste'>Teste Grátis</a>
                <a href='#sec-contato'>Fale Conosco</a>
            </div>
        </section>
    )
}

export default Section1;