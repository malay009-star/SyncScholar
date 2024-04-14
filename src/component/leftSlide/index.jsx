import React, {useContext } from 'react';
import {messageContext, expandedContext } from '../../context/chatContext'
import './left.css'

const leftslide = () => {
  const { messages, setMessages } = useContext(messageContext)
  const { expanded, setExpanded } = useContext(expandedContext)


  return (
    <div>
      {/* {expanded === false || expanded === true ? (
        <div className='flex justify-between rounded border border-[#000] md:hidden px-1 py-[1px] w-1/4 ml-4 mt-[15.6vh] absolute top-0 z-50 cursor-pointer' onClick={toggleExpand}>
          <span className='text-sm'>Collapse</span>
          <RiMenu3Fill onClick={toggleExpand} className='text-2xl text-[#232F3E] md:hidde cursor-pointer' />
        </div>
      ) : null} */}
      <div className={`fixed mt-[12vh] p-3 none md:w-1/4 md:block bg-gray-100 z-40 overflow-y-auto min-h-[88vh] transition-all duration-500 ease-in-out leftSlide  ${expanded ? 'w-2/4 slideOpen' : 'w-0'}`}>
        {messages.map((message, index) => (
          <div key={index} className="mt-2">
            <p className="rounded-lg overflow-x-hidden">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default leftslide;
