import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.nav`
  background-color: #021c00;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: 850ms;

  @media screen and (max-width: 960px) {
  display: none;
}
`;

export const SidebarItems = styled.ul`
  width: 100%;
`;

export const SidebarText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #1a83ff;
  }
`;

export const SidebarSpan = styled.span`
  margin-left: 16px;
`;
