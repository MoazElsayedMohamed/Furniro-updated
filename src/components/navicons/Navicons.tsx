import { toast } from "sonner";
import Icon from "./Icon";
import { useState } from "react";
import ShoppingCart from "../shoppingCart/ShoppingCart";

const Navicons = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [cart, setCart] = useState(false);

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
        <Icon
          name="login"
          route="/login"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <Icon
        name="search"
        route="#"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Icon
        name="heart"
        route="#"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Icon name="shopping-cart" route="#" onClick={() => setCart(!cart)} />
      {cart && <ShoppingCart cart={cart} setCart={setCart} />}
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
