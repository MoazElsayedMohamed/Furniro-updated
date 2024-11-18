import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Help, links } from "../../services/links";
import FooterLinks from "./FooterLinks";
import { Link } from "react-router-dom";

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
      <div className="mt-12 max-lg:px-6 container md:mx-auto ">
        <div className="border-b border-gray-100">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-12 pb-12 max-w-full gap-y-12 max-md:gap-y-6">
            <div className="flex flex-col">
              <Link to="/" className="text-2xl font-bold mb-6">
                Furniro.
              </Link>
              <p className="text-gray-200 font-normal max-sm:text-sm max-md:w-3/4">
                400 University Drive Suite 200 Coral Gables,
                <span className="block">FL 33134 USA</span>
              </p>
            </div>
            <div className="flex flex-col lg:justify-self-center">
              <h4 className="text-gray-200 mb-8 max-lg:mb-6 max-sm:text-sm">
                Links
              </h4>
              {links?.data.map((link) => {
                return <FooterLinks name={link.name} route={link.route} />;
              })}
            </div>
            <div className="flex flex-col lg:justify-self-center">
              <h4 className="text-gray-200 mb-8 max-lg:mb-6 max-sm:text-sm">
                Help
              </h4>
              {Help?.data.map((one) => {
                return <FooterLinks name={one.name} route={one.route} />;
              })}
            </div>
            <div className="pr-16">
              <h4 className="text-gray-200 mb-8 max-lg:mb-6 max-sm:text-sm">
                Newsletter
              </h4>
              <form
                className="flex gap-2  "
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <div>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="outline-none border-b border-black text-sm pb-2 placeholder:text-gray-200 placeholder:font-normal max-sm:text-xs"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <button className="outline-none border-b border-black pb-2 text-sm uppercase  cursor-pointer max-sm:text-xs">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" py-10  mx-12  max-md:mx-4">
          <p className=" font-normal max-sm:text-sm">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
