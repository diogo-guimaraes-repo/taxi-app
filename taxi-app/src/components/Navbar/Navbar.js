import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value ={{color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            TAXIRICARDO
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/about'>
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/faq'>
                FAQ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contacts'>
                Contact Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/sign-up'>
                Sign Up
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
              <NavBtnLink to="/sign-in">
                <Button primary>Sign In</Button>
              </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-in">
                  <Button fontBig primary>
                    Sign In
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar