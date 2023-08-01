import React from 'react';
import { useSidebarContext } from '../contexts/SidebarContext';

import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {setIsOpen,isOpen} = useSidebarContext()


  return <header className='bg-lime-200'>
    <div>header</div>
    <div className='cursor-pointer flex relative' onClick={()=>setIsOpen(!isOpen)}>
      <BsBag className='text-2xl'/>
    </div>
  </header>;
};

export default Header;
