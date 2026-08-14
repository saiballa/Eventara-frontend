import { Ticket, ChevronRight } from "lucide-react";

export default function TicketSection() {
  return (
    <>
      <section className="mt-25 mb-25">
        <div className="container">
          <div className="ticket-section relative overflow-hidden rounded-[40px]">
            {/* Mobile Top Scallop */}
            <div className="flex md:hidden absolute top-0 left-0 right-0 justify-evenly -translate-y-1/2 z-20 px-5">
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="w-6 h-6 rounded-full bg-white"></span>
            </div>

            {/* Tablet & Desktop Left Scallop */}
            <div className="hidden md:flex absolute left-0 top-0 h-full flex-col justify-evenly -translate-x-1/2 z-20 py-4 lg:py-6">
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
              <span className="w-8 h-8 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-full bg-white"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 items-center">
              {/* LEFT */}
              <div>
                {/* Countdown */}
                <div className="flex justify-between sm:justify-start sm:gap-5 md:gap-6 lg:gap-7 mb-8 lg:mb-10">
                  <div className="text-center">
                    <h3 className="oswald-medium text-white text-[42px] sm:text-[52px] md:text-[60px] lg:text-[80px] leading-none">
                      02
                    </h3>

                    <p className="oswald-medium text-white text-[16px] md:text-[20px] lg:text-[30px]">
                      Days
                    </p>
                  </div>

                  <div className="oswald-medium text-white text-[30px] md:text-[40px] lg:text-[60px]">
                    :
                  </div>

                  <div className="text-center">
                    <h3 className="oswald-medium text-white text-[42px] sm:text-[52px] md:text-[60px] lg:text-[80px] leading-none">
                      09
                    </h3>

                    <p className="oswald-medium text-white text-[16px] md:text-[20px] lg:text-[30px]">
                      Hours
                    </p>
                  </div>

                  <div className="oswald-medium text-white text-[30px] md:text-[40px] lg:text-[60px]">
                    :
                  </div>

                  <div className="text-center">
                    <h3 className="oswald-medium text-white text-[42px] sm:text-[52px] md:text-[60px] lg:text-[80px] leading-none">
                      52
                    </h3>

                    <p className="oswald-medium text-white text-[16px] md:text-[20px] lg:text-[30px]">
                      Min
                    </p>
                  </div>

                  <div className="oswald-medium text-white text-[30px] md:text-[40px] lg:text-[60px]">
                    :
                  </div>

                  <div className="text-center">
                    <h3 className="oswald-medium text-white text-[42px] sm:text-[52px] md:text-[60px] lg:text-[80px] leading-none">
                      40
                    </h3>

                    <p className="oswald-medium text-white text-[16px] md:text-[20px] lg:text-[30px]">
                      Sec
                    </p>
                  </div>
                </div>
                {/* Heading */}
                <div className="flex justify-between items-start gap-8 mb-8">
                  <div>
                    <h3 className="oswald-medium text-white text-[36px] sm:text-[44px] md:text-[48px] lg:text-[60px] leading-none">
                      Secure your
                    </h3>

                    <h3 className="oswald-medium text-white text-[36px] sm:text-[44px] md:text-[48px] lg:text-[60px] leading-none mt-3 lg:mt-5">
                      Spot Today
                    </h3>
                  </div>

                  {/* Desktop Only */}
                  <div className="hidden lg:flex flex-col gap-3 shrink-0">
                    <div className="flex items-center gap-3">
                      <Ticket className="w-6 h-6 text-[var(--color-violetred-500)] -rotate-45" />

                      <span className="poppins-regular text-white text-[15px]">
                        Limited Seats Available Hurry!!
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Ticket className="w-6 h-6 text-[var(--color-violetred-500)] -rotate-45" />

                      <span className="poppins-regular text-white text-[15px]">
                        Join the Celebration Book Now
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Ticket className="w-6 h-6 text-[var(--color-violetred-500)] -rotate-45" />

                      <span className="poppins-regular text-white text-[15px]">
                        Experience the Magic with us....
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Name */}
                <div className="relative inline-block">
                  <p className="oswald-semibold text-[56px] sm:text-[72px] md:text-[82px] lg:text-[110px] leading-none bg-gradient-to-r from-[#3C5CFF] to-[#7A8DFF] bg-clip-text text-transparent">
                    EVENTARA 26
                  </p>

                  <img
                    src="./images/gyt.png"
                    className="hidden lg:block absolute -right-45 -bottom-5 w-[155px] animate-slow-spin"
                    alt="Grab Your Ticket"
                  />
                </div>
              </div>
              {/* RIGHT */}
              <div className="relative">
                <div className="hidden md:block absolute -left-5 lg:-left-8 top-2 bottom-2 border-l-4 lg:border-l-[8px] border-dashed border-white/70"></div>

                <img
                  src="./images/t-img.png"
                  className="rounded-2xl w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[7/8] max-h-[420px] object-cover"
                  alt=""
                />

                <div className="flex justify-center mt-6 lg:mt-8">
                  <button className="btn-type-1 inline-flex items-center justify-center gap-5 lg:gap-8 px-[29px] py-4 lg:py-5 text-[20px] md:text-[24px] lg:text-[28px]">
                    Buy Now
                    <span className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full text-black flex items-center justify-center">
                      <ChevronRight className="w-6 h-6" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
