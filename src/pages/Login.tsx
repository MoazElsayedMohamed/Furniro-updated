import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import FormRow from "../components/login/FormRow";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { onCLS, onINP, onLCP } from "web-vitals";
import { onSubmit, SumbitData } from "@/hooks/useSubmit";
import CheckAndHelp from "@/components/login/CheckAndHelp";
import SignData from "@/components/login/SignData";
import { loginSchema } from "@/components/login/LoginSchema";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SumbitData>({
    resolver: yupResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    onCLS((metric) => console.log(metric.value));
    onINP((metric) => console.log(metric.value));
    onLCP((metric) => console.log(metric.value));
  }, []);

  return (
    <section
      className="bg-custom-image bg-cover lg:h-full
     bg-center bg-no-repeat py-24 mt-24 max-sm:mt-20 max-sm:h-screen  "
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white rounded-xl shadow-md lg:py-20 lg:px-10 md:w-2/5 max-md:w-3/5 max-xs:w-4/5 max-sm:w-4/5 max-xs:py-10 2xl:w-1/3 md:py-10 md:px-6 xs:py-14 max-md:px-5 ">
          <form className="mb-32 max-md:mb-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl text-gray-600 mb-12 max-sm:text-2xl">
              Sign in
            </h1>
            <div className="mb-8 max-md:mb-6">
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
                <p className="text-red-500 text-sm max-sm:text-xs ">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-8 max-md:mb-6">
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
                <p className="text-red-500 text-sm max-sm:text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button size="lg">Sign in</Button>
            <CheckAndHelp />
          </form>
          <SignData />
        </div>
      </div>
    </section>
  );
};

export default Login;
