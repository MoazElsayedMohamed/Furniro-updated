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
          ? "flex absolute items-center justify-end top-24 z-50 end-2 gap-3"
          : "flex items-center gap-8 max-md:hidden"
      }
    >
      {token && username ? (
        <p>{username}</p>
      ) : (
        <Link to="/login" onClick={() => setOpenMenu(false)}>
          <SvgIcon name="login" className="w-6 h-5" />
        </Link>
      )}

      <SvgIcon name="search" className="w-6 h-5" />
      <SvgIcon name="heart" className="w-6 h-5" />
      <SvgIcon name="shopping-cart" className="w-6 h-5" />
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
