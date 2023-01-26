/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Im1 from './../../assets/images/icc1.png'
import Im2 from './../../assets/images/icc2.png'
import Im3 from './../../assets/images/icc3.png'
import Im4 from './../../assets/images/icc4.png'


import Slider from './Slider';

import background from "./../../assets/images/hydra.jpg";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const bands = ({

}) => {

 



  return (
    <section >
         <div className='bandcontainer' >
        <div className='band1'>
        <img src={Im1} className='imaj31'/>
       
        <div className='hb11'  >+100 clients</div >
     
 
  </div >
  <div className='band2'>
  <img src={Im2} className='imaj31'/>
  <div className='hb11'  >+10 projets réalisés
 </div >

     
 
  </div >
  <div className='band3'>
  <img src={Im3} className='imaj31'/>
      
        <div className='hb11'  >99% clients satisfaits

 </div >
      
 
  </div >

  <div className='band3'>
  <img src={Im4} className='imaj31'/>

        <div className='hb11'  >+5 ans d'experience

 </div >
      
 
  </div >
  


  
  </div>


    </section>
  );
}



export default bands;