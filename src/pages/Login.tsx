import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import FormRow from "../components/login/FormRow";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { onCLS, onINP, onLCP } from "web-vitals";
import { SvgIcon } from "@/components/svgIcon/SvgIcon";

interface SumbitData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "password must be 8 or more characters")
    .required("password is required"),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SumbitData>({
    resolver: yupResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    onCLS((metric) => console.log(metric.value));
    onINP((metric) => console.log(metric.value));
    onLCP((metric) => console.log(metric.value));
  }, []);

  const onSubmit: SubmitHandler<SumbitData> = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(`http://localhost:1337/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const result = await response.json();

      const jwt = result.jwt;
      const user = result.user;
      localStorage.setItem("token", jwt);
      localStorage.setItem("username", user.username);

      if (response.ok) {
        toast.success("login successfully");
        window.location.replace("/");
      } else {
        toast.error("login failed. Please check email and password again");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative bg-custom-image bg-cover h-2-screen ">
      <div className="flex justify-center items-center md:absolute md:top-0 md:start-0 w-full h-full">
        <div className="bg-white rounded-xl shadow-md py-20 px-10 md:w-2/5 max-md:w-4/5 ">
          <form className="mb-32 " onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl text-gray-600 mb-12 ">Sign in</h1>
            <div className="mb-8">
              <FormRow
                id="identifier"
                type="text"
                label="Email or username"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                showPassword={false}
                placeholder="Email Address or Username"
                inputName="email"
                minLength={0}
                register={register}
              />
              {errors.email && (
                <p className="text-red-500 ">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <FormRow
                id="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                onClick={handleClick}
                showPassword={showPassword}
                inputName="password"
                placeholder="Password"
                minLength={0}
                register={register}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-8">
              <Button size="lg">sign in</Button>
            </div>
            <div className="flex justify-between mt-4 font-normal text-gray-600">
              <div
                className="flex items-center gap-2 cursor-pointer "
                onClick={() => setChecked(!checked)}
              >
                <SvgIcon
                  name="Vector"
                  className={`w-4 h-4 ${checked ? "absolute" : "hidden"}`}
                />
                <span className="w-4 h-4 border border-black"></span>
                <span>Remember me</span>
              </div>
              <Link to="#">Need Help?</Link>
            </div>
          </form>
          <p className=" text-gray-300">
            Don&apos;t have an account?
            <Link className="underline text-black ml-1" to="/register">
              Sign up
            </Link>
          </p>
          <p className=" text-gray-300 mt-2">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
            <Link className="text-black ml-1" to="#">
              Learn more.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
