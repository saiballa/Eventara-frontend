"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import "swiper/css";

interface BrandLogosType{
    src:string;
    alt:string;
}
interface EventaraItemsType{
    id:number;
    brand:string;
    message:string;
    description:string;
}
const brandLogos = [
  {
    src: "/images/greenish.svg",
    alt: "Greenish",
  },
  {
    src: "/images/proline.svg",
    alt: "Proline",
  },
  {
    src: "/images/flash.svg",
    alt: "Flash",
  },
  {
    src: "/images/glossy.svg",
    alt: "Glossy",
  },
  {
    src: "/images/oslo.svg",
    alt: "Oslo",
  },
];
const sliderLogos:BrandLogosType[] = [
  ...brandLogos,
  ...brandLogos,
  ...brandLogos,
  ...brandLogos,
  ...brandLogos,
];

const eventaraItems:EventaraItemsType[] = [
  {
    id: 1,
    brand: "Eventara",
    message: "Making Memories Every Day",
    description: "Whatever your passion, there's an event waiting for you",
  },
  {
    id: 2,
    brand: "Eventara",
    message: "Making Memories Every Day",
    description: "Whatever your passion, there's an event waiting for you",
  },
  {
    id: 3,
    brand: "Eventara",
    message: "Making Memories Every Day",
    description: "Whatever your passion, there's an event waiting for you",
  },
];

export default function AboutPage() {
   

  return (
    <>
      <div className="bg-[var(--color-electric-100)] py-[20px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="text-[14px]">
              Home &gt;
              <span className="text-[var(--color-electric-600)]"> About Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <section>
        <div className="container mx-auto">
          <div className="max-w-[1320px]">
            <div className="text-center">
              <h1 className="text-[68px] oswald-semibold mx-auto">About Us</h1>
            </div>

            <div className="mt-[60px] lg:mt-[100px] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[20px]">
              {/* Image */}
              <figure className="w-full lg:w-[48%]">
                <img
                  src="images/img.png"
                  alt=""
                  className="w-full max-w-[650px] h-auto lg:h-[400px] object-cover rounded-[20px] mx-auto"
                />
              </figure>

              {/* Text */}
              <div className="w-full lg:w-[48%]">
                <p className="poppins-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[32px] lg:leading-[40px] text-[var(--color-gray)] text-center lg:text-left">
                  From live concerts and music festivals to sports, comedy
                  nights, workshops, and cultural celebrations—Eventara makes
                  discovering and booking unforgettable experiences simple,
                  fast, and secure.
                  <br />
                  Whether you're planning your weekend or attending the biggest
                  event of the year, we've got your ticket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand logo section */}
        <section className="bg-[var(--color-electric-900)] py-[60px] md:py-[80px] lg:py-[100px] mt-[60px] md:mt-[80px] lg:mt-[100px] overflow-hidden">
    {/* Brand logo Swiper */}
    <Swiper
      modules={[Autoplay]}
      className="brandLogoSwiper"
      slidesPerView="auto"
      spaceBetween={80}
      loop={true}
      speed={3000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
    >
      {sliderLogos.map((logo, index) => (
        <SwiperSlide
          key={`${logo.alt}-${index}`}
          className="!w-auto"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-[30px] sm:h-[36px] md:h-[42px] lg:h-[48px] w-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>

      {/* our mission */}
      <section className="py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[10px]">
              {/* Left Content */}
              <div className="w-full lg:w-[45%]">
                <h2 className="poppins-medium text-[52px] text-[var(--color-text)]">
                  Our Mission
                </h2>

                <p className="oswald-semibold text-[20px] leading-[32px] text-[var(--color-gray)] mt-[10px]">
                  Bringing people together through extraordinary experiences,
                  one event at a time.
                </p>

                <h3 className="oswald-semibold text-[32px] mt-[10px]">
                  Trusted By
                </h3>

                <ul className="mt-[20px] space-y-[15px]">
                  <li className="flex items-center gap-[10px]">
                    <span className="w-[10px] h-[10px] rounded-full bg-[var(--color-electric-600)]"></span>
                    <span className="poppins-medium text-[20px]">
                      10,000+ Event Organizers
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <span className="w-[10px] h-[10px] rounded-full bg-[var(--color-electric-600)]"></span>
                    <span className="poppins-medium text-[20px]">
                      500K+ Happy Attendees
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <span className="w-[10px] h-[10px] rounded-full bg-[var(--color-electric-600)]"></span>
                    <span className="poppins-medium text-[20px]">
                      100+ Cities
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <span className="w-[10px] h-[10px] rounded-full bg-[var(--color-electric-600)]"></span>
                    <span className="poppins-medium text-[20px]">
                      Secure Payments
                    </span>
                  </li>
                </ul>

                <h3 className="oswald-semibold text-[32px] mt-[20px]">
                  Created for Every Event Lover
                </h3>

                <p className="poppins-semibold text-[20px] leading-[32px] text-[var(--color-gray)] mt-[20px]">
                  Discover events that match your interests with personalized
                  recommendations, instant booking, and digital tickets—all in
                  one place.
                </p>
              </div>

              {/* Images */}
              <div className="relative w-full lg:w-[45%] h-[520px]">
                {/* Main Image */}
                <img
                  src="images/mission-2.png"
                  alt=""
                  className="absolute top-[120px] left-[120px] w-[420px] rounded-[12px] z-10 max-lg:top-[50%] max-lg:left-[50%] max-lg:-translate-x-[50%] max-lg:-translate-y-[50%] max-lg:w-[420px]"
                />

                {/* Top Image */}
                <img
                  src="images/mission-1.png"
                  alt=""
                  className="absolute top-[-50px] left-[-70px] w-[260px] rounded-[12px] z-20 max-lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventara moving section */}
      <section className="bg-[var(--color-electric-800)] py-[25px] sm:py-[35px] lg:py-[50px] overflow-hidden">
        <div className="mx-auto">
          <div className="mx-auto">
            {/* Swiper */}
            <Swiper
              modules={[Autoplay]}
              className="eventaraSwiper"
              slidesPerView="auto"
              loop={true}
              speed={8000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            >
              {eventaraItems.map((item) => (
                <SwiperSlide key={item.id} className="!w-auto">
                  <div className="flex items-center gap-[8px] sm:gap-[10px] whitespace-nowrap pl-[10px]">
                    <span className="poppins-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                      {item.brand}
                    </span>

                    <img
                      src="images/Star 2.svg"
                      alt=""
                      className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] object-contain"
                    />

                    <span className="poppins-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                      {item.message}
                    </span>

                    <img
                      src="images/Star 2.svg"
                      alt=""
                      className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] object-contain"
                    />

                    <span className="poppins-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-white">
                      {item.description}
                    </span>

                    <img
                      src="images/Star 2.svg"
                      alt=""
                      className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            {/* Founder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Founder Image */}
              <div className="w-full">
                <div className="border-[3px] sm:border-[4px] border-[var(--color-electric-900)] rounded-[15px] sm:rounded-[20px] p-[15px] sm:p-[20px] md:p-[25px] lg:p-[30px] w-full">
                  <img
                    src="images/alex-carter.png"
                    alt="Alex Carter"
                    className="w-full h-auto aspect-[588/417] object-cover"
                  />
                </div>
              </div>

              {/* Founder Content */}
              <div className="w-full mt-[30px] lg:mt-0 lg:pl-[15px] xl:pl-[24px]">
                <p className="poppins-regular text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[var(--color-text)] mb-[8px] sm:mb-[10px]">
                  Meet Our Founder
                </p>

                <h2 className="poppins-medium text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)] mb-[10px]">
                  Meet Alex Carter
                </h2>

                <p className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[var(--color-gray)]">
                  Eventix was created with one goal—to make discovering and
                  booking events effortless for everyone.
                  <br />
                  Our platform connects passionate organizers with excited
                  audiences through a seamless, secure, and enjoyable booking
                  experience.
                </p>

                <p className="poppins-regular text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-text)] mt-[15px] mb-[8px]">
                  Fun Facts
                </p>

                <ul className="space-y-[6px] sm:space-y-[8px] md:space-y-[10px]">
                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Music Lover
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Traveller
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Coffee Enthusiast
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Entrepreneur
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center py-[50px] sm:py-[60px] md:py-[80px] lg:py-[100px]"></div>

            {/* Team Member */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Team Content */}
              <div className="w-full order-2 lg:order-1 mt-[30px] lg:mt-0 lg:pr-[15px] xl:pr-[24px]">
                <p className="poppins-regular text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[var(--color-text)] mb-[8px] sm:mb-[10px]">
                  Meet Our Team
                </p>

                <h2 className="poppins-medium text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)] mb-[10px]">
                  Meet Sarah Wilson
                </h2>

                <p className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[var(--color-gray)]">
                  Sarah leads our creative and customer experience team,
                  ensuring every interaction—from browsing events to receiving
                  your ticket—is smooth and memorable.
                  <br />
                  She believes that great experiences begin long before the
                  event starts.
                </p>

                <p className="poppins-regular text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-text)] mt-[15px] mb-[8px]">
                  Fun Facts
                </p>

                <ul className="space-y-[6px] sm:space-y-[8px] md:space-y-[10px]">
                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Movie Buff
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Photographer
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Explorer
                  </li>

                  <li className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[var(--color-electric-700)]">
                    Creative Thinker
                  </li>
                </ul>
              </div>

              {/* Team Image */}
              <div className="w-full order-1 lg:order-2">
                <div className="border-[3px] sm:border-[4px] border-[var(--color-electric-900)] rounded-[15px] sm:rounded-[20px] p-[15px] sm:p-[20px] md:p-[25px] lg:p-[30px] w-full">
                  <img
                    src="images/sarah-wilson.png"
                    alt="Sarah Wilson"
                    className="w-full h-auto aspect-[588/417] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
