"use client";

import Link from "next/link";
import { MapPin, Plus } from "lucide-react";
import { useEvents } from "@/customHooks/useEvents";
import { RailEventsSectionProps } from "@/types/type";

export default function RailEventsSection({
  selectedCategory,
}: RailEventsSectionProps) {
  const {
    data: events = [],
    isLoading,
    isError,
  } = useEvents(selectedCategory);

  return (
    <section className="py-[80px] xl:py-[10px]">
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] xl:grid-cols-[640px_minmax(0,1fr)] gap-[40px] xl:gap-[70px] items-start">

          {/* LEFT CONTENT */}

          <div className="lg:sticky lg:top-10 self-start h-fit text-center lg:text-left">
            <h2 className="oswald-semibold text-[52px] text-[var(--color-heading)] max-w-[481px] mx-auto lg:mx-0">
              Your Next Great
              Experience Starts Here
            </h2>

            <p className="mt-2 max-w-[640px] mx-auto lg:mx-0 poppins-medium text-[20px] leading-[32px] text-[#8C8C8C]">
              Discover the hottest concerts, festivals, sports and live shows
              happening near you.
            </p>
          </div>

          {/* RIGHT COLUMN */}

          <div className="relative flex justify-center lg:justify-end">

            {/* FILM STRIP */}

            <div className="film-strip-wrapper w-full max-w-[650px] rounded-[20px]">

              {/* LEFT RAIL */}
              <div className="film-strip-rail film-strip-left">
                <div className="film-strip-holes">
                                {/* rEPEAT*/}
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span>
                            </div>
              </div>

              {/* RIGHT RAIL */}
              <div className="film-strip-rail film-strip-right">
                <div className="film-strip-holes">
                               {/* reapeat */}
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span><span></span><span></span>
                                <span></span><span></span><span></span>
                            </div>
              </div>

              {/* CENTER CONTENT */}

              <div id="film-strip-content" className="film-strip-content">
                {isLoading && (
                  <div className="flex items-center justify-center min-h-[300px]">
                    <p className="poppins-medium text-[#8C8C8C]">
                      Loading events...
                    </p>
                  </div>
                )}

                {isError && (
                  <div className="flex items-center justify-center min-h-[300px]">
                    <p className="poppins-medium text-[#E12169]">
                      Failed to load events.
                    </p>
                  </div>
                )}

                {!isLoading && !isError && events.length === 0 && (
                  <div className="flex items-center justify-center min-h-[300px]">
                    <p className="poppins-medium text-[#8C8C8C]">
                      No events available.
                    </p>
                  </div>
                )}

                {!isLoading &&
                  !isError &&
                  events.map((event) => {
                    const eventDate = new Date(event.date);

                    return (
                      <div
                        key={event._id}
                        className="event-film-card"
                      >
                        {/* IMAGE */}

                        <div className="event-film-image">
                          <img
                            className="event-image"
                            src={event.banner}
                            alt={event.title}
                          />
                        </div>

                        {/* BODY */}

                        <div className="event-film-body">

                          {/* DATE */}

                          <p className="event-date poppins-regular capitalize text-[var(--color-electric-600)]">
                            {eventDate.toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>

                          {/* TITLE */}

                          <h3 className="event-title oswald-medium text-[var(--color-heading)]">
                            {event.title}
                          </h3>

                          {/* LOCATION */}

                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="w-5 h-5 text-[#9C9C9C]" />

                            <p className="event-location poppins-semibold text-[#7C7C7C]">
                              {event.location}
                            </p>

                            <Link
                              href={`/events/${event._id}`}
                              className="event-details poppins-regular text-[#E12169] cursor-pointer"
                            >
                              View Details
                            </Link>
                          </div>

                          {/* PRICE + ADD */}

                          <div className="flex items-center justify-between md:mt-1 mt-2">

                            <div className="flex items-center gap-2">
                              <p className="event-from poppins-semibold text-[20px] text-[#252525]">
                                From
                              </p>

                              <h4 className="event-price oswald-semibold text-[#FC5264]">
                                ₹
                                {Number(
                                  event.price || 499
                                ).toLocaleString("en-IN")}
                              </h4>
                            </div>

                            <button
                              type="button"
                              className="event-add-btn"
                              aria-label="Book Event"
                            >
                              <Plus />
                            </button>

                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}