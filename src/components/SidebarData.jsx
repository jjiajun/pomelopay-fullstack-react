import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <AiIcons.AiFillHome size="20"/>,
  },
  {
    title: 'Transactions',
    icon: <FaIcons.FaExchangeAlt size="20"/>,
  },
  {
    title: 'Customers',
    icon: <IoIcons.IoMdPeople size="20" />,
  },
  {
    title: 'Products',
    icon: <FaIcons.FaCartPlus size="20"/>,
  },
  {
    title: 'Settings',
    icon: <IoIcons.IoMdSettings size="20" />,
  }
]