import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from '../../../public/size1.jpg'
import image2 from '../../../public/size2.jpg'


const Hero = () => {
  return (
    <section className="bg-red-600 text-white">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <img
            src={image1}
            alt="Hero Image"
        className="h-[10%] w-full"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Hero Image"
            className="h-[50%] w-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://download.ocms.cloud/v2/JWB0/PictureLanguage.119.3.jpeg?version=0"
            alt="Hero Image"
            className="w-full"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://download.ocms.cloud/v2/JWB0/PictureLanguage.119.11.jpeg?version=0"
            alt="Hero Image"
            className="w-full"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://download.ocms.cloud/v2/JWB0/PictureLanguage.121.11.jpeg?version=3"
            alt="Hero Image"
            className="w-full"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
