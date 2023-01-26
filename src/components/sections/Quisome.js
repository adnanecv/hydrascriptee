/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

import Slider from './Slider';

import background from "./../../assets/images/hydra.jpg";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Quisome = ({

}) => {

 



  return (
    <section className='quisomme' id={'quisomme'} >
        <div className='TextS'>

        <h2 className='sh2'>
            Qui somme nous ? 
  </h2 >
  <p >
  HydraScript  est une agence web  créé en 2017 ,  Il a pour vocation le développement des logiciels techniques en génie civil et hydraulique , des système de gestion de projet ,Développement des barres outils et Plug-in   , la création des sites web et les applications mobiles .Parmi les domaines d’expertise de la société la réalisation des études techniques en génie civil , hydrologie ,hydrauqlique , VRD ,l'aménagement hydrauqlique . HydraScripte propose des formations de qualité dans les domaines de son expertise  y compris  les logiciels techniques .HydraScript présente ses services  en désigne : La création des logos 2D/3D , les affiches de publictité et les  vidéos annimées . </p >
  </div >


  <div className='divimage'>

<img src={background} className='imaj'/>
  </div >
 


  



    </section>
  );
}



export default Quisome;