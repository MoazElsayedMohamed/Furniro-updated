import { Link } from "react-router-dom";
import { toast } from "sonner";
import { SvgIcon } from "../svgIcon/SvgIcon";

interface NavbarProps {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navicons: React.FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("/login");
    toast.success("logged out successfully");
  }
  return (
    <nav
      className={
        openMenu
          ? " absolute flex flex-col items-center top-60 z-50 end-0  gap-2 xs:w-1/4 max-xs:w-1/3"
          : "flex items-center gap-8 max-md:hidden"
      }
    >
      {token && username ? (
        <p>{username}</p>
      ) : (
        <Link
          to="/login"
          onClick={() => setOpenMenu(false)}
          className={`w-full flex justify-center pb-2 ${
            openMenu && "border-b border-gray-200"
          }`}
        >
          <SvgIcon name="login" className="w-6 h-5" />
        </Link>
      )}
      <Link
        className={`w-full flex justify-center pb-2 ${
          openMenu && "border-b border-gray-200"
        }`}
        to="#"
      >
        <SvgIcon name="search" className="w-6 h-5" />
      </Link>
      <Link
        className={`w-full flex justify-center pb-2 ${
          openMenu && "border-b border-gray-200"
        }`}
        to="#"
      >
        <SvgIcon name="heart" className="w-6 h-5" />
      </Link>
      <Link to="#" className="w-full flex justify-center pb-2">
        <SvgIcon name="shopping-cart" className="w-6 h-5" />
      </Link>
      {token && (
        <button
          className="border border-primary text-primary py-2 px-4 hover:bg-primary hover:text-white "
          onClick={handleLogout}
        >
          log out
        </button>
      )}
    </nav>
  );
};

export default Navicons;
