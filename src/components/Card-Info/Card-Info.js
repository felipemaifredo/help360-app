//Imports

//Style

//Assets

const CardInfo = ({text, image}) => {

    return (
        <>
            <div className='info-text-box'>
                <p className="info active-info">{text}</p>
            </div>
            <div className='info-img-box'>
                <img src={image} alt='Imagem' />
            </div>
        </>
    )
}

export default CardInfo;