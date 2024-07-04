import shell from '../assets/shell.jpg'
import career_gate from '../assets/career_gate.jpg'
import revtax from '../assets/revtax.jpg'
import mentor_hub_api from '../assets/api.jpeg'

function Project() {
  return (
    <div id="project" className="text-left mb-60">
      <h1 className=" text-5xl items-center font-bold line-clamp-2 w-full text-center pb-20" >Projects</h1>
      <div className="mb-20">
        <h3 className="rounded-lg text-4xl text-center mb-6">
       	    <b>RevTax</b><br /> Revolutionizing Revenue Collection
        </h3>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
           <img src={revtax} className="rounded-lg" />
    	  </div>
    	<div className="ml-6">
	<p>
	  RevTax is a revenue payment and collection web application.
	  With RevTax government and agencies can collect and track revenue payment with ease.
	  RevTax is developed with the intention of eliminating the issues of 
	  extortion, harassment and corruption that plague manual revenue collection methods.
	 </p>
	  
	 <h3>Key Features</h3>
	 <p>User Signups and Login: Secure and easy registration process.</p>
          
         <h3>Tech Stack</h3>
         <p><b>Frontend:</b> HTML, CSS(Tailwind), Typescript(React)</p>
         <p><b>Backend:</b> Nodejs</p>
         <p><b>Database:</b> Mongodb.</p>
       </div>
    	</div>
	  </div>

      <div className="mb-20">
        <h3 className="rounded-lg text-4xl text-center mb-6">
	<b>Career Gate</b><br /> Your Pathway to Professional Success
        </h3>
	<div className="grid grid-cols-2">
	  <div className="flex items-center">
	  <img src={career_gate} className="rounded-lg" />
	  </div>
	 <div className="ml-6">
        <p>
          Career Gate is an engaging career development platform designed to help 
          professionals find their place in their respective industries with ease. 
          Our platform offers a range of services to support your career growth, 
          from resume reviews by expert consultants to one-on-one interview 
          sessions and personalized feedback.
        </p>


        <h3>Key Features</h3>

        <p>User Signups and Login: Secure and easy registration process.</p>
	 <p>User-Friendly Dashboard: Intuitive interface for managing your career development activities.</p>
         <p>Resume Uploading: Seamlessly submit your resume for expert review.</p>

         <p>Booking System: Effortlessly book sessions with career consultants for interviews and feedback.</p>

         <h3>Tech Stack:</h3>

         <p><b>Frontend:</b> HTML, CSS (Materialize)</p>
<p><b>Backend:</b> Python (Flask, Jinja2) Database: MySQL</p>
      </div>
      </div>
	  </div>


      <div>
        <h3 className="rounded-lg text-4xl text-center mb-6" ><b>MentorHup API</b></h3>

	  <div className="grid grid-cols-2">
    	    <div className="flex items-center">
    	      <img src={mentor_hub_api} className="w-full rounded-lg" />
   	      </div>
    	    <div className="ml-6">
        <p>MentorHub API is a robust backend solution for applications designed to 
        facilitate interactions between mentors and mentees. It offers comprehensive 
        functionality to support user registration, channel management, and user 
        engagement, ensuring a smooth and efficient mentoring experience.
	</p>

        <h3>Key Features:</h3>

         <p>User Registration:<p> Endpoints for users to register as either mentors or regular users.</p>
         <p>Channel Management for Mentors: Create, view, update, and delete channels. Add and remove mentees from channels.</p>
        <h3>Tech Stack:</h3>

          <p><b>Backend:</b> Python(Django)</p>
          <p><b>Database:</b> MongoDB</p>
	  </p>
      </div>
	  </div>
	  </div>
      
    </div>
  )
}

export default Project
