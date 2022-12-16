import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Pizza',
        path: '/team',
        icon: <FaIcons.FaPizzaSlice />
    },
    {
        title: 'Hamburger',
        path: '/tasks',
        icon: <FaIcons.FaHamburger />
    },
    {
        title: 'Contact',
        path: '/chats',
        icon: <FaIcons.FaUser />
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <FaIcons.FaRegChartBar />
    }
]
