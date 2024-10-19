import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideBanner = () => {
  const BannerData = [
    {
      title: "Crazy Time",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.12230_3_1.webp?version=1"
          alt="Crazy Time"
        />
      ),
    },
    {
      title: "Dream Catcher",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.5051_3_1.webp?version=1"
          alt="Dream Catcher"
        />
      ),
    },
    {
      title: "MONOPOLY Live",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.13113_3_1.webp?version=1"
          alt="MONOPOLY Live"
        />
      ),
    },
    {
      title: "XXXtreme Lightning Roulette",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.31782_3_1.webp?version=2"
          alt="XXXtreme Lightning Roulette"
        />
      ),
    },
    {
      title: "Roulette Live",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.5041_3_1.webp?version=1"
          alt="Roulette Live"
        />
      ),
    },
    {
      title: "Lightning Roulette",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.13117_3_1.webp?version=1"
          alt="Lightning Roulette"
        />
      ),
    },
    {
      title: "MONOPOLY Big Baller",
      image: (
        <img
          className="w-full"
          src="https://download.ocms.cloud/v2/common/EVO/PlatformGameList.13114_3_1.webp?version=1"
          alt="MONOPOLY Big Baller"
        />
      ),
    },
  ];

  return (
    <>
      <Swiper className="mySwiper">
        {BannerData.map((data, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="rounded overflow-hidden shadow-lg">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    {data.image}
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                </div>
                <div className="px-6 py-4 flex justify-between items-center bg-[#F4BD29]">
                  <div>
                    <a
                      href="#"
                      className="font-semibold text-lg text-white transition duration-500 ease-in-out"
                    >
                      {data.title}
                    </a>
                    <p className="text-white text-sm">EVO</p>
                  </div>
                  <div>
                    <button className="text-[#F4BD29] p-2 px-3 rounded-md bg-white">
                      PLAY REAL
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SlideBanner;
