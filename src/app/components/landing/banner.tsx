"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Ticket, Users, ShieldEllipsis } from "lucide-react";

export default function BannerCom() {
  const [current, setCurrent] = useState(0); //banner

  const banners: string[] = [
    "/images/banner.png",
    "/images/banner-2.jpeg",
    "/images/banner-3.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto mt-[10px] w-full max-w-[1720px] min-h-[640px] lg:h-[640px] overflow-hidden rounded-none 2xl:rounded-[20px]">
          {/* Slides */}
          <div id="hero-slider" className="absolute inset-0">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`hero-slide absolute inset-0 bg-cover bg-center ${
                  index === current ? "active" : ""
                }`}
                style={{ backgroundImage: `url('${banner}')` }}
              />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent"></div>

          <div className="container relative z-10 h-full px-6 lg:px-8">
            <div className="flex h-full flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 py-8 lg:py-0">
              {/* Left Content */}
              <div className="text-white w-full lg:flex-1 max-w-[760px] text-left">
                <p className="uppercase text-[20px] poppins-semibold text-[#F96DAC] mb-[5px]">
                  Discover <span className="text-white">• Book •</span>{" "}
                  Experience
                </p>

                <h1 className="mb-[5px] text-[clamp(24px,4vw,40px)] font-bold leading-relaxed oswald-semibold">
                  Find Amazing Events.
                  <br />
                  Book Tickets Instantly.
                  <br />
                  Create Unforgettable Memories.
                </h1>

                <p className="text-white opacity-70 text-[clamp(13px,4vw,15px)] poppins-medium mb-[10px] max-w-[635px]">
                  Discover concerts, sports, comedy shows, workshops, festivals
                  and more happening near you. Secure your tickets in just a few
                  clicks and enjoy unforgettable experiences.
                </p>

                <button className="btn-type-1 transition-all duration-300 rounded-full self-start px-[38.5px] sm:px-8 lg:px-[34px] py-3 lg:py-[15px] inline-flex items-center justify-center gap-4 lg:gap-6 text-[18px] sm:text-[20px] lg:text-[24px] poppins-medium">
                  EXPLORE EVENTS
                  <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </button>
              </div>

              {/* Right Cards */}
              <div className="flex flex-col gap-3 lg:gap-5 oswald-regular w-full lg:w-[220px] xl:w-[240px] items-start mt-6 lg:mt-0 shrink-0">
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl px-4 py-4 lg:px-5 lg:py-5 w-full max-w-[320px] lg:max-w-none flex items-center gap-3 lg:gap-5">
                  <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-violet-600 flex items-center justify-center">
                    <Ticket className="w-6 h-6 text-white -rotate-45" />
                  </div>

                  <div>
                    <p className="text-white text-2xl lg:text-3xl oswald-regular">
                      500+
                    </p>
                    <span className="text-white opacity-50 text-sm lg:text-[20px] poppins-regular">
                      Events
                    </span>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl px-4 py-4 lg:px-5 lg:py-5 w-full max-w-[320px] lg:max-w-none flex items-center gap-3 lg:gap-5">
                  <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-violet-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-white text-2xl lg:text-3xl oswald-regular">
                      50K+
                    </p>
                    <span className="text-white opacity-50 text-sm lg:text-[16px] poppins-regular">
                      Happy Users
                    </span>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl px-4 py-4 lg:px-5 lg:py-5 w-full max-w-[320px] lg:max-w-none flex items-center gap-3 lg:gap-5">
                  <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-violet-600 flex items-center justify-center">
                    <ShieldEllipsis className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-white text-2xl lg:text-3xl oswald-regular">
                      100+
                    </p>
                    <span className="text-white opacity-50 text-sm lg:text-[15px] poppins-regular">
                      Secure Booking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
