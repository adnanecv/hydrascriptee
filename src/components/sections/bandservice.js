/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Im1 from './../../assets/images/ic1.png'
import Im2 from './../../assets/images/ic2.png'
import Im3 from './../../assets/images/ic3.png'
import Im4 from './../../assets/images/ic4.png'


import Slider from './Slider';

import background from "./../../assets/images/hydra.jpg";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const band = ({

}) => {

 



  return (
    <section >
         <div className='bandcontainer' >
        <div className='band1'>
        <img src={Im3} className='imaj3'/>
        <h1 className='hb'  >  Développement</h1 >
        <div className='hb1'  >Optimiser le Temps </div >
     
 
  </div >
  <div className='band2'>
  <img src={Im1} className='imaj3'/>
        <h1 className='hb' >  Etude Technique</h1 >
        <div className='hb1'  >Réaliser vos plans </div >

     
 
  </div >
  <div className='band3'>
  <img src={Im2} className='imaj3'/>
        <h1 className='hb'  >Formation </h1 >
        <div className='hb1'  >Booster votre Savoir Faire </div >
      
 
  </div >

  <div className='band3'>
  <img src={Im4} className='imaj3'/>
        <h1 className='hb'  >Désigne </h1 >
        <div className='hb1'  >Améliorer votre produit </div >
      
 
  </div >
  


  
  </div>


    </section>
  );
}



export default band;