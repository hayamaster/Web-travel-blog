import React from 'react';
import * as BsIcons from 'react-icons/bs';
import { IoIosAirplane } from "react-icons/io";

export const SidebarData = [
  {
    title: 'Home',
    path: `${process.env.PUBLIC_URL}/`,
    icon: <BsIcons.BsFillHouseDoorFill />,
    Name: 'nav-text'
  },
  {
    title: 'Domestic',
    path: '/domestic',
    icon: <IoIosAirplane />,
    Name: 'nav-text'
  },
  {
    title: 'International',
    path: '/international',
    icon: <IoIosAirplane />,
    // icon: <BsIcons.BsFillInfoCircleFill />,
    Name: 'nav-text'
  }
];