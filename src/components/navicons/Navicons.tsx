import { toast } from "sonner";
import Icon from "./Icon";

const Navicons = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("/login");
    toast.success("logged out successfully");
  }
  return (
    <nav className="flex items-center gap-8 max-md:hidden">
      {token && username ? (
        <p>{username}</p>
      ) : (
        <Icon name="login" route="/login" />
      )}
      <Icon name="search" route="#" />
      <Icon name="heart" route="#" />
      <Icon name="shopping-cart" route="#" />
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
