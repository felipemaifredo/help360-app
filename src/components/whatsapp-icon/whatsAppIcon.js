//Imports

//Style
import './whatsAppIcon.css';

//Assets
import wppIcon from '../../assets/imgs/wpp-icon.png'

const WppNumber = '5528999519306';

const WhatsAppIcon = () => {

    let linkWpp = `https://api.whatsapp.com/send?phone=${WppNumber}&text=Ol%C3%A1,%20%20Tenho%20interesse%20em%20conhecer%20a%20Help360.`;

    return (
        <div className='whatsapp-box'>
          <a href={linkWpp} target='_blank' rel="noreferrer"><img src={wppIcon} alt='Icone de WhatsApp' /></a>
        </div>
    )
}

export default WhatsAppIcon;