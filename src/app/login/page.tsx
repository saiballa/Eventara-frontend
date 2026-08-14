"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();

  // State Management
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showAuth, setShowAuth] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Switch Tab
  const switchTab = (showLogin: boolean) => {
    setActiveTab(showLogin ? "login" : "signup");
  };

  // Show Forgot Password
  const showForgotPassword = () => {
    setShowAuth(false);
    setShowForgot(true);
    setShowCreatePassword(false);
  };

  // Show Create Password
  const showCreatePasswordSection = () => {
    setShowForgot(false);
    setShowCreatePassword(true);
  };

  // Show Auth Section
  const showAuthSection = () => {
    setShowCreatePassword(false);
    setShowForgot(false);
    setShowAuth(true);
    switchTab(true);
  };

  // Handle Back Button
  const handleBack = () => {
    if (showCreatePassword) {
      setShowCreatePassword(false);
      setShowForgot(true);
      return;
    }

    if (showForgot) {
      setShowForgot(false);
      setShowAuth(true);
      switchTab(true);
      return;
    }

    router.push("/");
  };

  // Form Submissions
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email: loginEmail, password: loginPassword });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    });
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot Password:", { email: forgotEmail, otp });
    showCreatePasswordSection();
  };

  const handleCreatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Create Password:", { newPassword, confirmPassword });
    showAuthSection();
  };

  const togglePassword = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex items-center justify-center px-4 py-8">
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[767px] h-auto bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          
          {/* Back Button */}
          {(showForgot || showCreatePassword) && (
            <button
              type="button"
              onClick={handleBack}
              className="w-[24px] h-[24px] flex items-center justify-center rounded-full hover:bg-gray-100 transition my-[20px] ml-[20px]"
            >
              <ArrowLeft className="w-5.5 h-5.5 text-[#141B34]" />
            </button>
          )}

          <div className="w-full px-[50px]">
            
            {/* ===== AUTH SECTION ===== */}
            {showAuth && (
              <div id="auth-section">
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
                  <button
                    className={`flex-1 rounded-[12px] poppins-medium text-[20px] text-[#111] transition ${
                      activeTab === "login" ? "bg-[#EAD6F9] shadow-sm" : "bg-white"
                    }`}
                    type="button"
                    onClick={() => switchTab(true)}
                  >
                    Log In
                  </button>
                  <button
                    className={`flex-1 rounded-[12px] poppins-medium text-[20px] text-[#111] transition ${
                      activeTab === "signup" ? "bg-[#EAD6F9] shadow-sm" : "bg-white"
                    }`}
                    type="button"
                    onClick={() => switchTab(false)}
                  >
                    Sign Up
                  </button>
                </div>

                {/* ===== LOGIN FORM ===== */}
                <form
                  className={`mt-[42px] flex flex-col ${
                    activeTab === "login" ? "flex" : "hidden"
                  }`}
                  onSubmit={handleLogin}
                >
                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />
                  </div>

                  <div>
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                      />
                      <button
                        type="button"
                        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                        onClick={() => togglePassword(setShowLoginPassword)}
                      >
                        <i
                          className={`fa-regular ${
                            showLoginPassword ? "fa-eye" : "fa-eye-slash"
                          } text-[22px]`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end mt-[15px]">
                    <button
                      type="button"
                      onClick={showForgotPassword}
                      className="poppins-regular text-[15px] text-[#6c6c6c] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="mt-[10px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[#A437E6] text-white hover:bg-[#8D26C9] transition"
                  >
                    Log In
                  </button>
                </form>

                {/* ===== SIGNUP FORM ===== */}
                <form
                  className={`mt-[42px] flex flex-col ${
                    activeTab === "signup" ? "flex" : "hidden"
                  }`}
                  onSubmit={handleSignup}
                >
                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />
                  </div>

                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />
                  </div>

                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                      />
                      <button
                        type="button"
                        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                        onClick={() => togglePassword(setShowSignupPassword)}
                      >
                        <i
                          className={`fa-regular ${
                            showSignupPassword ? "fa-eye" : "fa-eye-slash"
                          } text-[22px]`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-[12px]">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="mt-[5px] w-[22px] h-[22px] rounded-[6px] border border-[#D9D9D9] accent-[#A437E6] cursor-pointer"
                    />
                    <label
                      htmlFor="terms-checkbox"
                      className="poppins-regular text-[15px] leading-[30px] text-[#6C6C6C]"
                    >
                      By clicking
                      <span className="poppins-medium text-[#222]"> Sign Up</span>,
                      you agree to our
                      <Link href="#" className="text-[#A437E6] hover:underline">
                        Terms &amp; Conditions
                      </Link>
                      and
                      <Link href="#" className="text-[#A437E6] hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-[10px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[#A437E6] text-white hover:bg-[#8D26C9] transition"
                  >
                    Sign Up
                  </button>
                </form>

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

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-[18px] my-[30px]">
                  {["facebook", "instagram", "google", "x"].map((social) => (
                    <Link
                      key={social}
                      href="#"
                      className="w-[46px] h-[46px] rounded-full border border-[#E6E6E6] bg-white flex items-center justify-center hover:border-[#AE40E4] hover:-translate-y-1 transition-all duration-300"
                    >
                      <Image
                        src={`/images/${social}.png`}
                        alt={social}
                        width={46}
                        height={46}
                        className="w-[46px] h-[46px]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ===== FORGOT PASSWORD SECTION ===== */}
            {showForgot && (
              <div id="forgot-section">
                <div className="text-center">
                  <h1 className="oswald-medium text-[29px] text-[#222222]">
                    Confirm Your Email Address
                  </h1>
                  <p className="poppins-regular text-[16px] text-[#727272] mt-[12px] leading-[26px]">
                    Enter your email address to receive a one-time password (OTP).
                  </p>
                </div>

                <form className="mt-[42px] flex flex-col" onSubmit={handleForgot}>
                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />
                  </div>

                  <div className="flex justify-end mb-[5px]">
                    <button
                      type="button"
                      className="text-[#A437E6] poppins-medium hover:underline"
                      onClick={() => alert("OTP sent to your email!")}
                    >
                      Get OTP
                    </button>
                  </div>

                  <div className="mb-[30px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      OTP
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mb-[50px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[#A437E6] text-white hover:bg-[#8D26C9] transition"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            )}

            {/* ===== CREATE PASSWORD SECTION ===== */}
            {showCreatePassword && (
              <div id="create-password-section">
                <div className="text-center">
                  <h1 className="oswald-medium text-[29px] text-[#222222]">
                    Change Password
                  </h1>
                  <p className="poppins-regular text-[16px] text-[#727272] mt-[12px] leading-[26px]">
                    Create a strong password for your Eventara account.
                  </p>
                </div>

                <form className="mt-[42px] flex flex-col" onSubmit={handleCreatePassword}>
                  <div className="mb-[20px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                      />
                      <button
                        type="button"
                        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                        onClick={() => togglePassword(setShowNewPassword)}
                      >
                        <i
                          className={`fa-regular ${
                            showNewPassword ? "fa-eye" : "fa-eye-slash"
                          } text-[22px]`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="mb-[30px]">
                    <label className="block poppins-regular text-[20px] text-[#2B2B2B] mb-[10px]">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full h-[72px] rounded-[14px] border border-[#CFCFCF] px-[22px] pr-[60px] text-[16px] poppins-regular text-[#2B2B2B] placeholder:text-[#A6A6A6] outline-none focus:border-[#AE40E4] transition"
                      />
                      <button
                        type="button"
                        className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#9D9D9D]"
                        onClick={() => togglePassword(setShowConfirmPassword)}
                      >
                        <i
                          className={`fa-regular ${
                            showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                          } text-[22px]`}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mb-[50px] w-full h-[60px] rounded-[5px] poppins-semibold text-[20px] bg-[#A437E6] text-white hover:bg-[#8D26C9] transition"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </div>
  );
}