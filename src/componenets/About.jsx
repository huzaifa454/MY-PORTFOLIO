import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center space-y-6 border-4 border-primary rounded-lg p-8 bg-[#22282F]">
        <h1 className="text-white text-2xl md:text-3xl">
          I am a<span className="text-[#00FFF5]"> MERN Stack </span>developer.
        </h1>

        <p className="text-white mt-4">
          Speciality:{" "}
          <span className="text-[#00FFF5] font-semibold">Web Developer</span>
        </p>
        <p className="text-white mt-4">
          Skills:{" "}
          <span className="text-[#00FFF5] font-semibold">
            HTML, CSS, JavaScript, Node.js, Express, MongoDB, React
          </span>
        </p>
        <p className="text-white mt-4">
          Address:{" "}
          <span className="text-[#00FFF5] font-semibold">
            Pakistan, Karachi
          </span>
        </p>
        <p className="text-white mt-4">
          Phone:{" "}
          <span className="text-[#00FFF5] font-semibold">03252208246</span>
        </p>
        <p className="text-white mt-4">
          Email:{" "}
          <span className="text-[#00FFF5] font-semibold">
            huzaifaaamir454@gmail.com
          </span>
        </p>
        <div className="mt-6">
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="cursor-pointer border-2 border-primary text-white font-semibold py-2 px-4 md:px-6 rounded-lg bg-black hover:bg-primary hover:text-white transition-all duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
