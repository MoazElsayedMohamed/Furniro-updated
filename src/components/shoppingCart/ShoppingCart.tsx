import { Link } from "react-router-dom";
import { useCart } from "../productDetails/useCart";
import { SvgIcon } from "../svgIcon/SvgIcon";
import { Button } from "../ui/button";
import React from "react";
import { URL } from "@/utils/constants";

interface CartProps {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<CartProps> = ({ setCart, cart }) => {
  const { cartItems, deleteCart } = useCart();

  return (
    <section className="absolute h-ful end-0 top-0 bg-white z-50 shadow-lg">
      <div className=" border-b border-gray-100  ">
        <div className="py-7 px-6">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl capitalize pr-24">
              shopping cart
            </h1>
            <SvgIcon
              name="lock"
              className="h-4 w-4 cursor-pointer"
              onClick={() => setCart(!cart)}
            />
          </div>

          <div className="mb-8">
            {cartItems.length > 0 &&
              cartItems.map((item) => {
                return (
                  <div className="flex items-center justify-between">
                    <div className="mt-10 flex items-center gap-9 ">
                      <img
                        src={`${URL}${item.attributes.image.data.attributes.url}`}
                        alt="product image"
                        className="w-1/3 h-1/3 rounded-lg"
                      />
                      <div>
                        <p className="font-normal mb-2">
                          {item?.attributes.name}
                        </p>
                        <div className="flex items-center gap-4">
                          <p>1 x </p>
                          <p className="text-primary text-xs">
                            Rs.{item?.attributes.price}.00
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {cartItems.length > 0 && (
                        <SvgIcon
                          name="remove"
                          className="w-5 h-5 cursor-pointer"
                          onClick={() => deleteCart(item.id)}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 py-6 px-6">
        <Link to="/cart" onClick={() => setCart(false)}>
          <Button variant="link">cart</Button>
        </Link>
        <Link to="/checkout" onClick={() => setCart(false)}>
          <Button variant="link">Checkout</Button>
        </Link>
        <Button variant="link">Compare</Button>
      </div>
    </section>
  );
};

export default ShoppingCart;
