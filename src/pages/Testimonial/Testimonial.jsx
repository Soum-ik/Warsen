/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testmoinalcard = [
    {
      title: "Working with the Desh88 affiliates is both convenient and easy as they are accommodating to our needs and budget. Their product is amazing for players offering generous bonuses and promotional offers. The Desh88 team was professional, easy to reach and all our requests were taken into account- and the results reflect that. Highly recommended!",
      subtitle: "Spinsvilla",
      ratting: 5
    },
    {
      title: "We are happy to work with Desh88 Affiliates. The relationship we established with our Desh88 Affiliate Manager is excellent. We at Guide2Gambling are confident that we will continue to work together for many years to come!",
      subtitle: "LuckyDice",
      ratting: 5
    },
    {
      title: "Working with the Desh88 affiliates is both convenient and easy as they are accommodating to our needs and budget. Their product is amazing for players offering generous bonuses and promotional offers. The Desh88 team was professional, easy to reach and all our requests were taken into account- and the results reflect that. Highly recommended!",
      subtitle: "Spinsvilla",
      ratting: 5
    },
    {
      title: "We are happy to work with Desh88 Affiliates. The relationship we established with our Desh88 Affiliate Manager is excellent. We at Guide2Gambling are confident that we will continue to work together for many years to come!",
      subtitle: "LuckyDice",
      ratting: 5
    },
    {
      title: "We are happy to work with Desh88 Affiliates. The relationship we established with our Desh88 Affiliate Manager is excellent. We at Guide2Gambling are confident that we will continue to work together for many years to come! ",
      subtitle: "LuckyDice",
      ratting: 5
    }

  ]
  return (
    <div >
      <div className="testimonial  container mx-auto mt-10 lg:mt-8">
        <div className="px-2 mx-auto">
          <div>
            <p className="text-white dark:text-black text-sm">
              Reviews
            </p>
            <div className="">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },

                }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[]}
                className="mySwiper"
              >
                {testmoinalcard.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="lightbg dark:bg-[#F2F2F2] flex justify-center  py-4 rounded-md w-full h-[330px] overflow-hidden" >
                      <section>
                        <div className="max-w-screen-xl px-4 text-center lg:px-6">
                          <figure className="max-w-screen-md mx-auto">
                            <div className="cottnation mb-3">
                              <svg
                                className=" text-gray-400 dark:text-gray-600"
                                viewBox="0 0 24 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <blockquote className="">
                              <p className="text-sm lg:text-base text-left font-medium text-white !leading-[170%] dark:text-black">
                                {item.title}
                              </p>
                              <p className="text-left text-sm lg:text-lg">-{item.subtitle}</p>
                            </blockquote>
                            <figcaption className=" space-x-3">
                              <div className="flex w-full items-center gap-2 lg:gap-3 py-4 lg:py-5 px-[6px] lg:px-[10px]">
                                {Array.from({ length: item.ratting }).map((_, idx) => (
                                <FaStar key={idx} className="text-[#F4BD29] w-5 h-5 lg:w-[25px] lg:h-[25px]" />
                              ))}
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </section>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
