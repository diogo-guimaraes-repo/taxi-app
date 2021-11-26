import React, {useState, useEffect} from 'react';
import Logo from '../../assets/logo.svg';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavClientData } from '../NavigationData/NavClientData';
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItemMobile,
  NavLinks,
  NavDropDown,
  NavDropMenuLink,
  NavDropDownBtn,
  DropDown,
  NavbarSpan
} from './Navbar.elements';
import { useLogout } from '../../config/auth';


const NavbarUser = ({user}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const logout = useLogout();

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
            <NavIcon src={Logo}/>
            TAXIRICARDO
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaUserCircle/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {NavClientData.map((item, index) => {
              return (
                <NavItemMobile key={index}>
                  <NavLinks to={item.path}>
                    {item.icon}
                    <NavbarSpan>{item.title}</NavbarSpan>
                  </NavLinks>
                </NavItemMobile>
              );
            })}
            <NavItemMobile>
              <NavLinks onClick={logout} to='/'>
                Logout
              </NavLinks>
            </NavItemMobile>
            <DropDown>
              <NavDropDownBtn>
                {user.firstName}
              </NavDropDownBtn>
              <NavDropDown>
                {NavClientData.map((item, index) => {
                  return (
                      <NavDropMenuLink to={item.path}>
                        {item.title}
                      </NavDropMenuLink>
                  );
                })}
                <NavDropMenuLink onClick={logout} to='/'>Logout</NavDropMenuLink>
              </NavDropDown>
            </DropDown>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
};

export default NavbarUser;