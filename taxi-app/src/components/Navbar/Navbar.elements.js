import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #276926;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled.img`
max-width: 4.5rem;
margin-top: 0.5rem;
max-height: 3.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display:block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 90vh;
  position: absolute;
  top: 80px;
  left: ${({click}) => (click ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #276926;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
  border-bottom: 2px solid #e0f78b;
}

@media screen and (max-width: 960px) {
 width: 100%;

 &:hover {
   border: none;
 }
}
`;

export const NavItemMobile = styled(NavItem)`
  display:none;

@media screen and (max-width: 960px) {
  display: block;
  width: 100%;

  &:hover {
  border: none;
 }
}
`

export const NavLinks = styled(Link)`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;

  &:hover {
    color: #e0f78b;
    transition: all 0.5s ease;
  }
}
`

export const NavDropDown = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  right: 15%;
  box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

export const NavDropDownBtn = styled.div`
  color: #fff;
  display:flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`
export const DropDown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${NavDropDown} {
    display: block;
  }

  @media screen and (max-width: 960px) {
  display: none;
}
`

export const NavDropMenuLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover{
    background-color: #ddd;
  }
`

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;