import { Link } from "react-router-dom";
import navLinks from "../../layout/Header/Navbar/NavLinks";
import CloseIcon from "../../../assets/icons/icon-close.svg";
import WhiteLogo from "../../ui/White_logo";
import LoginButtonMobile from "../../ui/Login_Button_Mobile";

import Fb_icon_svg from "../../../assets/icons/fb_icon_svg";
import Tw_icon_svg from "../../../assets/icons/tw_icon_svg";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-darkblue-secondary/95 z-50 flex flex-col py-8 px-8">
      <div className="flex justify-between items-center py-4">
        <WhiteLogo />

        <button
          onClick={onClose}
          className="cursor-pointer"
          title="Zamknij menu"
        >
          <img src={CloseIcon} alt="Zamknij menu" />
        </button>
      </div>

      <ul className="flex flex-col items-center mt-8 mb-6 w-full tracking-widest">
        {navLinks.map((link, index) => (
          <li key={link.name} className="w-full">
            <Link
              to={link.href}
              className={`w-full block text-center text-xl uppercase border-b border-zinc-400/75 pt-6 pb-6 hover:bg-white hover:text-red-primary text-white transition duration-300 ${
                index === 0 ? "border-t pt-6" : ""
              }`}
              onClick={onClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <LoginButtonMobile />

      <div className="w-full flex flex-row justify-center items-center space-x-12 mx-auto mt-auto">
        <a href="facebook.link">
          <Fb_icon_svg />
        </a>
        <a href="twitter.link">
          <Tw_icon_svg />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
