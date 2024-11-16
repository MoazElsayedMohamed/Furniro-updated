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
    <footer className="border-t border-gray-dark ">
      <div className="my-[49px] mx-[100px] max-mdTabelt:mx-[72px] max-phone1:mx-[60px] max-phone2:mx-[24px] ">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 pb-12  ">
          <div>
            <h3 className="text-2xl font-bold mb-6">Furniro.</h3>
            <p className="text-gray font-normal w-full text-base">
              400 University Drive Suite 200 Coral Gables,
              <span className="block">FL 33134 USA</span>
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray font-medium text-base mb-8 max-lg:mb-6">
              Links
            </h4>
            <NavLink
              to="/"
              className=" cursor-pointer capitalize  hover:text-primary lg:mb-8 max-lg:mb-5"
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
          <div>
            <h4 className="text-gray font-medium text-base mb-8 max-lg:mb-6">
              Help
            </h4>
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
          <div className="w-full">
            <h4 className="text-gray font-medium text-base mb-8 max-lg:mb-6">
              Newsletter
            </h4>
            <form
              className="flex items-start gap-2 relative"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="outline-none border-b border-black text-sm placeholder:text-gray placeholder:font-normal p-0"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 mt-2">{errors.email.message}</p>
                )}
              </div>
              <div>
                <button className="outline-none border-b border-black  text-sm uppercase  cursor-pointer font-medium">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-light pt-10">
          <p className=" font-normal">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
