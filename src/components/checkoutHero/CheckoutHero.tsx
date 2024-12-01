import { SvgIcon } from "../svgIcon/SvgIcon";

const CheckoutHero = () => {
  return (
    <section
      className="bg-shop-hero bg-cover lg:h-full
bg-center bg-no-repeat py-28 mt-24 max-sm:mt-20 flex items-center flex-col "
    >
      <SvgIcon
        className="w-20 h-20 max-md:w-14 max-md:h-14"
        name="mainlogo"
        onClick={undefined}
      />
      <h2 className="text-5xl capitalize mb-1 max-md:text-4xl">checkout</h2>
      <div className="flex items-center gap-2 ">
        <h2 className="max-md:text-xs ">Home</h2>
        <SvgIcon
          name="right-arrow"
          className="w-2 h-3.5 max-md:w-1.5 max-md:h-2.5"
          onClick={undefined}
        />
        <h2 className="font-light max-md:text-xs">Checkout</h2>
      </div>
    </section>
  );
};

export default CheckoutHero;
