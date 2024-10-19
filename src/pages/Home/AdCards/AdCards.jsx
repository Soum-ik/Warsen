import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Mousewheel, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import card1 from "../../../assets/img/mcard1.webp";
import card2 from "../../../assets/img/mcard2.webp";
import card3 from "../../../assets/img/mcard3.webp";
import mcard1 from "../../../assets/img/mmcard1.webp";
import { Link } from "react-router-dom";

export default function MarqeSection() {
  const leftcard = [
    {
      title: "Lightning Dice",
      subtitle: "EVO",
      url: "/",
      image: card1,
    },
    {
      title: "Lightning Dice",
      subtitle: "EVO",
      url: "/",
      image: card2,
    },
    {
      title: "Lightning Dice",
      subtitle: "EVO",
      url: "/",
      image: card3,
    },
  ];
  const middlecard = [
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
    {
      title: "T*r***",
      des: "BDT 3144.00",
      subdes: "2024/10/11 16:52:43",
      image: mcard1,
    },
  ];
  return (
    <div className="marqueSection mt-4 lg:mt-5">
      <div className="container mx-auto">
        <div className="card-section grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          <div className="card card1 h-[315px] w-full overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
            >
              {leftcard.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative z-[1] ">
                    <img
                      className="w-full h-full rounded-sm lg:rounded-lg"
                      src={item.image}
                      alt=""
                    />
                    <div className=" absolute left-0 bottom-0 w-full flex   items-center justify-between bg-[#F4BD29] rounded-b-sm lg:rounded-b-lg p-3 lg:p-[15px]">
                      <div>
                        <p className="text-sm lg:text-base font-medium whitetext">
                          {item.title}
                        </p>
                        <p className="text-sm lg:text-base font-medium whitetext">
                          {item.subtitle}
                        </p>
                      </div>
                      <Link
                        to={`${item.url}`}
                        className="text-sm lg:text-base font-medium text-[#f4bd29] bg-white px-4 lg:px-5 py-[6px] lg:py-[10px] rounded-lg"
                      >
                        PLAY REAL
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="card h-[315px] lightbg card2 px-4 lg:px-5 py-1 md:py-[6px] overflow-hidden dark:bg-[#F2F2F2] ">
            <Swiper
              direction={"vertical"}
              slidesPerView={5}
              spaceBetween={30}
              mousewheel={{
                invert: true,
              }}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Mousewheel]}
              className="mySwiper"
            >
              {middlecard.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="mcard mb-3 w-full flex items-center justify-between">
                    <div className="flex items-center gap-3 lg:gap-6">
                      <img
                        className="w-10 lg:h-[60px] h-10 lg:w-[60px] rounded-full"
                        src={item.image}
                        alt=""
                      />
                      <p className="whitetext text-base dark:text-black font-medium leading-normal">
                        {item.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm dark:text-black/90 lg:text-base font-medium whitetext">
                        {item.des}
                      </p>
                      <span className="text-sm dark:text-black/80 text-red-200">
                        {item.subdes}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="card lightbg card3 h-[315px] flex dark:bg-[#F2F2F2] items-center justify-center">
            <div className="text-center">
              <p className="text-sm lg:text-base dark:text-black/90  font-medium  mb-5 lg:mb-6 xl:mb-[30px]">
              Desh88 Affiliate Program{" "}
              </p>
              <p className="text-sm lg:text-base dark:text-black/80 font-medium  mb-5 lg:mb-8 xl:mb-[45px]">
                {" "}
                Join Desh88 affiliate program, introduce new members using your
                affiliate referral link and earn life time commission.
              </p>
              <a
                href="#"
                className="text-sm lg:text-base font-medium text-white  bg-[#f4bd29] px-4 lg:px-7 py-[6px] lg:py-[10px] rounded-lg"
              >
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
