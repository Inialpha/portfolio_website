function Skill() {
  return (
    <div className="mb-60">
      <h3 className=" text-5xl items-center font-bold line-clamp-2 w-full text-center pb-20">
    	My Skills
      </h3>
      <div className="">
	<h3 className=" text-4xl items-center font-bold  w-full text-center pb-10">
	  Technical Skills
	</h3>
    	<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
	  <div><p className="bg-white text-black rounded-lg" >Backend</p>
	  <ul>
      <li className="p-4 rounded-lg" >Python</li>
      <li className=" p-4 rounded">Nodejs</li>
	  </ul>
	  </div>
	  <div><p className="bg-white text-black rounded-lg" >Frontend</p>
	  <ul>
            <li className=" p-4 rounded">Javascript</li>
      	    <li className=" p-4 rounded">HTML</li>
	    <li className=" p-4 rounded">CSS</li>
    	    <li className=" p-4 rounded">Reactjs</li>
    	    <li className=" p-4 rounded">Tailwind Css</li>
    	  </ul>
          </div>
       	  <div><p className="bg-white text-black rounded-lg" >Database</p>
	    <ul>
	      <li className=" p-4 rounded">MySQL</li>
    	      <li className=" p-4 rounded">MongoDb</li>
    	      <li className=" p-4 rounded">Redis</li>
	     </ul>
    	   </div>

	  <div><p className="bg-white text-black rounded-lg" >Server</p>
	    <ul>
	      <li className=" p-4 rounded">Nginx</li>
	    </ul>
	  </div>
	  <div><p className="bg-white text-black rounded-lg" >DeveOps</p>
	    <ul>
	      <li className=" p-4 rounded">Puppet</li>
	      <li className=" p-4 rounded">Fabrics</li>
	    </ul>
	  </div>
	   
        </div>
      </div>
      <div>
	<h1 className=" text-4xl items-center font-bold  w-full text-center p-10 ">Non Technical</h1>
	<ul>
	  <li className=" p-4 rounded">Good communication</li>
	</ul>
      </div>
    </div>
  );
}

export default Skill;
