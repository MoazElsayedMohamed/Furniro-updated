import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export interface SumbitData {
  email: string;
  password: string;
}

export const onSubmit: SubmitHandler<SumbitData> = async (data) => {
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
