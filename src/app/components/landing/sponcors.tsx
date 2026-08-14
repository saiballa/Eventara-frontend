export default function SponscorsSection() {
  return (
    <>
      <section className="py-[100px] lg:py-32 bg-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-16 lg:-mb-15 md:-mb-15">
            <h2 className="oswald-semibold text-[40px] md:text-[52px] lg:text-[64px] leading-normal">
              Our Proud
              <br />
              Partners
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:[&>.mobile-spacer]:hidden">
              {/* Row 1 */}
              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-1.png" className="w-[157px]" alt="" />
              </div>

              <div className="mobile-spacer partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A] md:hidden"></div>
              <div className="hidden md:block"></div>

              <div className="mobile-spacer partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A] md:hidden"></div>
              <div className="hidden md:block"></div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              {/* Row 2 */}
              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-2.png" className="w-[157px]" alt="" />
              </div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-3.png" className="w-[157px]" alt="" />
              </div>

              {/* Row 3 */}
              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-4.png" className="w-[157px]" alt="" />
              </div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-5.png" className="w-[157px]" alt="" />
              </div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              {/* Row 4 */}
              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-6.png" className="w-[157px]" alt="" />
              </div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-7.png" className="w-[157px]" alt="" />
              </div>

              {/* Row 5 */}
              <div className="mobile-spacer partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A] md:hidden"></div>
              <div className="hidden md:block"></div>

              <div className="partner-card partner-card-empty h-[115px] rounded-2xl border border-[#3A3A3A]"></div>

              <div className="partner-card h-[115px] rounded-2xl border border-[#3A3A3A] flex items-center justify-center">
                <img src="./images/sp-8.png" className="w-[157px]" alt="" />
              </div>

              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
