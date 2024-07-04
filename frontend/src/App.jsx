import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import viteLogo from '/vite.svg'
import './App.css'



const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} >
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Route>
  )
)

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={routes} /> 
    </ChakraProvider>
  )
}

export default App
