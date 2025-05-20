import { Link } from "react-router-dom";
import { useState } from "react";
import navLinks from "./NavLinks";
import Logo from "../../../../assets/icons/logo-bookmark.svg";
import LoginButton from "../../../ui/Login_Button";
import MobileMenu from "../../../shared/MobileMenu/MobileMenu";
import HamburgerIcon from "../../../../assets/icons/icon-hamburger.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`flex justify-between items-center max-w-7xl mx-auto p-8 ${
          isMobileMenuOpen ? "hidden" : ""
        }`}
      >
        <div className="font-bold text-xl">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 uppercase text-[16px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-black hover:text-red-primary transition p-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <LoginButton />
        </div>
        <button
          className="md:hidden text-black text-lg cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <img src={HamburgerIcon} title="open menu" alt="Menu" />
        </button>
      </nav>
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
