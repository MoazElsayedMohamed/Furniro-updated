import { Link } from "react-router-dom";

const SignData = () => {
  return (
    <>
      <p className=" text-gray-300 max-sm:text-sm">
        Don&apos;t have an account?
        <Link className="underline text-black ml-1" to="/register">
          Sign up
        </Link>
      </p>
      <p className=" text-gray-300 mt-2 max-sm:text-sm">
        This page is protected by Google reCAPTCHA to ensure you&apos;re not a
        bot.
        <Link className="text-black ml-1" to="#">
          Learn more.
        </Link>
      </p>
    </>
  );
};

export default SignData;
