"use client";
import Link from "next/link";
import { Heart, MapPinned, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { FeaturedEventsSectionProps,EventsResponse,Event } from "@/types/type";
import "swiper/css";
import { getEventsByCategories } from "@/api/api.call";

export default function FeaturedEventsSection({
  selectedCategory,
}: FeaturedEventsSectionProps) {
  const {
    data: events = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events", selectedCategory],
    queryFn: () => getEventsByCategories(selectedCategory),
  });

  const featuredEvents = events.slice(0, 4).map((event) => {
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
      price: event.price || "499",
      link: `/events/${event._id}`,
    };
  });

  const handleAddToCart = (event: string) => {
    console.log("Add to cart:", event);
  };

  return (
    <>
      <section className="pb-[65px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            {/* Heading */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="oswald-semibold text-[40px] leading-none text-[var(--color-black)]">
                Featured Events
              </h2>

              <Link
                href={`/events?categoryId=${selectedCategory}`}
                className="poppins-regular text-base text-[var(--color-violetred-600)] underline"
              >
                View Details
              </Link>
            </div>

            {/* Loading */}
            {isLoading && (
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                grabCursor
                watchOverflow
                className="featured-event-slider"
              >
                {[1, 2, 3, 4].map((item) => (
                  <SwiperSlide key={item} className="!w-[312px]">
                    <div className="bg-white rounded-[20px] overflow-hidden shadow-[4px_0px_0px_0px_rgba(0,0,0,0.08)] animate-pulse">
                      {/* Image Skeleton */}
                      <div className="w-full h-[210px] bg-gray-200" />

                      {/* Content Skeleton */}
                      <div className="p-5">
                        <div className="h-6 w-[80%] bg-gray-200 rounded mb-4" />

                        <div className="h-5 w-[90%] bg-gray-200 rounded mb-6" />

                        <div className="flex items-center justify-between">
                          <div className="h-6 w-[110px] bg-gray-200 rounded" />

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

            {/* Empty */}
            {!isLoading && !isError && featuredEvents.length === 0 && (
              <div className="flex items-center justify-center min-h-[250px]">
                <p className="poppins-medium text-[16px] text-[var(--color-gray)]">
                  No events available.
                </p>
              </div>
            )}

            {/* Swiper */}
            {!isLoading && !isError && featuredEvents.length > 0 && (
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                grabCursor
                watchOverflow
                className="featured-event-slider"
              >
                {featuredEvents.map((event) => (
                  <SwiperSlide key={event.id} className="!w-[312px]">
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
                        <Link
                          href="#"
                          className="absolute top-4 right-4 w-[36px] h-[36px] rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <Heart className="w-4 h-4 text-white" />
                        </Link>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="poppins-semibold text-[20px] text-[var(--color-heading)] mb-2">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <MapPinned className="w-4 h-4 text-[var(--color-gray)]" />

                          <span className="poppins-medium text-[16px] text-[var(--color-gray)]">
                            {event.location}
                          </span>
                        </div>

                        {/* Bottom */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="poppins-semibold text-[20px] text-[var(--color-heading)]">
                              From
                            </span>

                            <span className="poppins-semibold text-[20px] text-[#8E67F8] ml-1">
                              {event.price}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToCart(event?.id)}
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
    </>
  );
}