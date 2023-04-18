//Imports
import Sec3Observer from '../../../components/Chat-sec3-observer/Chat-sec3-observer';

//Styles
import './style-section3.css';

//Assets

const Section3 = () => {
    
    return (
        <section id='sec3' className='section'>
           <div className='text-box-sec3'>
                <h2>
                    Melhore a performance de seus atendimentos, <br></br>
                    centralizando tudo em apenas um lugar!
                </h2>
                <a href='#contato'>Solicitar Atendimento</a>
           </div>
           <div className='cel-box-sec3' >
                <div className='cel-box'> 
                   <Sec3Observer title={'Oi, Boa Tarde! Estou interessada em suas soluções. Poderiam me explicar um pouco mais, por favor?'} flipped={true} classTitle={'messageFlipd'}/>
                   <Sec3Observer title={'Olá! <br> Sou o HelpBot, seu assistente de vendas e estou aqui para explicar sobre nossos produtos!'} />
                   <Sec3Observer title={'Com a Help360, você terá toda a agilidade na palma de sua mão, você terá mais agilidade em sua empresa, assim, entregando a melhor experiência de atendimento para seus clientes'} />
                   <Sec3Observer title={`
                        Nossas soluções são:<br>
                        <b>Whatsapp:</b> gerencia suas conversas e grupos, tudo isso de uma forma muito mais fácil.<br>
                        <b>ChatBot:</b> Colete os dados dos clientes, segmente a demanda para a equipe responsável e no final, temos pesquisa de NPS.<br>
                        <b>Ticket:</b> todas as tratativas internas organizadas por fila e responsáveis.
                    `} />
                   <Sec3Observer title={'Nossa que incrível!!! Quero contratar Agora!'} flipped={true} classTitle={'messageFlipd'}/>
                </div>
           </div>
        </section>
    )
}

export default Section3;