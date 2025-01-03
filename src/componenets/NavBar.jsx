import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10 bg-black h-[6vh] cursor-pointer text-white flex justify-between items-center px-6 py-4 text-2xl font-primary">
      <div className="flex flex-col items-center justify-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white hover:text-primary transition-colors duration-300"
        >
          <h1>
            Developer<span className="text-primary"> H.</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <div className="hidden sm:flex gap-6 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="sm:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleToggle}
            width={24}
            height={18}
            strokeWidth={2}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[6vh] left-0 w-full bg-black flex flex-col items-center text-white text-lg sm:hidden py-4 z-20">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 hover:text-primary transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
