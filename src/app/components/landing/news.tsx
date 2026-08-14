import Link from "next/link";

export default function NewsAndUpdateSection() {
  const recentNews = [
    {
      id: 1,
      title: "The Ultimate Guide to Booking Event Tickets Online",
      image: "/images/recent image (1).png",
      badge: "Blog",
      date: "May 12, 2026",
      author: "admin",
      link: "/blogs/the-ultimate-guide-to-booking-event-tickets-online",
    },
    {
      id: 2,
      title: "How to Plan a Successful Event from Start to Finish",
      image: "/images/recent image (2).png",
      badge: "Blog",
      date: "June 13, 2026",
      author: "admin",
      link: "/blogs/how-to-plan-a-successful-event-from-start-to-finish",
    },
    {
      id: 3,
      title: "Top 10 Music Festivals You Shouldn't Miss This Year",
      image: "/images/recent image (3).png",
      badge: "Blog",
      date: "August 20, 2026",
      author: "admin",
      link: "/blogs/top-10-music-festivals-you-shouldnt-miss-this-year",
    },
  ];

  return (
    <>
      <section className="py-12 md:py-25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1320px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="oswald-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-[44px] sm:leading-[60px] md:leading-[80px] max-w-[500px] mx-auto text-[var(--color-black)]">
                RECENT NEWS & UPDATES
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recentNews.map((news, index) => (
                <div
                  key={news.id}
                  className={`group w-full max-w-[420px] mx-auto lg:mx-0 ${
                    index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <Link href={news.link}>
                    <div className="relative overflow-hidden rounded-[20px]">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Badge */}
                      <span className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[var(--color-electric-700)] text-white poppins-medium text-[16px] sm:text-[18px] md:text-[20px] px-3 py-1 sm:px-4 rounded-[8px] sm:rounded-[10px]">
                        {news.badge}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="pt-5 sm:pt-6">
                    <h3 className="oswald-regular text-[22px] sm:text-[26px] md:text-[28px] text-[var(--color-black)] mb-3 sm:mb-5 transition-all duration-300 group-hover:text-[var(--color-electric-700)]">
                      {news.title}
                    </h3>

                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                      <span className="poppins-semibold text-[14px] sm:text-[16px] md:text-[20px] text-[var(--color-gray)]">
                        {news.date}
                      </span>

                      <span className="poppins-semibold text-[14px] sm:text-[16px] md:text-[20px] text-[var(--color-gray)]">
                        by {news.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10 md:mt-16">
              <Link
                href="/blogs"
                className="poppins-semibold inline-block text-[16px] sm:text-[18px] lg:text-[20px] text-white rounded-[10px] bg-[#7c3aed] px-6 sm:px-8 lg:px-9 py-2.5 lg:py-3"
              >
                Read All Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
