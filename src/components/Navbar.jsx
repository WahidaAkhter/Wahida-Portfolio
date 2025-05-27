import { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const socialLinks = [
    {
      href: "https://github.com/WahidaAkhter",
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      href: "www.linkedin.com/in/wahida-akhter",
      icon: <FaLinkedin />,
      name: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/wahidaakhter280",
      icon: <FaFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.instagram.com/wahidaakhter280/",
      icon: <FaInstagram />,
      name: "Instagram",
    },

  ];

  return (
    <nav>
      <div className="m-8 flex justify-end items-center gap-4 text-2xl">
        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-6 text-xl">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full  px-6 pb-4 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col items-end space-y-4 text-xl">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
