import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

interface NavbarProps {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <nav>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <IoMenu className="hidden w-32 h-8 cursor-pointer max-md:flex max-md:self-center " />
      </div>
      <ul
        className={
          openMenu
            ? "absolute flex flex-col gap-2 pt-8 pb-5 bg-white z-50 end-0 h-80 max-sm:w-1/3 xs:w-1/4"
            : "flex list-none items-center gap-14 cursor-pointer max-md:hidden relative "
        }
      >
        <li
          className={`w-full flex justify-center pb-1 ${
            openMenu && "border-b border-gray-200"
          }`}
        >
          <NavLink
            to="/"
            className="hover:text-primary"
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li
          className={`w-full flex justify-center pb-1 ${
            openMenu && "border-b border-gray-200"
          }`}
        >
          <NavLink
            to="/shop"
            className="hover:text-primary"
            onClick={() => setOpenMenu(false)}
          >
            Shop
          </NavLink>
        </li>
        <li
          className={`w-full flex justify-center pb-1 hover:text-primary ${
            openMenu && "border-b border-gray-200"
          }`}
        >
          About
        </li>
        <li
          className={`w-full flex justify-center pb-1 ${
            openMenu && "border-b border-gray-200"
          }`}
        >
          <NavLink
            to="/contact"
            className="hover:text-primary"
            onClick={() => setOpenMenu(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
