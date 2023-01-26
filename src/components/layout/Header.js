import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-scroll';
import Logo from './partials/Logo';
import styled from 'styled-components'

const NavButton = styled(Link)`
  color : #fff !important;
  font-weight : 700;
  font-size : 20px;
  padding: 0 24px;
`

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="containernav" id='he'>
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li
                    >
                      <NavButton Link to={'he'} spy={true} smooth={true}  offset={50} duration={500}  onClick={closeMenu}>Acceuill</NavButton>
                    </li>
                    <li>
                      <NavButton Link to={'quisomme'} spy={true} smooth={true}  offset={50} duration={500} onClick={closeMenu}>Qui somme nous ?</NavButton>
                    </li>
                    <li>
                      <NavButton Link to={'service'} spy={true} smooth={true}  offset={50} duration={500}onClick={closeMenu}>Nos services </NavButton>
                    </li>
                    <li>
                      <NavButton Link to={'hydro'} spy={true} smooth={true}  offset={50} duration={500} onClick={closeMenu}>Nos produits</NavButton>
                    </li>
                    <li>
                      <NavButton Link to={'dise'} spy={true} smooth={true}  offset={50} duration={500} onClick={closeMenu}>Que disent sur nous ?</NavButton>
                    </li>
                    <li>
                      <NavButton Link to={'foter'} spy={true} smooth={true}  offset={50} duration={500} onClick={closeMenu}>Nous contacter</NavButton>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
