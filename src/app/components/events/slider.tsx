"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Star,
} from "lucide-react";

type EventData = {
  id: number;
  image: string;
  title: string;
  rating: string;
  date: string;
  time: string;
  description: string;
};

const events: EventData[] = [
  {
    id: 1,
    image: "/images/event-card-1.png",
    title: "Coldplay Live",
    rating: "4.9",
    date: "2026",
    time: "3hr 19mins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus montes nec arcu tellus. Mi posuere imperdiet pulvinar ac morbi imperdiet nulla turpis.",
  },
  {
    id: 2,
    image: "/images/event-card-2.png",
    title: "Imagine Dragons",
    rating: "4.8",
    date: "2026",
    time: "2hr 50mins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus montes nec arcu tellus. Mi posuere imperdiet pulvinar ac morbi imperdiet nulla turpis.",
  },
  {
    id: 3,
    image: "/images/event-card-3.png",
    title: "Maroon 5",
    rating: "4.7",
    date: "2026",
    time: "3hr 10mins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus montes nec arcu tellus. Mi posuere imperdiet pulvinar ac morbi imperdiet nulla turpis.",
  },
  {
    id: 4,
    image: "/images/event-card-4.png",
    title: "The Weeknd Live",
    rating: "4.9",
    date: "2026",
    time: "3hr 20mins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus montes nec arcu tellus. Mi posuere imperdiet pulvinar ac morbi imperdiet nulla turpis.",
  },
  {
    id: 5,
    image: "/images/event-card-5.png",
    title: "Ed Sheeran",
    rating: "4.8",
    date: "2026",
    time: "2hr 45mins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus montes nec arcu tellus. Mi posuere imperdiet pulvinar ac morbi imperdiet nulla turpis.",
  },
];

export default function EventSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const wrap = (index: number) => {
    return (index + events.length) % events.length;
  };

  /*
    Same logic as the original JavaScript:

    front  = current
    middle = current + 1
    back   = current + 2
    back2  = current + 3
    back3  = current + 4
  */

  const frontEvent = events[wrap(current)];
  const middleEvent = events[wrap(current + 1)];
  const backEvent = events[wrap(current + 2)];
  const back2Event = events[wrap(current + 3)];
  const back3Event = events[wrap(current + 4)];

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => wrap(prev + 1));

      setTimeout(() => {
        setIsAnimating(false);
      }, 190);
    }, 190);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((prev) => wrap(prev - 1));

      setTimeout(() => {
        setIsAnimating(false);
      }, 190);
    }, 190);
  };

  return (
    <section className="eb-wrapper relative overflow-hidden pt-8 sm:pt-10 lg:pt-0 pb-12 sm:pb-16 lg:pb-2">

      {/* Background Blur */}

      <div className="absolute top-[-180px] right-[-180px] w-[420px] h-[420px] rounded-full bg-[#B86DFF]/30 blur-[180px]" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#6A00FF]/20 blur-[150px]" />

      <div className="max-w-[1520px] mx-auto px-5 xl:pl-[10px] xl:pr-5">

        <div className="grid grid-cols-1 xl:grid-cols-[620px_minmax(0,1fr)] 2xl:grid-cols-[732px_minmax(0,1fr)] items-center gap-[clamp(1rem,3vw,2.5rem)] xl:gap-12">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="flex flex-col text-center xl:text-left items-center xl:items-start order-1 xl:order-1">

            <h1 className="text-white oswald-semibold text-[clamp(2rem,7vw,4rem)]">
              One Night. One Stage.
              <br />
              Infinite Memories.
            </h1>

            <p className="text-white/50 poppins-medium text-[clamp(0.95rem,2.2vw,1.25rem)] leading-[1.7] mt-[clamp(1rem,3vw,2rem)] max-w-[712px]">
              Get ready for an unforgettable night as one of the world's biggest
              music icons takes the stage. With breathtaking visuals,
              chart-topping hits, and an electrifying atmosphere.
            </p>

            {/* Explore Events Button */}

            <button className="mt-[clamp(1.5rem,4vw,2.5rem)] h-[clamp(52px,7vw,68px)] px-[clamp(22px,4vw,36px)] rounded-full bg-gradient-to-r from-[#EE4291] to-[#AE40E4] text-white flex items-center gap-[clamp(12px,2vw,20px)] poppins-medium text-[clamp(1rem,2vw,1.25rem)] btn-type-1">

              Explore Events

              <span className="w-[clamp(38px,6vw,48px)] h-[clamp(38px,6vw,48px)] rounded-full bg-white text-[#AE40E4] flex items-center justify-center">

                <ArrowRight className="w-5 h-5" />

              </span>

            </button>

            {/* =====================================================
                NAVIGATION ARROWS
            ====================================================== */}

            <div className="flex gap-[clamp(12px,2vw,24px)] mt-[clamp(1.5rem,5vw,3.5rem)] justify-center xl:justify-start w-full">

              <button
                id="prevBtn"
                onClick={prevSlide}
                disabled={isAnimating}
                className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] xl:w-[72px] xl:h-[72px] rounded-full border border-white text-white hover:bg-white hover:text-[#7D35D8] duration-300 flex items-center justify-center disabled:cursor-not-allowed"
              >
                <ArrowLeft
                  className="w-6 h-6"
                  strokeWidth={2}
                />
              </button>

              <button
                id="nextBtn"
                onClick={nextSlide}
                disabled={isAnimating}
                className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] xl:w-[72px] xl:h-[72px] rounded-full border border-white text-white hover:bg-white hover:text-[#7D35D8] duration-300 flex items-center justify-center disabled:cursor-not-allowed"
              >
                <ArrowRight
                  className="w-6 h-6"
                  strokeWidth={2}
                />
              </button>

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE - EVENT SLIDER
          ====================================================== */}

          <div className="relative order-2 xl:order-2 h-[380px] sm:h-[400px] md:h-[450px] lg:h-[560px] xl:h-[760px] mt-0 xl:mt-0 flex justify-center xl:justify-end items-center overflow-visible">

            <div
              id="event-slider"
              className="relative w-full max-w-[760px] h-full"
            >

              {/* =====================================================
                  FRONT CARD
              ====================================================== */}

              <div
                id="frontCard"
                className="card-front absolute w-[585px] h-[585px] rounded-[18px] overflow-hidden shadow-2xl bg-black"
              >

                <img
                  id="frontImage"
                  src={frontEvent.image}
                  alt={frontEvent.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* BLACK BLUR / DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/0" />

                {/* Bottom Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                {/* Play Button */}

                <button className="absolute right-8 bottom-[22%] w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-[99]">

                  <Play className="w-5 h-5 ml-1" />

                </button>

                {/* Information */}

                <div className="absolute left-0 right-0 bottom-0 w-full border border-white/15 bg-white/10 backdrop-blur-2xl px-[18px] pt-[9px] pb-[38px]">

                  <h3 className="text-white text-[27px] oswald-semibold">
                    {frontEvent.title}
                  </h3>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <span className="text-white poppins-medium">
                      {frontEvent.rating}
                    </span>

                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />

                    <p className="text-white poppins-medium">
                      {frontEvent.date}
                    </p>

                    <p className="text-white poppins-regular">
                      {frontEvent.time}
                    </p>

                  </div>

                  <p className="mt-[3.5px] text-white/50 leading-normal poppins-regular text-[10.8px]">
                    {frontEvent.description}
                  </p>

                </div>

              </div>


              {/* =====================================================
                  MIDDLE CARD
              ====================================================== */}

              <div
                id="middleCard"
                className="card-middle absolute w-[585px] h-[585px] rounded-[18px] overflow-hidden shadow-2xl bg-black"
              >

                <img
                  id="middleImage"
                  src={middleEvent.image}
                  alt={middleEvent.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* BLACK BLUR / DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                <button className="absolute right-8 bottom-[22%] w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-[99]">

                  <Play className="w-5 h-5 ml-1" />

                </button>

                <div className="absolute left-0 right-0 bottom-0 w-full border border-white/15 bg-white/10 backdrop-blur-2xl px-[18px] pt-[9px] pb-[38px]">

                  <h3 className="text-white text-[27px] oswald-semibold">
                    {middleEvent.title}
                  </h3>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <span className="text-white poppins-medium">
                      {middleEvent.rating}
                    </span>

                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />

                    <p className="text-white poppins-medium">
                      {middleEvent.date}
                    </p>

                    <p className="text-white poppins-regular">
                      {middleEvent.time}
                    </p>

                  </div>

                  <p className="mt-[3.5px] text-white/50 leading-normal poppins-regular text-[10.8px]">
                    {middleEvent.description}
                  </p>

                </div>

              </div>


              {/* =====================================================
                  BACK CARD
              ====================================================== */}

              <div
                id="backCard"
                className="card-back absolute w-[585px] h-[585px] rounded-[18px] overflow-hidden shadow-2xl bg-black"
              >

                <img
                  id="backImage"
                  src={backEvent.image}
                  alt={backEvent.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* BLACK BLUR / DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/55 backdrop-blur-[4px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                <button className="absolute right-8 bottom-[22%] w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-[99]">

                  <Play className="w-5 h-5 ml-1" />

                </button>

                <div className="absolute left-0 right-0 bottom-0 w-full border border-white/15 bg-white/10 backdrop-blur-2xl px-[18px] pt-[9px] pb-[38px]">

                  <h3 className="text-white text-[27px] oswald-semibold">
                    {backEvent.title}
                  </h3>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <span className="text-white poppins-medium">
                      {backEvent.rating}
                    </span>

                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />

                    <p className="text-white poppins-medium">
                      {backEvent.date}
                    </p>

                    <p className="text-white poppins-regular">
                      {backEvent.time}
                    </p>

                  </div>

                  <p className="mt-[3.5px] text-white/50 leading-normal poppins-regular text-[10.8px]">
                    {backEvent.description}
                  </p>

                </div>

              </div>


              {/* =====================================================
                  BACK CARD 2
              ====================================================== */}

              <div
                id="backCard2"
                className="card-back-2 absolute w-[585px] h-[585px] rounded-[18px] overflow-hidden shadow-2xl bg-black"
              >

                <img
                  id="back2Image"
                  src={back2Event.image}
                  alt={back2Event.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* BLACK BLUR / DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/65 backdrop-blur-[5px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                <button className="absolute right-8 bottom-[22%] w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-[99]">

                  <Play className="w-5 h-5 ml-1" />

                </button>

                <div className="absolute left-0 right-0 bottom-0 w-full border border-white/15 bg-white/10 backdrop-blur-2xl px-[18px] pt-[9px] pb-[38px]">

                  <h3 className="text-white text-[27px] oswald-semibold">
                    {back2Event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <span className="text-white poppins-medium">
                      {back2Event.rating}
                    </span>

                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />

                    <p className="text-white poppins-medium">
                      {back2Event.date}
                    </p>

                    <p className="text-white poppins-regular">
                      {back2Event.time}
                    </p>

                  </div>

                  <p className="mt-[3.5px] text-white/50 leading-normal poppins-regular text-[10.8px]">
                    {back2Event.description}
                  </p>

                </div>

              </div>


              {/* =====================================================
                  BACK CARD 3
              ====================================================== */}

              <div
                id="backCard3"
                className="card-back-3 absolute w-[585px] h-[585px] rounded-[18px] overflow-hidden shadow-2xl bg-black"
              >

                <img
                  id="back3Image"
                  src={back3Event.image}
                  alt={back3Event.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                    isAnimating ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* BLACK BLUR / DARK OVERLAY */}

                <div className="absolute inset-0 bg-black/75 backdrop-blur-[6px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                <button className="absolute right-8 bottom-[22%] w-[72px] h-[72px] rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white z-[99]">

                  <Play className="w-5 h-5 ml-1" />

                </button>

                <div className="absolute left-0 right-0 bottom-0 w-full border border-white/15 bg-white/10 backdrop-blur-2xl px-[18px] pt-[9px] pb-[38px]">

                  <h3 className="text-white text-[27px] oswald-semibold">
                    {back3Event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-yellow-400">

                    <span className="text-white poppins-medium">
                      {back3Event.rating}
                    </span>

                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />

                    <p className="text-white poppins-medium">
                      {back3Event.date}
                    </p>

                    <p className="text-white poppins-regular">
                      {back3Event.time}
                    </p>

                  </div>

                  <p className="mt-[3.5px] text-white/50 leading-normal poppins-regular text-[10.8px]">
                    {back3Event.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}