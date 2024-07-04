import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav id="home" className="relative auto h-16 w-full">
      <div className="flex absolute top-0 right-0 h-16 w-50">
      <ul className="flex items-center space-x-4">
        <li className=""><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav
