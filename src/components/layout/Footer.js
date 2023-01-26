/* eslint-disable react/jsx-no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import FooterNav from './partials/FooterNav';

import Image from '../elements/Image';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobilex',
    topOuterDivider && 'has-top-dividerx',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
      id={'foter'}
    >
      <div className="containersx">
        <div className={
          classNames(
            'site-footer-innersx',
            topDivider && 'has-top-dividers'
          )}>
          <div className="containesrx">
            
          
          </div>
          <div className="">
            <FooterNav />
              <Logo className='logof'/>
      
           
              <br/>
      <br />
      <br/><p className='pare'> 
                  Contacter Nous sur :   
                     </p>
            <div className="footer">
           
<div className='whatsap' >
<IoLogoWhatsapp  className='logoo' style={{color:	'#075E54'}}/>
                     <p className='par'> 
             +212778394667  
                     </p>
     
</div>
<div className='whatsap' >
<IoLogoWhatsapp  className='logoo' style={{color:	'#075E54'}}/>
                     <p className='par'> 
                +212719278139   
                     </p>
     
</div>
<div className='whatsap' >
<IoMailSharp  className='logoo' style={{color:'yellowgreen'}}/>
                     <p className='par'> 
                sabori.hydrascript@gmail.com   
                     </p>
     
</div>
<div className='whatsap' >
<IoMailSharp  className='logoo' style={{color:'yellowgreen'}}/>
                     <p className='par'> 
                     elwa9i3.hydrascript@gmail.com  
                     </p>
     
</div>


<br/>
      <br />
      
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;