import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "password must be 8 or more characters")
    .required("password is required"),
});
