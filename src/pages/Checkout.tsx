import CheckoutHero from "@/components/checkoutHero/CheckoutHero";
import FormInput from "@/components/formInput/FormInput";
import { useCart } from "@/components/productDetails/useCart";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Checkout = () => {
  const [active, setActive] = useState(true);
  const { cartItems } = useCart();
  return (
    <>
      <CheckoutHero />
      <section className="container py-16 max-md:py-8  grid lg:grid-cols-2 gap-6">
        <form className="px-20 max-sm:px-6">
          <h1 className="font-semibold capitalize text-4xl max-md:text-3xl">
            billing details
          </h1>
          <div className="flex justify-between max-xs:flex-col">
            <FormInput labelName="first name" />
            <FormInput labelName="last name" />
          </div>
          <FormInput labelName="company name (optional)" />
          <FormInput labelName="country / region" />
          <FormInput labelName="street address" />
          <FormInput labelName="town / city" />
          <FormInput labelName="province" />
          <FormInput labelName="ZIP code" />
        </form>
        <div className="py-14 px-9 max-md:py-6 max-xs:px-2">
          <div className="grid grid-cols-2 border-b border-gray-100 pb-8 mb-8">
            <div className="flex flex-col gap-4">
              <p className="text-2xl capitalize max-sm:text-lg">product</p>
              {cartItems.map((item) => (
                <p className="font-normal text-gray-200 inline max-sm:text-sm">
                  {item.attributes.name} <span className="text-black">x 1</span>
                </p>
              ))}
              {cartItems.length > 0 && (
                <p className="capitalize font-normal max-sm:text-sm">
                  subtotal
                </p>
              )}
              {cartItems.length > 0 && (
                <p className="capitalize font-normal max-sm:text-sm">total</p>
              )}
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-2xl capitalize max-sm:text-lg">subtotal</p>
              {cartItems.map((item) => (
                <>
                  <p className="font-light max-sm:text-sm">
                    Rs. {item.attributes.price}.00
                  </p>

                  <p className="capitalize font-light justify-self-center max-sm:text-sm">
                    Rs. {item.attributes.price}.00
                  </p>

                  <p className="text-primary font-bold text-2xl max-sm:text-lg">
                    Rs. 250,000.00
                  </p>
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setActive(true)}
            >
              <div
                className={`${
                  active ? "bg-black" : "border border-gray-200"
                } w-4 h-4 rounded-full`}
              ></div>
              <p
                className={`capitalize font-normal max-sm:text-sm ${
                  active ? "" : "text-gray-200"
                }`}
              >
                direct bank transfer
              </p>
            </div>
            <p className="font-light text-gray-200 max-sm:text-sm ">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setActive(false)}
            >
              <div
                className={`${
                  active ? "border border-gray-200" : "bg-black"
                } w-4 h-4 rounded-full`}
              ></div>
              <p
                className={`capitalize font-normal max-sm:text-sm ${
                  active ? "text-gray-200" : ""
                }`}
              >
                cash on delivery
              </p>
            </div>
            <p className="font-light max-sm:text-sm">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-medium">privacy policy</span>.
            </p>
            <div className="px-20 mt-8">
              <Button variant="destructive">Place Order</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
