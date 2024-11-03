import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div className="h">
      <hr className="my-4 border-t-2 border-t-red-200" />
      <div className=" relative auto h-16 w-full">
      <p className=" absolute top-0 left-0 h-16 w-50 text-2xl bold px-6 "><b>Inimfon Ebong</b></p>

      <div className=" hidden md:flex space-x-4 absolute top-0 right-0 h-16 w-50 px-6 ">
        <a href="#home">
          Home
        </a>
        <a href="#about">
          About
        </a>
        <a href="#project">
          Projects
        </a>

    	<a href="#contact">
    	  Contact
    	</a>
      </div>
      </div>

      <div className=" space-x-4 ">
        <Link to="https://www.linkedin.com/in/inimfon-ebong">
          LinkedIn
        </Link>
        <Link to="https://twitter.com/Inimfon_Tech">
    	  Twitter
        </Link>
        <Link to="https://github.com/Inialpha">
          GitHub
        </Link>

        <Link to="https://www.facebook.com/inimfion.ebong">
    	  Facebook
        </Link>
      </div>

      <p>© 2024 Inimfon Ebong. All right reserved </p>
    </div>
  )
}

export default Footer;
