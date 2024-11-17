import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required"),
});

const Footer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <footer className="border-t border-gray-700">
      <div className="mt-12 max-lg:px-4 container md:mx-auto ">
        <div className="border-b border-gray-100">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_auto))] gap-x-16 pb-12 max-w-full lg:justify-items-center gap-y-12">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Furniro.</h3>
              <p className="text-gray-200 font-normal w-full">
                400 University Drive Suite 200 Coral Gables,
                <span className="block">FL 33134 USA</span>
              </p>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col ">
                <h4 className="text-gray-200 mb-8 max-lg:mb-6">Links</h4>
                <NavLink
                  to="/"
                  className=" cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5"
                >
                  home
                </NavLink>
                <NavLink
                  to="/shop"
                  className=" cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5"
                >
                  shop
                </NavLink>
                <NavLink
                  to="#"
                  className="cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5"
                >
                  about
                </NavLink>
                <NavLink
                  className="cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5"
                  to="/contact"
                >
                  contact
                </NavLink>
              </div>
            </div>
            <div>
              <h4 className="text-gray-200 mb-8 max-lg:mb-6">Help</h4>
              <p className=" cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5">
                payment options
              </p>
              <p className="cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5">
                returns
              </p>
              <p className="cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5">
                privacy policies
              </p>
            </div>
            <div className="pr-16">
              <h4 className="text-gray-200 mb-8 max-lg:mb-6">Newsletter</h4>
              <form
                className="flex gap-2  "
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <div>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="outline-none border-b border-black text-sm pb-2 placeholder:text-gray-200 placeholder:font-normal"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <button className="outline-none border-b border-black pb-2 text-sm uppercase  cursor-pointer">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" py-10  mx-12  max-md:mx-4">
          <p className=" font-normal">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
