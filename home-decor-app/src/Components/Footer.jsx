import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 w-full">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between">
        <p>
          HomeDecor Industries Ltd.
          <br />
          &copy;Copyright Reserved - 2025 <br />
        </p>
        <p className="mt-2 text-lg hover:text-teal-400 hover:underline">
          <Link to="https://github.com/mehrab-abir" target="blank">Mehrab Jalil Abir</Link>
        </p>
        <nav className="flex gap-4">
          <Link to='https://github.com/mehrab-abir' className="text-2xl" target="blank"><FaGithub /></Link>
          <Link to='https://www.linkedin.com/in/mehrababir/' className="text-2xl" target="blank"><FaLinkedin /></Link>
          <Link to='https://www.instagram.com/mehrab.abir_/' className="text-2xl" target="blank"><FaSquareInstagram /></Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
