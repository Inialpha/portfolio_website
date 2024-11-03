import { Link } from 'react-router-dom'

;function Contact() {
  return (
    <div id="contact" className="">
      <ul className=" grid grid-cols-3 ">

        <li className=" "><Link to="https://www.linkedin.com/in/inimfon-ebong">
	  <i className="linkedin-icon mx-4 rounded-lg"></i></Link>
	</li>
	
	<li>
	  <Link to="https://twitter.com/Inimfon_Tech">
	    <i className="twitter-icon mx-4 rounded-lg"></i>
	  </Link>
	</li>
        
	<li>
	  <Link to="https://github.com/Inialpha">
	    <i className="github-icon mx-4 rounded-lg"></i>
	  </Link>
	</li>

        <li>
	  <Link to="https://www.facebook.com/inimfion.ebong">
	    <i className="facebook-icon mx-4 rounded-lg"></i>
	  </Link>
	</li>
      </ul>
    </div>
  )

}

export default Contact
