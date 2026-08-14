import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#0B0B0B] text-white pt-24 min-h-[750px] flex flex-col">
        {/* Background Watermark */}
        <p className="footer-watermark oswald-semibold absolute left-1/2 top-[400px] -translate-x-1/2 whitespace-nowrap text-[160px] md:text-[220px] lg:text-[280px] xl:text-[360px] leading-none select-none pointer-events-none">
          EVENTARA
        </p>

        <div className="container relative z-10 flex-1 flex flex-col">
          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_.8fr_.8fr_.8fr] gap-16">
            {/* Left */}
            <div>
              <h2 className="oswald-semibold text-[40px] leading-none">
                EVENTARA
              </h2>

              <p className="mt-8 max-w-[560px] poppins-regular text-[14px] text-white/75">
                Book your favorite events in just a few clicks and experience
                memories that last forever. Discover amazing events and book
                tickets instantly.
              </p>

              {/* Social */}
              <div className="flex gap-5 mt-12">
                <Link
                  href="#"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition duration-300 hover:bg-[#EE4291] hover:text-white hover:-translate-y-1"
                >
                  <FaFacebookF size={20} />
                </Link>

                <Link
                  href="#"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition duration-300 hover:bg-[#EE4291] hover:text-white hover:-translate-y-1"
                >
                  <FaInstagram size={20} />
                </Link>

                <Link
                  href="#"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition duration-300 hover:bg-[#EE4291] hover:text-white hover:-translate-y-1"
                >
                  <FaTwitter size={20} />
                </Link>

                <Link
                  href="#"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition duration-300 hover:bg-[#EE4291] hover:text-white hover:-translate-y-1"
                >
                  <FaYoutube size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="poppins-semibold text-[16px] mb-[30px]">
                Quick Links
              </h4>

              <ul className="space-y-5 poppins-regular text-white/70">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-tickets"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    My Tickets
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="poppins-semibold text-[16px] mb-[30px]">
                Categories
              </h4>

              <ul className="space-y-5 poppins-regular text-white/70">
                <li>
                  <Link
                    href="/events/music"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Music
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/sports"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Sports
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/comedy"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Comedy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/workshop"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Workshop
                  </Link>
                </li>

                <li>
                  <Link
                    href="/events/arts-theatre"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Arts & Theatre
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="poppins-semibold text-[16px] mb-[30px]">
                Support
              </h4>

              <ul className="space-y-5 poppins-regular text-white/70">
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#EE4291] duration-300 text-[14px]"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-28">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
              <p className="text-white/50 poppins-regular text-sm">
                © 2026 EVENTARA. All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 poppins-regular">
                <Link
                  href="/privacy-policy"
                  className="hover:text-white duration-300"
                >
                  Privacy Policy
                </Link>

                <Link href="/terms" className="hover:text-white duration-300">
                  Terms & Conditions
                </Link>

                <Link href="/cookies" className="hover:text-white duration-300">
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sticker */}
        <div className="absolute left-1/2 bottom-[110px] -translate-x-1/2 z-20">
          <img
            src="./images/gyt.png"
            className="w-[150px] animate-slow-spin"
            alt="Grab Your Ticket"
          />
        </div>
      </footer>
    </>
  );
}
