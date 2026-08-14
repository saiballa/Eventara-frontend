"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Handbag,
  Search,
  Bell,
} from "lucide-react";

export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 
  const [showOverlay, setShowOverlay] = useState(false); 

   const openMenu = () => {
    setShowOverlay(true);

    setTimeout(() => {
      setIsMenuOpen(true);
    }, 10);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      setShowOverlay(false);
    }, 300);
  };
    return(
        <>
            <header className="header poppins-medium">
        <nav className="bg-white py-[10px]">
          <div className="container mx-auto h-full">
            <div className="flex items-center justify-between gap-6 xl:gap-10 h-full">
              {/* Logo */}
              <div className="shrink-0">
                <Link href="#">
                  <img
                    src="./images/logo.png"
                    alt="Eventara Logo"
                    className="w-[80px] sm:w-[90px] xl:w-[105px] h-auto"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex justify-center items-center gap-6 xl:gap-[80px] 2xl:gap-12 whitespace-nowrap">
                <li>
                  <Link
                    href="/"
                    className="text-[20px] poppins-medium text-[var(--color-electric-700)]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events"
                    target="_self"
                    className="text-[20px] poppins-medium hover:text-[var(--color-electric-700)] transition-colors"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="courses.html"
                    className="text-[20px] poppins-medium hover:text-[var(--color-electric-700)] transition-colors"
                  >
                    My Tickets
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-[20px] poppins-medium hover:text-[var(--color-electric-700)] transition-colors"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-[20px] poppins-medium hover:text-[var(--color-electric-700)] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Right Side Icons */}
              <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-5 flex-shrink-0">
                <Search className="w-6 h-6 cursor-pointer" />

                {/* Shopping Bag */}
                <Link href="#">
                  <Handbag className="w-6 h-6" />
                </Link>

                {/* Bell */}
                <Link href="#">
                  <Bell className="w-6 h-6" />
                </Link>

                {/* User */}
                {/*
          <a href="#">
            <img src="./images/user.png" alt="User" className="w-[50px] h-[50px]" />
          </a>
          */}

                <Link
                  href="./auth.html"
                  className="poppins-medium text-[20px] cursor-pointer hover:text-[var(--color-electric-700)] transition-colors"
                >
                  Log In / Sign Up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={openMenu}
                className="lg:hidden ml-auto text-2xl text-gray-700"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-navbar"
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
            showOverlay
              ? isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 visible"
              : "hidden"
          }`}
        >
          <div
            id="navbar-slide"
            className={`w-[300px] h-full bg-white rounded-r-[24px] shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-200">
              <img
                src="./images/logo.png"
                alt="Eventara"
                className="w-[95px] h-auto"
              />

              <button
                onClick={closeMenu}
                className="text-2xl text-gray-600 hover:text-black"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-2 mt-8">
              <li>
                <Link
                  href="index.html"
                  className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-violet-50 hover:text-violet-700 transition"
                >
                  <i data-lucide="house" className="w-5 h-5"></i>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="event.html"
                  className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-violet-50 hover:text-violet-700 transition"
                >
                  <i data-lucide="calendar-days" className="w-5 h-5"></i>
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="courses.html"
                  className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-violet-50 hover:text-violet-700 transition"
                >
                  <i data-lucide="ticket" className="w-5 h-5 -rotate-45"></i>
                  My Tickets
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-violet-50 hover:text-violet-700 transition"
                >
                  <i data-lucide="circle-alert" className="w-5 h-5"></i>
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="contact.html"
                  className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-violet-50 hover:text-violet-700 transition"
                >
                  <i data-lucide="mail" className="w-5 h-5"></i>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Bottom CTA */}
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <Link
                href="./auth.html"
                className="w-full h-[54px] rounded-xl border-2 border-[var(--color-electric-600)] text-[var(--color-electric-600)] poppins-medium text-[18px] flex items-center justify-center transition hover:bg-[var(--color-electric-50)]"
              >
                Log In
              </Link>

              <Link
                href="./auth.html"
                className="w-full h-[54px] rounded-xl border-2 border-[var(--color-electric-600)] text-[var(--color-electric-600)] poppins-medium text-[18px] flex items-center justify-center transition hover:bg-[var(--color-electric-50)]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}