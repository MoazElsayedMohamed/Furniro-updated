import { toast } from "sonner";
import Icon from "./Icon";

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
        <Icon
          name="login"
          route="/login"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}
      <Icon
        name="search"
        route="#"
        openMenu={openMenu}
        setOpenMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Icon
        name="heart"
        route="#"
        openMenu={openMenu}
        setOpenMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Icon
        name="shopping-cart"
        route="#"
        openMenu={openMenu}
        setOpenMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
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
