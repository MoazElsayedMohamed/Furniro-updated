import { useState } from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Navicons from "../navicons/Navicons";
import { Link } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header
      className={`bg-white w-full flex items-center justify-around z-50 max-md:justify-between max-md:pl-5 shadow-md fixed h-24 top-0`}
    >
      <div className="flex items-center gap-1 ">
        <Logo />
        <Link className="text-3xl font-bold max-md:text-2xl" to="/">
          Furniro
        </Link>
      </div>
      <Navbar />
      <Navicons />
      {
        <IoMenu
          className="hidden max-md:w-32 max-md:h-8 cursor-pointer max-md:flex max-md:self-center "
          onClick={() => setOpenMenu(true)}
        />
      }
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
