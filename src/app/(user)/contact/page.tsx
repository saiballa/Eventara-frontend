export default function ContactPage() {
  return (
    <>
      <div className="bg-[var(--color-electric-100)] py-[20px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="text-[14px]">
              Home &gt;
              <span className="text-[var(--color-electric-600)]"> Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <section className="py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px]">
            <div className="text-center">
              <span className="text-[20px] poppins-medium">Contact</span>

              <h1 className="text-[68px] oswald-semibold">Get in Touch</h1>

              <p className="text-[20px] poppins-semibold max-w-[1100px] mx-auto text-gray-400">
                Whether you have questions about ticket bookings, event
                management, partnerships, or technical support, our team is just
                a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CContact section */}
      <section className="py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-12 gap-[20px]">
              {/* Left Form */}
              <div className="col-span-12 lg:col-span-6">
                <form>
                  <div className="flex flex-col sm:flex-row gap-[15px] mb-[23px]">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[70px] text-[20px] poppins-medium border bg-[var(--color-light-gray)] border-gray-300 rounded-[4px] px-[16px] outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full h-[70px] text-[20px] poppins-medium border bg-[var(--color-light-gray)] border-gray-300 rounded-[4px] px-[16px] outline-none"
                    />
                  </div>

                  <div className="mb-[23px]">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-[70px] text-[20px] poppins-medium border bg-[var(--color-light-gray)] border-gray-300 rounded-[4px] px-[16px] outline-none"
                    />
                  </div>

                  <div className="mb-[23px]">
                    <textarea
                      placeholder="Message"
                      className="w-full h-[110px] text-[20px] poppins-medium border bg-[var(--color-light-gray)] border-gray-300 rounded-[4px] px-[16px] py-[14px] outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button className="flex items-center text-[24px] poppins-medium gap-[12px] bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full px-[24px] py-[10px]">
                    Send Message
                    <span className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center text-purple-600">
                      <i className="fa-solid fa-chevron-right text-[12px]"></i>
                    </span>
                  </button>
                </form>
              </div>

              {/* Right Card */}
              <div className="col-span-12 lg:col-span-6">
                <div className="border border-gray-300 rounded-[16px] p-[40px]">
                  <h3 className="text-[32px] oswald-regular mb-[18px]">
                    Stay Updated
                  </h3>

                  <p className="text-[20px] text-gray-500 poppins-medium mb-[25px]">
                    Never miss the hottest concerts, festivals, sports matches,
                    and exclusive early-bird ticket offers.
                  </p>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[70px] border text-[20px] poppins-medium bg-[var(--color-light-gray)] border-gray-300 rounded-[4px] px-[16px] mb-[16px] outline-none"
                  />

                  <button className="w-full h-[52px] rounded-[4px] poppins-medium text-[20px] text-white bg-gradient-to-r from-purple-600 to-fuchsia-500 font-medium">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {/* Card 1 */}
              <div className="bg-[#F7EFFF] rounded-[16px] shadow-md p-[30px]">
                <div className="flex gap-[15px]">
                  <div className="mt-[4px]">
                    <i className="fa-solid fa-headset text-[30px] text-[var(--color-heading)] mt-[4px]"></i>
                  </div>

                  <div>
                    <h3 className="oswald-regular text-[32px]">
                      +91 98765 43210
                    </h3>

                    <p className="poppins-semibold text-[20px] text-[var(--color-gray)] mt-[10px]">
                      Monday – Saturday
                    </p>

                    <p className="poppins-semibold text-[20px] text-[var(--color-gray)]">
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F7EFFF] rounded-[16px] shadow-md p-[30px]">
                <div className="flex gap-[15px]">
                  <div className="mt-[4px]">
                    <i className="fa-regular fa-envelope text-[30px] text-[var(--color-heading)] mt-2"></i>
                  </div>

                  <div>
                    <h3 className="oswald-regular text-[32px] underline">
                      support@eventara.com
                    </h3>

                    <p className="poppins-semibold text-[20px] text-[var(--color-gray)] mt-[10px]">
                      For booking support, cancellations, partnerships, and
                      general inquiries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F7EFFF] rounded-[16px] shadow-md p-[30px]">
                <div className="flex gap-[15px]">
                  <div className="mt-[4px]">
                    <i className="fa-solid fa-location-dot text-[30px] text-[var(--color-heading)] mt-[4px]"></i>
                  </div>

                  <div>
                    <h3 className="oswald-regular text-[32px] text-[var(--color-heading)]">
                      Visit Our Office
                    </h3>

                    <p className="poppins-semibold text-[20px] text-[var(--color-gray)] mt-[10px]">
                      Eventara Headquarter
                      <br />
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
