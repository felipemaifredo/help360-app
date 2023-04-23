//Styles
import './style-section5.css';

//Assets

const Section5 = () => {
    return (
        <section id='sec5' className='section'>
           <div className='dash-box-sec5'>
                <div className='box-top'>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                </div>
                <div className='box-bottom'>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                    <div className='dash-card'></div>
                </div>   
           </div>
           <div className='text-box-sec5'>
                <h2>Com nossa dash, você terá total visão de seus atendimentos em aberto, encerrados, tickets, TME e TMA de sua equipe!</h2>
                <a href='#'>Contratar</a>
           </div>
        </section>
    )
}

export default Section5;