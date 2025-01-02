import picture from "../assets/pic2.jpeg";
import bg from "../assets/bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="absolute inset-0 z-0">
        <img src={bg} alt="" className="w-full min-h-screen object-cover" />
      </div>
      <div className="w-1/2 relative flex justify-center items-center">
        <div className="w-96 h-96 bg-gray-900 overflow-hidden rounded-full border-4 border-primary shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src={picture}
            alt="image"
            className="object-cover rounded-full py-6 "
          />
        </div>
      </div>

      <div className="w-1/2 relative flex flex-col justify-start items-start pl-8 py-64 font-extrabold">
        <h1 className="text-3xl md:text-6xl">
          <span className="text-primary">Hi,</span>
        </h1>
        <h2 className="text-white text-3xl md:text-4xl py-6">
          This is
          <span className="text-primary"> Huzaifa</span>
        </h2>
        <div className="flex space-x-6">
          <a
            href="https://github.com/huzaifa454/Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-3xl hover:text-primary transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/huzaifa-aamir-0654b2262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-3xl hover:text-primary transition-colors duration-300"
            />
          </a>
        </div>
        <p className="text-white text-sm md:text-lg max-w-[600px] leading-relaxed py-4 font-semibold">
          I specialize in MERN stack web development, creating dynamic and
          interactive web applications using the powerful combination of
          MongoDB, Express.js, React.js, and Node.js. With a passion for clean
          code and user-friendly interfaces, I bring your ideas to life on the
          web.
        </p>
        <div className="py-6 ">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary bg-black border-primary border-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
