"use client";

import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Ellipsis } from "lucide-react";
import { Category,CategoriesSectionProps } from "@/types/type";
import { getCategories } from "@/api/api.call";
import "swiper/css";
import "swiper/css/free-mode";

const categoryImages: Record<string, string> = {
  "Live Music": "/images/music.png",
  Comedy: "/images/comedy.png",
  Movies: "/images/workshops.png",
  "Standup Comedy": "/images/comedy.png",
  Technology: "/images/technology.png",
  Enviourment: "/images/all events.png",
};

export default function CategoriesSection({
  selectedCategory,
  handleCategoryChange,
}: CategoriesSectionProps) {
  

  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  

  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        <div className="max-w-[1320px] mx-auto">
          <Swiper
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={16}
            freeMode={true}
            grabCursor={true}
            className="categorySwiper"
          >
            {isLoading ? (
              <>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <SwiperSlide key={item} className="!w-auto">
                    <div className="w-[158.33px] h-[70px] flex items-center gap-3 px-3 py-3 rounded-xl bg-white shadow-[0px_6px_13px_-1px_rgba(0,0,0,0.25)] animate-pulse">
                      <div className="w-[50px] h-[50px] rounded-lg bg-gray-200 shrink-0" />

                      <div className="space-y-2">
                        <div className="h-3 w-[70px] rounded bg-gray-200" />
                        <div className="h-3 w-[45px] rounded bg-gray-200" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            ) : isError ? (
              <div className="text-red-500 poppins-regular">
                Failed to load categories
              </div>
            ) : (
              <>
                {/* All Events */}
                <SwiperSlide className="!w-auto">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("all")}
                    className={`w-[158.33px] h-[70px] flex items-center gap-3 px-3 py-3 rounded-xl shadow-[0px_6px_13px_-1px_rgba(0,0,0,0.25)] transition-colors duration-300 ${
                      selectedCategory === "all"
                        ? "bg-[var(--color-electric-200)] text-[var(--color-electric-600)]"
                        : "bg-white text-[var(--color-heading)]"
                    }`}
                  >
                    <img
                      src="/images/all events.png"
                      alt="All Events"
                      className="w-[50px] h-[50px] object-contain shrink-0"
                    />

                    <span className="poppins-regular text-base leading-[21px] flex-1 min-w-0 text-center break-words">
                      All Events
                    </span>
                  </button>
                </SwiperSlide>

                {/* API Categories */}
                {categories.map((category: Category) => (
                  <SwiperSlide key={category._id} className="!w-auto">
                    <button
                      type="button"
                      onClick={() => handleCategoryChange(category._id)}
                      className={`w-[158.33px] h-[70px] flex items-center gap-3 px-3 py-3 rounded-xl shadow-[0px_6px_13px_-1px_rgba(0,0,0,0.25)] transition-colors duration-300 ${
                        selectedCategory === category._id
                          ? "bg-[var(--color-electric-200)] text-[var(--color-electric-600)]"
                          : "bg-white text-[var(--color-heading)]"
                      }`}
                    >
                      <img
                        src={
                          categoryImages[category.categoryName] ||
                          "/images/all events.png"
                        }
                        alt={category.categoryName}
                        className="w-[50px] h-[50px] object-contain shrink-0"
                      />

                      <span className="poppins-regular text-base leading-[21px] flex-1 min-w-0 text-center break-words">
                        {category.categoryName || category?.name}
                      </span>
                    </button>
                  </SwiperSlide>
                ))}

                {/* More */}
                <SwiperSlide className="!w-auto">
                  <button
                    type="button"
                    className="w-[70px] h-[70px] flex items-center justify-center rounded-xl bg-white shadow-[0px_6px_13px_-1px_rgba(0,0,0,0.25)]"
                  >
                    <span className="w-[50px] h-[50px] rounded-full bg-[var(--color-border)] flex items-center justify-center">
                      <Ellipsis className="w-5 h-5 text-[var(--color-heading)]" />
                    </span>
                  </button>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
