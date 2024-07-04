import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="font-sans text-sm py-6 bg-blue-500">
      <ul className="left-0 md:flex hidden items-end space-x-4">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
