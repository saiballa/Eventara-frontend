"use client";
import { useState, useEffect, useRef } from "react";
import { Search, MapPin, LocateFixed, ChevronDown } from "lucide-react";

export default function SearchEeventsComponent() {
  const [isLocationOpen, setIsLocationOpen] = useState(false); //dropdown for event
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("All locations");

  interface CityType {
    name: string;
    image: string;
  }

  const cities: CityType[] = [
    {
      name: "Mumbai",
      image: "/images/mumbai.png",
    },
    {
      name: "Kolkata",
      image: "/images/kolkata.png",
    },
    {
      name: "Bengaluru",
      image: "/images/bengaluru.png",
    },
    {
      name: "Chennai",
      image: "/images/chennai.png",
    },
    {
      name: "Chandigarh",
      image: "/images/chandigarh.png",
    },
    {
      name: "Noida",
      image: "/images/mumbai.png", // Change when you have a Noida image
    },
    {
      name: "Kochi",
      image: "/images/kochi.png",
    },
    {
      name: "Goa",
      image: "/images/goa.png",
    },
    {
      name: "Delhi",
      image: "/images/delhi.png",
    },
    {
      name: "Pune",
      image: "/images/pune.png",
    },
  ];

  //for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section className="relative mt-5 lg:-mt-15 z-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-[1320px] mx-auto bg-white rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,.12)] p-4 md:p-5 lg:p-6">
            <form className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr_auto] gap-4 items-center">
              {/* Search */}
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search events, concert, workshops"
                  className="w-full h-[58px] pl-12 pr-4 rounded-xl border-2 border-[var(--color-border)] outline-none focus:border-[var(--color-electric-600)] text-[15px] poppins-regular"
                />
              </div>

              {/* Location */}
              <div ref={dropdownRef} className="relative w-full z-30">
                {/* Select Box */}
                <div
                  id="locationBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Button clicked");
                    setIsLocationOpen((prev) => !prev);
                  }}
                  className="flex items-center justify-between w-full h-[58px] px-4 border-2 rounded-xl cursor-pointer"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "var(--color-gray)" }}
                    />

                    <span
                      className="poppins-regular text-[15px]"
                      style={{ color: "var(--color-black)" }}
                    >
                      {selectedCity}
                    </span>
                  </div>

                  <ChevronDown
                    className="w-5 h-5"
                    style={{ color: "var(--color-gray)" }}
                  />
                </div>

                {/* Dropdown */}
                <div
                  id="locationDropdown"
                  className={`absolute top-[calc(100%+12px)] left-0 w-full xl:w-[900px] xl:left-1/2 xl:-translate-x-1/2 rounded-2xl shadow-xl border p-4 sm:p-5 md:p-6 z-[9999] max-h-[75vh] overflow-y-auto ${
                    isLocationOpen ? "block" : "hidden"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: "var(--color-white)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {/* Search */}
                  <div className="mb-5">
                    <h3 className="oswald-regular text-[20px] sm:text-[22px] md:text-[24px] mb-3">
                      Select location
                    </h3>

                    <input
                      type="text"
                      placeholder="Select location"
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full h-[48px] sm:h-[54px] border rounded-xl px-4 outline-none"
                      style={{ borderColor: "var(--color-border)" }}
                    />
                  </div>

                  {/* Current Location */}
                  <div className="flex items-center gap-3 mb-8 cursor-pointer">
                    <LocateFixed
                      className="w-5 h-5"
                      style={{ color: "var(--color-electric-600)" }}
                    />

                    <span className="poppins-semibold text-[15px]">
                      Use current location
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    className="poppins-semibold text-[18px] sm:text-[20px] mb-5"
                    style={{ color: "var(--color-gray)" }}
                  >
                    Popular cities
                  </h3>
                  {/* Cities */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {cities.map((city) => (
                      <div
                        key={city.name}
                        onClick={() => {
                          setSelectedCity(city.name);
                          setIsLocationOpen(false);
                        }}
                        className="rounded-2xl p-4 sm:p-5 md:p-6 text-center cursor-pointer"
                        style={{ backgroundColor: "var(--color-purple-light)" }}
                      >
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4"
                        />

                        <h4 className="poppins-semibold text-[16px] sm:text-[18px] md:text-[20px]">
                          {city.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Date */}
              <div className="relative w-full">
                <input
                  type="date"
                  className="w-full h-[58px] px-4 border-2 border-[var(--color-border)] rounded-xl outline-none focus:border-[var(--color-electric-600)]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-[58px] xl:min-w-[200px] rounded-xl bg-[#7D39F3] hover:bg-[var(--color-electric-700)] text-white poppins-semibold text-base xl:text-xl transition-all duration-300"
              >
                Search Events
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
