
import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import './Slideshow.css'
import Im1 from './../../assets/images/1.png'
import Im2 from './../../assets/images/2.png'
import Im3 from './../../assets/images/3.png'
import Im4 from './../../assets/images/4.png'
const colors = ["#FFFFFF00", "#FFFFFF00", "#FFFFFF00", "#FFFFFF00"];
const delay = 6000;


const script = ["Développement des logiciel\n Applications Mobiles  Et sites web  ","Formation En Hydrologie && \n Hydraulique et Génie civil","Etude Technique En Hydraulique  \n Vrd  et Génie civil","Désign && Montage Vidéo \n Et Affiches   de Publicité"];
const img = [Im1,Im2,Im3,Im4];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" id='ac'>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {script.map((index) => (
          <div
        

            className="slide"
            key={index}
            
          >
       <div className='parag'>
        
            {index}
         
            </div>
          
          </div>
        ))}
          <div >
        {img.map((index) => (
          <div
        

            className="slide"
            key={index}
            
          >
       <div className='image'>
       <img src={index} />
          
         
            </div>
          
          </div>
        ))}
          </div>
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;