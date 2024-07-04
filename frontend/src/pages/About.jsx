import profileImage from '../assets/inimfon.png'
function About() {
  return (
    <div id="about" className=" mb-60">
    <h1 className=" text-5xl items-center font-bold line-clamp-2 w-full text-center" >About Me</h1>
    <div className=" container mx-auto grid grid-cols-2 p-6 ">
      <div  className="flex justify-center items-center w-80">
        <img src={profileImage}  className=" rounded-full overflow-hidden w-auto h-auto" />
      </div>

      <div className="ml-6">
      <h3>Inimfon Ebong</h3>
      <p className="text-left" >Is a passionate fullstack softwere engineer with experience in designing,
         developing, deploying, and maintaining robust, functional, and user-friendly
        applications. Specializing in backend development, I excel at creating
        efficient server-side functionalities.
      </p>
    <hr className="my-4 border-t-2 border-gray-300" />


      <p className="text-left">
        My journey in software engineering blossomed when I joined the ALX 
        Software Engineering course. During my studies, I gained technical knowledge 
        of developing software using industry-standard technologies and acquired 
        hands-on experience by working on various projects.
      </p>
    <hr className="my-4 border-t-2 border-gray-300" />

      <p className="text-left">
        In addition to my technical skills, I possess strong soft skills, 
        including effective communication, the ability to collaborate and work 
        within a team, technical writing, and team management. I am committed to 
        continuous learning and always strive to stay updated with the latest 
        industry trends and advancements.
      </p>
      </div>
    </div>
    </div>
  )
}

export default About
