import { SvgIcon } from "../svgIcon/SvgIcon";

const ShopHero = () => {
  return (
    <section
      className="bg-shop-hero bg-cover lg:h-full
   bg-center bg-no-repeat py-28 mt-24 max-sm:mt-20  "
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-1">
        <h2 className="text-5xl capitalize max-sm:text-4xl">shop</h2>
        <div className="flex items-center gap-2 ">
          <h2 className="max-md:text-sm">Home</h2>
          <SvgIcon name="right-arrow" className="w-2 h-3.5" />
          <h2 className="font-light max-sm:text-sm">Shop</h2>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
