import { IoMenu } from "react-icons/io5";
import NavTag from "./NavTag";

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
        <NavTag
          name="Home"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          route="/"
        />
        <NavTag
          name="Shop"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          route="/shop"
        />
        <NavTag
          name="About"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          route="#"
        />
        <NavTag
          name="Contact"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          route="/contact"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
