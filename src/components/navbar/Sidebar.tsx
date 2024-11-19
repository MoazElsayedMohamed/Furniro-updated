import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { SvgIcon } from "../svgIcon/SvgIcon";
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

      <nav className="mt-8 absolute flex flex-col items-center justify-start w-full">
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
        <Link
          to="/login"
          onClick={() => setOpenMenu(false)}
          className=" px-6 py-2 flex items-center gap-2 "
        >
          <SvgIcon name="login" className="w-5 h-4" />
          <h2 className="hover:text-primary text-lg">Login</h2>
        </Link>
        <Link
          to="#"
          onClick={() => setOpenMenu(false)}
          className=" px-6 py-2 flex items-center gap-2 "
        >
          <SvgIcon name="search" className="w-5 h-4" />
          <h2 className="hover:text-primary text-lg">Search</h2>
        </Link>
        <Link
          to="#"
          onClick={() => setOpenMenu(false)}
          className=" px-6 py-2 flex items-center gap-2 "
        >
          <SvgIcon name="like" className="w-5 h-4" />
          <h2 className="hover:text-primary text-lg">Like</h2>
        </Link>
        <Link
          to="#"
          onClick={() => setOpenMenu(false)}
          className=" px-6 py-2 flex items-center gap-2 "
        >
          <SvgIcon name="shopping-cart" className="w-6 h-5" />
          <h2 className="hover:text-primary text-lg">Shopping Cart</h2>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
