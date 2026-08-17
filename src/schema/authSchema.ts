import * as yup from "yup";

export const SignupUserValidation = yup.object({
    name:yup.string()
  .min(3, "Username must be at least 3 characters")
  .required("Username is required"),
  email:yup.string().email("Invlaid email format").required("user Email is required"),
  password: yup
  .string()
  .min(9, "Password must be at least 9 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
  .required("Password is required")
});

export type SignupUserValidationType = yup.InferType<typeof SignupUserValidation>;

export const LoginUserValidation = yup.object({
    email:yup.string().email("Invlaid email format").required("user Email is required"),
  password: yup
  .string()
  .min(9, "Password must be at least 9 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
  .required("Password is required")
});

export type LoginUserValidationType = yup.InferType<typeof LoginUserValidation>;
