"use client";
import EventSlider from "@/app/components/events/slider";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoriesSection from "@/app/components/landing/categories";
import RailEventsSection from "@/app/components/events/railcards";
import BiggestReleasesSection from "@/app/components/landing/biggestReleases";

export default function EventsPage() {
   const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || "all");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <div className="bg-[var(--color-electric-100)] py-[20px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="text-[14px]">
              Home &gt;
              <span className="text-[var(--color-electric-600)]">Event</span>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <EventSlider />

      <CategoriesSection
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Railcards Events Section */}
      <RailEventsSection selectedCategory={selectedCategory} />

      {/* Biggest movie Releases */}
      <div className="pb-[100px]">
  <BiggestReleasesSection/>
</div>
    </>
  );
}
