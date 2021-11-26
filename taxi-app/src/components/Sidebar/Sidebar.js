import React, {useState, useEffect} from 'react';
import { NavClientData } from '../NavigationData/NavClientData';
import {
  SidebarContainer,
  SidebarItems,
  SidebarText,
  SidebarLink,
  SidebarSpan
} from './Sidebar.elements';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {
    return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <SidebarContainer>
        <SidebarItems>
          {NavClientData.map((item, index) => {
            return (
              <SidebarText key={index}>
                <SidebarLink to={item.path}>
                  {item.icon}
                  <SidebarSpan>{item.title}</SidebarSpan>
                </SidebarLink>
              </SidebarText>
            );
          })}
        </SidebarItems>
      </SidebarContainer>
    </IconContext.Provider>

  )
}

export default Sidebar;