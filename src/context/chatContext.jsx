import { createContext, useState } from "react"
export const messageContext = createContext();
export const expandedContext = createContext();


function chatContext({ children }) {
  const [messages, setMessages] = useState([]);
  const [expanded, setExpanded] = useState(false);


  return (
    <messageContext.Provider value={{ messages, setMessages }}>
      <expandedContext.Provider value={{ expanded, setExpanded }}>
        {children}
      </expandedContext.Provider>
    </messageContext.Provider>
  )
}

export default chatContext
