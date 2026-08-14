import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function InspiringMindsSection() {
  const speakers = [
    {
      id: 1,
      date: "September 15",
      time: "Thursday - 7:00 pm",
      image: "/images/Inspiring image (1).jpg",
      name: "Daniel Kwon",
      designation: "Creative Director at Neon Labs",
      description:
        "Daniel Kwon art, technology, and storytelling to create impactful brand experiences. She has led award-winning campaigns for Fortune 500 companies and mentors.",
    },
    {
      id: 2,
      date: "August 15",
      time: "Thursday - 7:00 pm",
      image: "/images/Inspiring image (2).jpg",
      name: "Jacob Jones",
      designation: "Founder of CreateRise",
      description:
        "Former Google UX leader, Daniel now helps startups craft intuitive products. His talks deliver actionable insights on user psychology and minimalist design.",
    },
    {
      id: 3,
      date: "August 15",
      time: "Thursday - 7:00 pm",
      image: "/images/Inspiring image (3).jpg",
      name: "Ralph Edwards",
      designation: "Product Designer, Ex-Google",
      description:
        "Ralph Edwards is an entrepreneur and strategist, known for launching creative communities across Asia and building resilient, high-impact brands.",
    },
    {
      id: 4,
      date: "August 15",
      time: "Thursday - 7:00 pm",
      image: "/images/Inspiring image (4).jpg",
      name: "Leon Carter",
      designation: "AI and Design Researcher at Nova Institute",
      description:
        "Leon explores AI and human-centered design, inspiring audiences to adopt emerging tech responsibly and creatively.",
    },
  ];
  return (
    <>
      <section className="w-full py-12 md:py-20 lg:pb-[100px]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1920px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="oswald-semibold text-[36px] sm:text-[48px] md:text-[64px] leading-[44px] sm:leading-[60px] md:leading-[80px] text-[var(--color-black)]">
                Inspiring <br />
                Minds On Stage
              </h2>
            </div>

            {/* Cards */}
            <div>
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="inspiring-card group grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-8 py-6 md:py-8 border-b-2 border-[var(--color-border)]"
                >
                  {/* Date */}
                  <div className="flex flex-col xl:flex-row items-center lg:items-center lg:justify-start gap-2 sm:gap-6 h-full">
                    <h3 className="poppins-medium text-[28px] sm:text-[34px] md:text-[40px] leading-none xl:w-[290px]">
                      {speaker.date}
                    </h3>

                    <p className="oswald-regular text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-[var(--color-gray)] whitespace-nowrap leading-none">
                      {speaker.time}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="aspect-square w-[clamp(280px,20vw,500px)] overflow-hidden rounded-[20px] mx-auto flex justify-center items-center">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover blur-md group-hover:blur-0 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full max-w-[568px] mx-auto lg:ml-auto lg:mr-0 text-center lg:text-left flex flex-col justify-center h-full">
                    <h3 className="oswald-semibold text-[28px] sm:text-[34px] md:text-[40px] text-[var(--color-black)] mb-2 md:mb-3">
                      {speaker.name}
                    </h3>

                    <h4 className="poppins-medium text-[16px] sm:text-[18px] md:text-[20px] mb-3 md:mb-5 opacity-70">
                      {speaker.designation}
                    </h4>

                    <p className="poppins-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] md:leading-[32px] text-[var(--color-gray)] opacity-80">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* See all speakers Button */}
              <div className="w-full flex justify-center mt-7">
                <Link
                  href="./inspiring-mind.html"
                  className="inline-flex items-center rounded-full bg-[var(--color-violetred-600)] px-2 py-2 btn-type-1"
                >
                  <span className="poppins-medium text-white text-[18px] px-5">
                    See all speakers
                  </span>

                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[var(--color-heading)]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
