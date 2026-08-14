"use client";

import Link from "next/link";
import { Heart, MapPinned, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "@/api/api.call";
import "swiper/css";
import "swiper/css/free-mode";


export default function PopularEventsSection() {
  const {
    data: events = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["popular-events"],
    queryFn: getEvents,
  });

  const popularEvents = events.slice(0, 4).map((event) => {
    const eventDate = new Date(event.date);

    return {
      id: event._id,
      title: event.title,
      image: event.banner,
      date: eventDate.getDate(),
      month: eventDate.toLocaleString("en-US", {
        month: "short",
      }),
      location: event.location,
      price: event.price || 499,
      link: `/events/${event._id}`,
    };
  });

  const handleAddToCart = (eventId: string) => {
    console.log("Add to cart:", {
      eventId,
      quantity: 1,
    });
  };

  return (
    <section className="py-12 md:py-20 lg:pb-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto">
          {/* Heading */}
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <h2 className="oswald-semibold text-[28px] sm:text-[38px] md:text-[48px] xl:text-[40px] leading-none text-[var(--color-black)]">
              Popular Events
            </h2>
          </div>

          {/* Loading */}
          {isLoading && (
            <Swiper
              modules={[FreeMode]}
              className="featured-event-slider"
              slidesPerView="auto"
              spaceBetween={20}
              freeMode
              grabCursor
              watchOverflow
            >
              {[1, 2, 3, 4].map((item) => (
                <SwiperSlide
                  key={item}
                  className="!w-[280px] sm:!w-[312px]"
                >
                  <div className="bg-white rounded-[20px] overflow-hidden shadow-[4px_0px_0px_0px_rgba(0,0,0,0.08)] animate-pulse">
                    <div className="relative">
                      <div className="w-full h-[200px] bg-gray-200" />

                      <div className="absolute top-4 left-4 w-[56px] h-[56px] rounded-lg bg-gray-300" />

                      <div className="absolute top-4 right-4 w-[36px] h-[36px] rounded-full bg-gray-300" />
                    </div>

                    <div className="p-5 flex flex-col h-[240px]">
                      <div className="h-6 w-[85%] bg-gray-200 rounded mb-2" />

                      <div className="h-5 w-[90%] bg-gray-200 rounded mb-2" />

                      <div className="flex items-center justify-between mt-auto">
                        <div className="h-6 w-[100px] bg-gray-200 rounded" />

                        <div className="w-[50px] h-[50px] rounded-full bg-gray-200" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Error */}
          {isError && (
            <div className="flex items-center justify-center min-h-[250px]">
              <p className="poppins-medium text-[16px] text-[var(--color-gray)]">
                Failed to load events. Please try again.
              </p>
            </div>
          )}

          {/* No Events */}
          {!isLoading &&
            !isError &&
            popularEvents.length === 0 && (
              <div className="flex items-center justify-center min-h-[250px]">
                <p className="poppins-medium text-[16px] text-[var(--color-gray)]">
                  No events available.
                </p>
              </div>
            )}

          {/* Swiper */}
          {!isLoading &&
            !isError &&
            popularEvents.length > 0 && (
              <Swiper
                modules={[FreeMode]}
                className="featured-event-slider"
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                grabCursor
                watchOverflow
              >
                {popularEvents.map((event) => (
                  <SwiperSlide
                    key={event.id}
                    className="!w-[280px] sm:!w-[312px]"
                  >
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[4px_0px_0px_0px_rgba(0,0,0,0.08)]">
                      {/* Image */}
                      <div className="relative">
                        <Link href={event.link}>
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-auto object-cover"
                          />
                        </Link>

                        {/* Date */}
                        <div className="absolute top-4 left-4 w-[56px] h-[56px] rounded-lg bg-white flex flex-col items-center justify-center">
                          <span className="poppins-semibold text-[12px] leading-none text-[var(--color-violetred-500)]">
                            {event.date}
                          </span>

                          <span className="poppins-medium text-[11px] leading-none text-[var(--color-electric-700)] mt-2 uppercase">
                            {event.month}
                          </span>
                        </div>

                        {/* Wishlist */}
                        <button
                          type="button"
                          className="absolute top-4 right-4 w-[36px] h-[36px] rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col h-[240px]">
                        <h3 className="poppins-semibold text-[20px] text-[var(--color-heading)] mb-2 min-h-[72px]">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-2">
                          <MapPinned className="w-4 h-4 text-[var(--color-gray)]" />

                          <span className="poppins-medium text-[16px] text-[var(--color-gray)]">
                            {event.location}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <span className="poppins-semibold text-[20px]">
                              From
                            </span>

                            <span className="poppins-bold text-[20px] text-[var(--color-electric-600)] ml-1">
                              ₹{event.price.toLocaleString("en-IN")}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToCart(event.id)}
                            className="w-[50px] h-[50px] rounded-full bg-[var(--color-electric-600)] flex items-center justify-center hover:bg-[var(--color-electric-700)] duration-300"
                          >
                            <Plus className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
        </div>
      </div>
    </section>
  );
}