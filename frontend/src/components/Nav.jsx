import {
  Button,
  useDisclosure,
  Drawer, DrawerBody,
  DrawerCloseButton, DrawerContent,
  DrawerOverlay, } from '@chakra-ui/react';


import {
  HamburgerIcon,
} from '@chakra-ui/icons'

import { Link } from 'react-router-dom';

function Nav() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const scrollToSection = (e, id) => {
    e.preventDefault();
    onClose();

    const a = document.createElement('a');
        a.href = id;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  };

  return (

    <nav id="home" className="relative auto h-16 w-full bg-red-200 mb-10">
	  
      <div className="flex absolute top-0 right-0 h-16 w-50 mr-10 md:mr-20 items-center ">
      <ul className="hidden md:flex items-center space-x-4 text-black">
        <li className=""><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <span className='md:hidden block'>
        <Button onClick={onOpen}>
	  <HamburgerIcon />
        </Button>
      </span>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <ul className="flex flex-col my-12 items-center">
                <li><a href='#' onClick={onClose} >Home</a></li>
                <li><a href='#about' onClick={onClose} >About me</a></li>
                <li><a href='#project' onClick={onClose} >Projects</a></li>
                <li><a href='#contact' onClick={onClose} >Contact</a></li>
              </ul>
             </DrawerBody>
           </DrawerContent>
         </Drawer>

      </div>
    </nav>
  )
}

export default Nav
