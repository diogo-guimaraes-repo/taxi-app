import React from 'react';

import { FaCarAlt, FaWallet, FaTools,  } from 'react-icons/fa';

export const NavClientData = [
  {
    title: 'My Requests',
    path:'/requests',
    icon: <FaCarAlt />,
  },
  {
    title: 'My Wallet',
    path:'/wallet',
    icon: <FaWallet />,
  },
  {
    title: 'Profile Settings',
    path:'/profile-settings',
    icon: <FaTools />,
  },
]