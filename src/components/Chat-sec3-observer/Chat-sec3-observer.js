//Imports
import { useInView } from "react-intersection-observer";

//Styles
import './Chat-sec3-observer.css';

//Assets

const Sec3Observer = ({ title, flipped }) => {

    const { ref, inView } = useInView({
        threshold: 0.9,
    })

    const renderContent = () => {
        if (!flipped) {
            return (
              <>
                <div className="mensagem-box">
                  <p className='mensagem' dangerouslySetInnerHTML= {{ __html: title }} />
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="mensagem-box messageFlipd">
                  <p className='mensagem' dangerouslySetInnerHTML= {{ __html: title }} />
                </div>
              </>
            );
          }
      };

    return (
        <div className={ inView ? "message-box message-active" : "message-box" } ref={ref}>
            {renderContent()} 
        </div>
    )
}

export default Sec3Observer;