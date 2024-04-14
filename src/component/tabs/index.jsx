import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs() {

  const tabsItems = [
    {
      label: 'Chat',
      link: '/chat'
    },
    {
      label: 'Status',
      link: '/status'
    }
  ];

  return (
    <div className='flex items-center justify-center'>
      {tabsItems.map((item, index) => (
        <div>
          <NavLink to={item.link} className={({ isActive }) => (
            isActive ? 'font-semibold text-[#EC7211]' : 'font-semibold hover:text-[#EC7211] dark-color'
          )}>{item.label}</NavLink>
          {index === 0 ? <span className="mx-1 text-lg"> / </span> : null}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
