import { Link } from "react-scroll";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-1 cursor-default py-32">
      <div className="text-white text-3xl font-primary">
        <h1 className=""> <span className="text-primary">My</span> </h1>
      </div>
      <div className="text-white text-4xl mt-8 font-primary">
        Services
      </div> 

      <div className="flex flex-col sm:flex-row sm:space-x-4 sm:mt-8 space-y-4 sm:space-y-0 ">
        <div className="flex flex-col border-box w-[300px] h-[250px] border-2 border-primary rounded-lg p-4 text-center bg-black">
          <h2 className="mb-2 font-primary text-primary text-[25px]">UI/UX <h3> <span className="text-white text-[20px]">D e s i g n</span></h3></h2>
          <p className="text-[16px] font-secondary text-white">
            UI/UX design for your web applications, ensuring an intuitive user
            experience and stunning visuals.
          </p>
        </div>
        
        <div className="flex flex-col border-box w-[300px] h-[250px] border-2 border-primary rounded-lg p-4 text-center bg-black">
          <h2 className="text-[25px]  mb-2 font-primary text-primary">F r o n t e n d  <h3><span className="text-white text-[20px] ">D e v e l o p m e n t</span></h3> </h2>
          <p className="text-[16px] font-secondary text-white">
            React-based frontend development services, crafting responsive and
            interactive user interfaces for your projects.
          </p>
        </div>
        
        <div className="flex flex-col border-box w-[300px] h-[250px] border-2 border-primary rounded-lg p-4 text-center bg-black">
          <h2 className="text-[25px]  mb-2 font-primary text-primary">B a c k e n d <h3><span className="text-white text-[20px] ">D e v e l o p m e n t</span></h3> </h2>
          <p className="text-[16px] font-secondary text-white ">
            Express-based backend development to power your applications with robust and scalable server-side functionality.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mt-12">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer mt-8 hover:text-primary bg-black text-white font-secondary font-bold py-2 px-4 md:px-6 border-2 border-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Service;
