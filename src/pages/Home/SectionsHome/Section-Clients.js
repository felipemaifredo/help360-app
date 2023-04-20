//Styles
import './style-section-clients.css';
//Assets
import person1 from '../../../assets/persons/1.png'
//Imports
import { useState, useRef } from 'react';
import CardClient from '../../../components/Client-Card/Client-Card';
import { BsChevronCompactLeft } from "react-icons/bs";


const ClientsSection = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleNextClick = () => {
    containerRef.current.scrollLeft += containerWidth;
  };

  const handlePrevClick = () => {
    containerRef.current.scrollLeft -= containerWidth;
  };

  const handleContainerResize = () => {
    const containerDimensions = containerRef.current.getBoundingClientRect();
    setContainerWidth(containerDimensions.width);
  };

  return (
    <section id='ClientsSection' className='section'>
      <button className='Navigation-btn-left' onClick={handlePrevClick}>
        <BsChevronCompactLeft className='btn-icon-navigation' />
      </button>
      <button className='Navigation-btn-right' onClick={handleNextClick}>
        <BsChevronCompactLeft className='btn-icon-navigation' />
      </button>
      <div className='container' ref={containerRef} onLoad={handleContainerResize} onResize={handleContainerResize}>
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
        <CardClient photo={person1} name={'Celso Lopes'} text={'A Help veio literalmente para dar um help nota 10!'} />
      </div>
    </section>
  );
};

export default ClientsSection;