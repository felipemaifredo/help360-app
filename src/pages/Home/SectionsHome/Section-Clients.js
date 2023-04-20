//Styles
import './style-section-clients.css';
//Assets
import person1 from '../../../assets/persons/1.png'
//Imports
import CardClient from '../../../components/Client-Card/Client-Card';
import { BsChevronCompactLeft } from "react-icons/bs";

const ClientsSection = () => {
    const productContainers = [...document.querySelectorAll('.container')];
    const nxtBtn = [...document.querySelectorAll('.Navigation-btn-right')];
    const preBtn = [...document.querySelectorAll('.Navigation-btn-left')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        })
    })

    return (
        <section id='ClientsSection' className='section'>

            <button className='Navigation-btn-left'> <BsChevronCompactLeft className='btn-icon-navigation' /> </button>

            <button className='Navigation-btn-right'> <BsChevronCompactLeft className='btn-icon-navigation' /> </button>

            <div className='container'>
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
                <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
            </div>
          
        </section>
    )
}

export default ClientsSection;