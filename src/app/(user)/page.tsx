"use client";

import BannerCom from "../components/landing/banner";
import SearchEeventsComponent from "../components/landing/searchevents";
import CategoriesSection from "../components/landing/categories";
import FeaturedEventsSection from "../components/landing/featuredEventsSection";
import TicketSection from "../components/landing/ticketsection";
import BiggestReleasesSection from "../components/landing/biggestReleases";
import PopularEventSection from "../components/landing/popularEvents";
import InspiringMindsSection from "../components/landing/inspireMinds";
import MomentsGallerySection from "../components/landing/momentsGallery";
import NewsAndUpdateSection from "../components/landing/news";
import SponscorsSection from "../components/landing/sponcors";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      {/* Banner */}
      <BannerCom />

      {/* search events */}
      <SearchEeventsComponent />

      {/* Categories section */}
      <CategoriesSection
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Featured Events Section */}
      <FeaturedEventsSection selectedCategory={selectedCategory} />

      {/* Ticket Section */}
      <TicketSection />

      {/* Biggest Releases */}
      <BiggestReleasesSection />

      {/* Popular Events */}
      <PopularEventSection />

      {/* Inspire minds section */}
      <InspiringMindsSection />

      {/* Moments Gallery Section */}
      <MomentsGallerySection />

      {/* News and Update Section */}
      <NewsAndUpdateSection />

      {/* Sponscors section */}
      <SponscorsSection />
    </>
  );
}
