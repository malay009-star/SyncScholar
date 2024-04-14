import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../assets/images/logo.png"
import { expandedContext } from '../context/chatContext'
import "./layout.css"

function DefaltLauout({ children }) {
  const { expanded, setExpanded } = useContext(expandedContext)
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const navitem = [
    {
      label: 'Login',
      link: '/login'
    },
    {
      label: 'Signup',
      link: '/signup'
    },
    // {
    //   label: 'Email verification',
    //   link: '/emailverificode'
    // },
    // {
    //   label: 'Signup Password',
    //   link: '/signuppassword'
    // },
    {
      label: 'Task Details',
      link: '/taskdetails'
    },
    {
      label: 'Chatbox',
      link: '/chat'
    },
    {
      label: 'Payment',
      link: '/payment'
    },
  ]

  return (
    <>
      {/* navigation bar */}
      <header className='flex items-center min-h-[12vh] fixed z-50 w-full top-0 bg-[#232F3E]'>
        <nav className='container flex justify-between items-center'>
          <div onClick={toggleExpand} className='slideMenu'>
            <RiMenu3Line className={`text-xl sm:text-[23px] text-white cursor-pointer ${expanded ? 'primary-color' : ''} `} />
          </div>
          <Link to="/"><img className='w-12' src={Logo} alt="" /></Link>
          <ul className={`flex gap-7 ${isMenuOpen ? 'open' : ''}`}>
            {navitem.map((item) => {
              return <li className=''><NavLink to={item.link} className={({ isActive }) => {
                return isActive ? 'hover:hover-color md:text-[#f90] text-[14px] sm:text-[16px]' : 'text-[14px] sm:text-[16px] hover:text-[#f90] md:text-white'
              }
              }>{item.label}</NavLink></li>
            })}
          </ul>
          <button className='ms-1 sm:ms-0 menu' onClick={toggleMenu}><IoMenuOutline className='text-white text-[25px] md:text-[26px]' /></button>
        </nav>
      </header>
      {/* inner content */}
      <div className=''>
        {children}
      </div>
    </>
  )
}

export default DefaltLauout
