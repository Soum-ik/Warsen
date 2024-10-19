import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import Img from "../assets/img/line.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

export default function Slider() {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  }, []);
  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  };
  const slidercard = [
    {
      title: "Q1  2025",
      des: [
        "Listing on major Centralized Exchanges (CEX)",
        "Formation of key partnerships ",
        "Debut of the first Blockchain Game",
      ],
    },
    {
      title: "Q2  2024",
      des: ["Website launch", "Smart Contract Deployment", "Testing"],
    },
    {
      title: "Q3  2024",
      des: [
        "Launch of Trend Swap",
        "Introduction of AI website  Creator & Token Creator tools",
      ],
    },
    {
      title: "Q4  2024",
      des: [
        "Rollout of Trend Web3 Ads platform",
        "Launch of Trend Pad",
        "Listing on TrendDx and strategic partnerships",
      ],
    },
  ];
  return (
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          481: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
        centeredSlides={false}
        pagination={false}
        grabCursor={true}
        loop={true}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        modules={[Pagination]}
      >
        {slidercard.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="slider-card p-5 lg:p-7 xl:p-8 overflow-hidden relative z-[1]">
              <div className="w-[150px] cricle-shap h-[150px] rounded-full absolute -left-14  -top-14"></div>
              <div className="w-full slider-body">
                <h5 className=" text-[32px] xl:text-[40px] mb-3 lg:mb-4 text-[#FEFDFD] !leading-[120%] font-medium">
                  {item.title}
                </h5>
                <img
                  className="h-3 mb-6 lg:mb-8 xl:mb-10 w-auto"
                  src={Img}
                  alt=""
                />
                <ul>
                  {item.des.map((itm, id) => (
                    <li
                      className="text-lg xl:text-2xl text-[#FEFDFD] !leading-[120%] mb-3 flex lg:mb-4 last:mb-0 gap-2 lg:gap-[14px]"
                      key={id}
                    >
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7783 28.8194C15.693 28.8194 16.4425 28.1461 16.5695 27.1933C17.8271 18.7075 18.9831 17.5262 27.1387 16.5989C28.0786 16.4845 28.8027 15.697 28.8027 14.7823C28.8027 13.8549 28.0914 13.0927 27.1513 12.953C19.0466 11.8224 18.0431 10.8315 16.5695 2.3585C16.4043 1.41845 15.6802 0.745117 14.7783 0.745117C13.851 0.745117 13.1141 1.41844 12.9618 2.37114C11.7296 10.8443 10.5736 12.0257 2.43072 12.953C1.46527 13.0801 0.753906 13.8422 0.753906 14.7823C0.753906 15.697 1.43987 16.4591 2.40532 16.5989C10.5227 17.7548 11.5135 18.7329 12.9618 27.2061C13.1523 28.1588 13.8891 28.8194 14.7783 28.8194Z"
                          fill="white"
                        />
                      </svg>
                      {itm}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-nav flex items-center justify-center gap-2 mt-6 md:mt-8 lg:mt-12"
        data-aos="fade-up"
        data-aos-duration=""
        data-aos-delay=""
        data-aos-offset="0"
      >
        <button
          className="flex items-center justify-center me-1 p-0"
          title="previous"
          onClick={prevSlide}
          disabled={isPrevSlide}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className="flex  items-center justify-center p-0"
          title="previous"
          onClick={nextSlide}
          disabled={isNextSlide}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
