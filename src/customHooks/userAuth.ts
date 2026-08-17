import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  SignupUserValidation,
  LoginUserValidation,
  type SignupUserValidationType,
  type LoginUserValidationType,
} from "@/schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export const useAuth = () => {
  // Signup form
  const signupForm = useForm<SignupUserValidationType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(SignupUserValidation),
    mode: "onChange",
  });

  // Login form
  const loginForm = useForm<LoginUserValidationType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginUserValidation),
    mode: "onChange",
  });

  return {
    signupForm,
    loginForm,
  };
};