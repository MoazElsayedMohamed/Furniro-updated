import { URL } from "@/utils/constants";
import { useCart } from "../productDetails/useCart";
import { SvgIcon } from "../svgIcon/SvgIcon";
import { Button } from "../ui/button";

const CartItem = () => {
  const { cartItems, deleteCart, count } = useCart();

  return (
    <section className="py-9 lg:px-24 md:px-8 grid lg:grid-cols-double gap-9 w-full">
      <div>
        <div className="grid grid-cols-6 bg-secondary h-10 pt-2 mb-8">
          <div></div>
          <p>Product</p>
          <p>Price</p>
          <p className="justify-self-center">Quantity</p>
          <p>Subtotal</p>
          <p></p>
        </div>
        {cartItems.map((item) => {
          return (
            <div className="grid grid-cols-6 items-center gap-4 mb-4">
              <img
                src={
                  cartItems.length === 0
                    ? ""
                    : `${URL}${item.attributes.image.data.attributes.url}`
                }
                className="rounded-md"
              />
              <p className="font-normal text-gray-200">
                {cartItems.length === 0 ? "" : item.attributes.name}
              </p>
              <p className="font-normal text-gray-200">
                {cartItems.length === 0 ? "" : `Rs.${item.attributes.price}.00`}
              </p>
              <p
                className={
                  cartItems.length === 0
                    ? ""
                    : "justify-self-center border rounded px-3 py-1 border-gray-200"
                }
              >
                {cartItems.length === 0 ? "" : count}
              </p>
              <p className="font-normal">
                {cartItems.length === 0 ? "" : `Rs.${item.attributes.price}.00`}
              </p>
              <SvgIcon
                name="trash"
                className="h-5 w-5 justify-self-center cursor-pointer"
                onClick={() => deleteCart(item.id)}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <div className="md:w-full max-md:w-1/2 bg-secondary">
          <h2 className="font-semibold text-3xl capitalize text-center mt-2 mb-16 max-md:text-2xl">
            cart totals
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-center">there is no products for checkout</p>
          ) : (
            cartItems.map((item) => (
              <>
                <div className="flex justify-center gap-16">
                  <h1 className="capitalize max-md:text-sm">subtotal</h1>
                  <p className="font-normal text-gray-200 max-md:text-sm">
                    Rs.{item.attributes.price}.00
                  </p>
                </div>
                <div className="flex justify-center gap-16 mt-6">
                  <h1 className="capitalize max-md:text-sm">total</h1>
                  <p className="text-primary text-xl max-md:text-base">
                    Rs.{item.attributes.price}.00
                  </p>
                </div>
              </>
            ))
          )}

          <div className="px-20 mt-8 mb-12">
            <Button
              variant="destructive"
              className="max-md:text-xs max-md:py-3"
            >
              check out
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
