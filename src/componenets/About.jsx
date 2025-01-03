import { Link } from "react-scroll";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCode } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="flex flex-wrap min-h-screen bg-black cursor-default">
      <div className="w-full md:w-1/2 py-16 bg-black text-white flex justify-center items-center">
        <Slide direction="left " duration={900}>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-snug text-start">
            About <br />
            <span className="text-[#00FFF5]">Me</span>
          </h1>
        </Slide>
      </div>

      <div className="w-full md:w-1/2 flex items-center py-16 px-6 md:px-16">
        <Fade>
          <div className="flex flex-col items-center text-center border-4 border-[#00FFF5] rounded-lg p-8 bg-black text-white shadow-xl">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              I am a <span className="text-[#00FFF5]">MERN Stack</span>{" "}
              Developer
            </h1>

            <div className="space-y-4 text-white">
              <p className="flex items-center justify-center">
                <FaCode className="text-[#00FFF5] mr-2" />
                Speciality:{" "}
                <span className="text-[#00FFF5] font-semibold ml-1">
                  Web Developer
                </span>
              </p>
              <p className="flex items-center justify-center">
                <FaCode className="text-[#00FFF5] mr-2" />
                Skills:{" "}
                <span className="text-[#00FFF5] font-semibold ml-1">
                  HTML, CSS, JavaScript, Node.js, Express, MongoDB, React
                </span>
              </p>
              <p className="flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#00FFF5] mr-2" />
                Address:{" "}
                <span className="text-[#00FFF5] font-semibold ml-1">
                  Pakistan, Karachi
                </span>
              </p>
              <p className="flex items-center justify-center">
                <FaPhoneAlt className="text-[#00FFF5] mr-2" />
                Phone:{" "}
                <span className="text-[#00FFF5] font-semibold ml-1">
                  03252208246
                </span>
              </p>
              <p className="flex items-center justify-center">
                <FaEnvelope className="text-[#00FFF5] mr-2" />
                Email:{" "}
                <span className="text-[#00FFF5] font-semibold ml-1">
                  huzaifaaamir454@gmail.com
                </span>
              </p>
            </div>

            <Link
              to="service"
              smooth={true}
              duration={500}
              className="mt-8 inline-block border-2 border-[#00FFF5] py-3 px-6 rounded-lg bg-black text-white hover:bg-[#00FFF5] hover:text-black cursor-pointer transition-all duration-300"
            >
              Explore More
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
