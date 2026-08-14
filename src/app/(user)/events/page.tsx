"use client";
import EventSlider from "@/app/components/events/slider";

export default function EventsPage() {

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

      <EventSlider/>
    </>
  );
}
