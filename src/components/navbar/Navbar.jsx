import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';
import * as Scroll from 'react-scroll';


const Navbar = () => {
      let Link = Scroll.Link;
      const [toggleMenu, setToggleMenu] = useState(false);

      return (
            <div className="gpt3__navbar">
                  <div className="gpt3__navbar-links">
                        <div className="gpt3__navbar-links_logo">
                              <img src={logo} alt="logo" />
                        </div>
                        <div className="gpt3__navbar-links_container">
                              <Link spy={true} to="home" duration={1000} smooth={true}>
                                    <p>Home</p>
                              </Link>
                              <Link spy={true} to="wgpt3" duration={1000} smooth={true}>
                                    <p>What is GPT3?</p>
                              </Link>
                              <Link spy={true} to="features" duration={1000} smooth={true}>
                                    <p>Case Studies</p>
                              </Link>
                              <Link spy={true} to="possibility" duration={1000} smooth={true}>
                                    <p>Open AI</p>
                              </Link>

                              <Link spy={true} to="blog" duration={1000} smooth={true}>
                                    <p>Library</p>
                              </Link>
                        </div>
                  </div>
                  <div className="gpt3__navbar-sign">
                        <p>Sign in</p>
                        <button type="button">Sign up</button>
                  </div>
                  <div className="gpt3__navbar-menu">
                        {toggleMenu
                              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                        {toggleMenu && (
                              <div className="gpt3__navbar-menu_container scale-up-center">
                                    <div className="gpt3__navbar-menu_container-links">
                                          <p><a href="#home">Home</a></p>
                                          <p><a href="#wgpt3">What is GPT3?</a></p>
                                          <p><a href="#possibility">Open AI</a></p>
                                          <p><a href="#features">Case Studies</a></p>
                                          <p><a href="#blog">Library</a></p>
                                    </div>
                                    <div className="gpt3__navbar-menu_container-links-sign">
                                          <p>Sign in</p>
                                          <button type="button">Sign up</button>
                                    </div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Navbar;
