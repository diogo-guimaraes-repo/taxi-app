import React, {useState, useEffect} from 'react'
import Logo from '../../assets/logo.svg';
import { FaUserCircle, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
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
} from './Navbar.elements'
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
          <NavItemMobile>
              <NavLinks to='/requests'>
                My Requests
              </NavLinks>
            </NavItemMobile>
            <NavItemMobile>
              <NavLinks to='/wallet'>
                My Wallet
              </NavLinks>
            </NavItemMobile>
            <NavItemMobile>
              <NavLinks to='/profile-settings'>
                Profile Settings
              </NavLinks>
            </NavItemMobile>
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
                <NavDropMenuLink to='/requests'>My Requests</NavDropMenuLink>
                <NavDropMenuLink to='/wallet'>My Wallet</NavDropMenuLink>
                <NavDropMenuLink to='/profile-settings'>Profile Settings</NavDropMenuLink>
                <NavDropMenuLink onClick={logout} to='/'>Logout</NavDropMenuLink>
              </NavDropDown>
            </DropDown>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavbarUser