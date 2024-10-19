import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import brand1 from "../../assets/img/brand1.webp";
import brand2 from "../../assets/img/brand2.webp";
import brand3 from "../../assets/img/brand3.webp";
import brand4 from "../../assets/img/brand4.webp";
import brand5 from "../../assets/img/brand5.webp";
import brand6 from "../../assets/img/brand6.webp";
import brand7 from "../../assets/img/brand7.webp";
import brand8 from "../../assets/img/brand8.webp";
import brand9 from "../../assets/img/brand9.webp";
import brand10 from "../../assets/img/brand10.webp";

export default function BrandCard() {
  const slidercard = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
  ];
  return (
    <div className="brand mt-6 lg:mt-8">
      <div className="container mx-auto">
        <div className="brand-content">
          <p className="text-white mb-2 lg:mb-3 dark:text-black text-sm md:text-base font-bold">
            Game Providers
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration=""
            data-aos-delay=""
            data-aos-offset="0"
          >
            <Swiper
              className="testimonial-slider"
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                481: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1500: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              centeredSlides={false}
              pagination={false}
              grabCursor={true}
              loop={true}
            >
              {slidercard.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="slider-card dark:bg-[#F2F2F2] relative z-[1] p-3 lg:p-[15px] w-full h-[130px] lightbg rounded-sm  md:rounded-md flex items-center justify-center ">
                    <img
                      className=" max-h-[100px]   w-[120px] rounded-lg object-contain "
                      src={item}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
