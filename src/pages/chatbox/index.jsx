import React, { useContext, useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";
import Leftslide from '../../component/leftSlide';
import Tabs from '../../component/tabs';
import { messageContext } from '../../context/chatContext'


const Chat = () => {
  const { messages, setMessages } = useContext(messageContext)
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return; // Do not send empty messages

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      content: newMessage,
      time: time,
      sender: 'You', // Assuming the user is the sender for simplicity
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };



  return (
    <div className="flex w-full">
      {/* Left side: Displaying messages */}
      <Leftslide />


      {/* Right side: Input field for typing messages */}
      <div className="py-5 px-8 w-full md:w-3/4 relative min-h-[88vh] md:ml-[25%] mt-[12vh]">
        <div className='h-full'>
          <Tabs />
          <div className='mt-8 w-full'>
            {messages.map((item) => (
              <div className="rounded-lg mt-4">
                <p className="rounded-lg bg-[#f7f7f7] p-2 break-all inline-block w-full">{item.content}
                </p>
                <span className="text-sm">{item.time}</span>
              </div>
            ))}
          </div>
          <div className='flex md:justify-center bottom-8 md:bottom-5 py-2 w-full md:w-3/4 fixed z-30'>
            <div className='flex items-center border border-[#BFBFBF] rounded-lg w-[80%] md:w-3/4 p-1'>
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="md:h-10 p-1 rounded-lg focus:outline-none w-full border-gray-300 overflow-y-auto"
              />
              <div className='me-4'>
                <LuSendHorizonal onClick={sendMessage} className='text-2xl dark-color cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
