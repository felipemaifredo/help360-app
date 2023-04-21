//Styles
import './style-section4.css';

//Assets
import img1 from '../../../assets/coisas/1.png'
import img2 from '../../../assets/coisas/2.png'
import img3 from '../../../assets/coisas/3.png'
import img4 from '../../../assets/coisas/4.png'
import img5 from '../../../assets/coisas/5.png'

//Imports
import React, { useState } from 'react';
import CardInfo from '../../../components/Card-Info/Card-Info';

const Section4 = () => {
    const [buttonClicked, setButtonClicked] = useState(0);

    const handleButtonClick = (buttonIndex) => {
        setButtonClicked(buttonIndex);
    };
    return (
        <section id='sec4' className='section'>
           <div className='text-box-sec4'>
                <h2>Tudo em <strong>Apenas</strong> um <strong>Canal</strong></h2>
           </div>
           <div className='box-card-sec4'>
                <div className='card-sec4'>
                    <div className="button-container">
                        <button className={buttonClicked === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)} > WhatsApp </button> 
                        <button className={buttonClicked === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)} > Campanha </button>
                        <button className={buttonClicked === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)} > ChatBot </button>
                        <button className={buttonClicked === 3 ? 'active' : ''} onClick={() => handleButtonClick(3)} > Ticket </button>
                        <button className={buttonClicked === 4 ? 'active' : ''} onClick={() => handleButtonClick(4)} > Wiki </button>
                    </div>
                    {buttonClicked !== null && (
                        <div className="info-container">
                        {buttonClicked === 0 && (
                            <CardInfo text={'Amplie suas vendas com apenas um número de telefone e vários pontos de atendimento.'} image={img5} />
                        )}
                        {buttonClicked === 1 && (
                             <CardInfo text={'Enviar mensagens para toda a sua lista de contatos ou para listas de transmissões pré definidas de forma automatizada.'} image={img4} />
                        )}
                        {buttonClicked === 2 && (
                            <CardInfo text={' Segmente seus atendimentos, colete os dados do cliente e escalone para as equipes. Conte também com avaliador de NPS.'} image={img1} />
                        )}
                        {buttonClicked === 3 && (
                            <CardInfo text={'Gerencie a abertura de tickets, organizando por filas, equipes responsáveis e tempo de tratativa.'} image={img2} />
                        )}
                        {buttonClicked === 4 && (
                            <CardInfo text={'Central de ajuda com vídeo tutorial para facilitar o uso de nossa dash.'} image={img3} />
                        )}
                        </div>
                    )}
                </div> 
           </div>
        </section>
    )
}

export default Section4;