import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BiggestReleasesSection() {
  return (
    <>
      <section className="py-[60px] md:py-[80px] lg:pt-[100px] lg:pb-[10px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1320px] mx-auto">
            {/* Heading */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 xl:gap-12 mb-8 lg:mb-12">
              {/* Left Content */}
              <h2 className="oswald-semibold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] max-w-[650px] text-[var(--color-black)]">
                Watch the Biggest Releases
              </h2>

              {/* Right Content */}
              <div className="right-content max-w-[635px] xl:max-w-[635px] xl:flex-shrink-0">
                <p className="poppins-medium text-[15px] md:text-[16px] lg:text-[20px] leading-7 md:leading-8 max-w-full mb-6">
                  Discover why Meetzi is more than just another event — it’s
                  where innovation, art, and technology collide.
                </p>

                <Link
                  href="#"
                  className="poppins-semibold inline-block text-[16px] sm:text-[18px] lg:text-[20px] text-white rounded-[10px] bg-[#7c3aed] px-6 sm:px-8 lg:px-9 py-2.5 lg:py-3"
                >
                  View more
                </Link>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Card 1 */}
              <div className="bg-black rounded-[20px] p-5 group flex flex-col h-full">
                <h3 className="oswald-semibold text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.25] text-white mb-6">
                  5 Things to Know Before Attending 2025
                </h3>

                <div className="flex justify-center md:justify-end mb-8 flex-1 items-center">
                  <img
                    src="images/movie-poster(1).png"
                    alt=""
                    className="w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] lg:w-[160px] lg:h-[160px] object-contain transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="flex justify-center mt-auto pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-full btn-type-1 px-2 py-2"
                  >
                    <span className="poppins-medium text-white text-[16px] lg:text-[20px] px-4 lg:px-5">
                      View Details
                    </span>

                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[var(--color-heading)]" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-black rounded-[20px] p-5 group flex flex-col h-full">
                <h3 className="oswald-semibold text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.25] text-white mb-6">
                  Meet the Creative Minds Behind 2025
                </h3>

                <div className="flex justify-center md:justify-end mb-8 flex-1 items-center">
                  <img
                    src="images/movie-poster(2).png"
                    alt=""
                    className="w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] lg:w-[160px] lg:h-[160px] object-contain transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="flex justify-center mt-auto pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-full btn-type-1 px-2 py-2"
                  >
                    <span className="poppins-medium text-white text-[16px] lg:text-[20px] px-4 lg:px-5">
                      View Details
                    </span>

                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[var(--color-heading)]" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-black rounded-[20px] p-5 group flex flex-col h-full md:col-span-2 xl:col-span-1">
                <h3 className="oswald-semibold text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.25] text-white mb-6">
                  Why Eventara Is the Must-Attend Event
                </h3>

                <div className="flex justify-center md:justify-end mb-8 flex-1 items-center">
                  <img
                    src="images/movie-poster(3).png"
                    alt=""
                    className="w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] lg:w-[160px] lg:h-[160px] object-contain transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="flex justify-center mt-auto pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center rounded-full btn-type-1 px-2 py-2"
                  >
                    <span className="poppins-medium text-white text-[16px] lg:text-[20px] px-4 lg:px-5">
                      View Details
                    </span>

                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[var(--color-heading)]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
