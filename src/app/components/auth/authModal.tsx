"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store/store";
import { closeAuthModal } from "@/redux/slices/authModalSlice";
import { useAuth } from "@/customHooks/userAuth";
import {
  SignupUserValidationType,
  LoginUserValidationType,
} from "@/schema/authSchema";
import { useMutation } from "@tanstack/react-query";
import { loginUser, signupUser } from "@/api/api.call";
import { login } from "@/redux/slices/authSlice";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function AuthModal() {
  //modal open logic
  const { initialTab, isOpen } = useSelector(
    (state: RootState) => state.authenticationModal,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  //Form state management
  const { signupForm, loginForm } = useAuth();
  const {
    register: registerSignup,
    formState: { errors: signupErrors },
  } = signupForm;

  const {
    register: registerLogin,
    formState: { errors: loginErrors },
  } = loginForm;

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Signup checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Update tab whenever modal is opened with a new initialTab
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Signup mutation
  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (response) => {
      toast.success(response?.message || "User registered successfully");
      signupForm.reset();
      setActiveTab("login");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const response = error.response?.data;
        toast.error(response?.message || "Something went wrong");
        console.log(response.message);
      }
    },
  });

  //   // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      Cookies.set("access-token", response?.data?.accessToken);
      Cookies.set("refresh-token", response?.data?.refreshToken);
      Cookies.set("userRole", response?.data?.user?.role);

      localStorage.setItem("email", response?.data?.user?.email);
      localStorage.setItem("role", response?.data?.user?.role);

      toast.success(response?.message || "User logged in successfully");
      signupForm.reset();
      dispatch(
        login({
          email: response?.data?.user?.email,
          role: "user",
        }),
      );
      dispatch(closeAuthModal());
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const response = error.response?.data;
        toast.error(response?.message || "User registered successfully");
        console.log(response.message);
      }
    },
  });

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close when Escape is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeAuthModal());
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, dispatch]);

  if (!isOpen) {
    return null;
  }

  // Signup submit handler
  const handleSignupSubmit = (data: SignupUserValidationType) => {
    signupMutation.mutate(data);
  };

  // Login submit handler
  const handleLoginSubmit = (data: LoginUserValidationType) => {
    loginMutation.mutate(data);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAuthModal());
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-8 overflow-y-auto"
      onMouseDown={handleOutsideClick}
    >
      <div
        className="w-full max-w-[767px] max-h-[90vh] overflow-y-auto bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Back Button */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={() => dispatch(closeAuthModal())}
            className="w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-gray-100 transition my-[20px] ml-[20px]"
            aria-label="Close authentication modal"
          >
            <ArrowLeft className="w-[22px] h-[22px] text-[#141B34]" />
          </button>
        </div>

        {/* Inner Wrapper */}
        <div className="w-full px-[50px] pb-[30px]">
          {/* AUTH SECTION */}
          <div>
            {/* Header */}
            <div className="text-center">
              <h1 className="oswald-medium text-[29px] text-[#222222]">
                Welcome to Eventara
              </h1>

              <p className="poppins-regular text-[16px] text-[#727272] mt-[12px] leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-[15px] h-[70px] border border-[#BFBFBF] rounded-[16px] p-[6px] flex max-w-[520px] mx-auto">
              {/* Login */}
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`flex-1 rounded-[12px] poppins-medium text-[20px] text-[#111] transition ${
                  activeTab === "login" ? "bg-[#EAD6F9] shadow-sm" : "bg-white"
                }`}
              >
                Log In
              </button>

              {/* Signup */}
              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className={`flex-1 rounded-[12px] poppins-medium text-[20px] text-[#111] transition ${
                  activeTab === "signup" ? "bg-[#EAD6F9] shadow-sm" : "bg-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* ================= LOGIN ================= */}
            {activeTab === "login" && (
              <form
                className="mt-[42px] flex flex-col"
                onSubmit={loginForm.handleSubmit(handleLoginSubmit)}
              >
                {/* Email */}
                <div className="mb-[20px]">
                  <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                    Email address
                  </label>

                  <input
                    type="email"
                    {...registerLogin("email")}
                    placeholder="Enter your email address"
                    className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                  />
                  {loginErrors.email && (
                    <span className="text-sm text-red-500">
                      {loginErrors.email?.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...registerLogin("password")}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />

                    <button
                      type="button"
                      className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                      onClick={() => setShowLoginPassword((prev) => !prev)}
                    >
                      <Eye
                        className={`w-[22px] h-[22px] ${
                          showLoginPassword ? "block" : "hidden"
                        }`}
                      />

                      <EyeOff
                        className={`w-[22px] h-[22px] ${
                          showLoginPassword ? "hidden" : "block"
                        }`}
                      />
                    </button>
                    {loginErrors.password && (
                      <span className="text-sm text-red-500">
                        {loginErrors.password?.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className={`mt-[25px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[var(--color-electric-600)] text-white transition ${
                    loginMutation.isPending
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[var(--color-electric-700)]"
                  }`}
                >
                  {loginMutation.isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Logging In...
                    </span>
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
            )}

            {/* ================= SIGNUP ================= */}
            {activeTab === "signup" && (
              <form
                className="mt-[42px] flex flex-col"
                onSubmit={signupForm.handleSubmit(handleSignupSubmit)}
              >
                {/* Full Name */}
                <div className="mb-[20px]">
                  <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...registerSignup("name")}
                    className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                  />
                  {signupErrors.name && (
                    <span className="text-sm text-red-500">
                      {signupErrors.name?.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="mb-[20px]">
                  <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...registerSignup("email")}
                    className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                  />
                  {signupErrors.email && (
                    <span className="text-sm text-red-500">
                      {signupErrors.email?.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="mb-[20px]">
                  <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showSignupPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...registerSignup("password")}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />

                    <button
                      type="button"
                      className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                      onClick={() => setShowSignupPassword((prev) => !prev)}
                    >
                      <Eye
                        className={`w-[22px] h-[22px] ${
                          showSignupPassword ? "block" : "hidden"
                        }`}
                      />

                      <EyeOff
                        className={`w-[22px] h-[22px] ${
                          showSignupPassword ? "hidden" : "block"
                        }`}
                      />
                    </button>
                    {signupErrors.password && (
                      <span className="text-sm text-red-500">
                        {signupErrors.password?.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-[12px]">
                  <input
                    type="checkbox"
                    id="terms-checkbox-modal"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mt-[5px] w-[22px] h-[22px] rounded-[6px] border border-[#D9D9D9] accent-[var(--color-electric-600)] cursor-pointer"
                  />

                  <label
                    htmlFor="terms-checkbox-modal"
                    className="poppins-regular text-[15px] leading-[30px] text-[#6C6C6C]"
                  >
                    By clicking
                    <span className="poppins-medium text-[#222]"> Sign Up</span>
                    , you agree to our{" "}
                    <Link
                      href="#"
                      className="text-[var(--color-electric-600)] hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-[var(--color-electric-600)] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  disabled={signupMutation.isPending}
                  className={`mt-[10px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[var(--color-electric-600)] text-white transition ${
                    signupMutation.isPending
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[var(--color-electric-700)]"
                  }`}
                >
                  {signupMutation.isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Signing Up...
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>
            )}

            {/* Divider */}
            <div className="mt-[10px]">
              <div className="flex items-center gap-[14px]">
                <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>

                <p className="poppins-medium text-[14px] text-[#8D8D8D] whitespace-nowrap">
                  Or continue with
                </p>

                <div className="flex-1 h-[1px] bg-[#E5E5E5]"></div>
              </div>
            </div>

            {/* Google */}
            <div className="flex justify-center items-center my-[30px]">
              <Link
                href="#"
                className="px-[66px] py-[11.5px] rounded-[45px] border border-[#F0F0F0] bg-white shadow-[0_8px_12px_rgba(0,0,0,0.16)] flex items-center justify-center gap-[20px] hover:shadow-[0_10px_18px_rgba(0,0,0,0.20)] transition-all duration-300"
              >
                <span className="w-[38px] h-[38px] rounded-full bg-[#F7F3F5] flex items-center justify-center shrink-0">
                  <Image
                    src="/images/google.png"
                    className="w-[38px] h-[38px] object-contain"
                    alt="Google"
                    width={38}
                    height={38}
                  />
                </span>

                <span className="poppins-semibold text-[15px] text-[#222222]">
                  Sign up with Google
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
