import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {

const [isOpen, setIsOpen] = useState(false)

const handleClose =() => {
  setIsOpen(false)
}


  const values = {handleClose,isOpen,setIsOpen}
  return <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>;
};


export default SidebarProvider;

export const  useSidebarContext = () => {
  return useContext(SidebarContext)
}
