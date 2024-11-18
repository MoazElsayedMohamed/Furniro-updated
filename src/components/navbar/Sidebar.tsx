import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`fixed top-0 start-0 h-full z-30 w-full bg-secondary
         ${
           openMenu ? "translate-x-0" : "translate-x-full"
         } ease-in-out duration-700`}
    >
      <div className=" flex justify-between items-center py-7 pl-4">
        <div className="flex items-center gap-1">
          <Logo />
          <h2 className="text-2xl font-bold">Furniro.</h2>
        </div>
        <IoClose
          className="w-32 h-10 cursor-pointer "
          onClick={() => setOpenMenu(false)}
        />
      </div>

      <nav className="mt-8 absolute flex flex-col items-center justify-center w-full">
        <Link
          to="/"
          className=" px-6 py-2 hover:text-primary text-lg"
          onClick={() => setOpenMenu(false)}
        >
          Home
        </Link>
        <Link to="#" className=" px-6 py-2 hover:text-primary text-lg">
          About
        </Link>
        <Link to="#" className=" px-6 py-2 hover:text-primary text-lg">
          Services
        </Link>
        <Link to="#" className=" px-6 py-2 hover:text-primary text-lg">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
