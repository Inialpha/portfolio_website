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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-400">
            Inimfon Ebong
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-300">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('project')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={onOpen} variant="ghost" color="white">
              <HamburgerIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <ul className="flex flex-col my-12 items-center space-y-6 text-gray-300">
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('home');
                    onClose();
                  }}
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('about');
                    onClose();
                  }}
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('skills');
                    onClose();
                  }}
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('project');
                    onClose();
                  }}
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    onClose();
                  }}
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Nav