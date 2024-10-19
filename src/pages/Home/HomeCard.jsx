import { Flame, LoaderPinwheel } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { GiCardAceSpades } from "react-icons/gi";
import { GiCardRandom } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function HomeCard() {
  const homecard = [
    {
      title: "Search",
      image: <IoSearch size={30} />,
    },
    {
      title: "Spin & Win",
      image: <LoaderPinwheel size={30} />,
    },
    {
      title: "Leaderboard",
      image: <MdLeaderboard size={30} />
    },
    {
      title: "Top Games",
      image: <Flame size={30} />,
    },
    {
      title: "Recommended",
      image: <GiCardAceSpades size={30} />
    },
    {
      title: "Featured Games",
      image: <GiCardRandom size={30} />
    },
  ];

  return (
    <div className="homecard mt-2 lg:mt-6 dark:bg-white">
      <div className="container mx-auto">
        <div className="card-items">

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              481: {
                slidesPerView: 6,
                spaceBetween: 6,
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
                slidesPerView: 10,
                spaceBetween: 10,
              }
            }}
            centeredSlides={false}
            pagination={false}
            grabCursor={true}
            loop={true}

          >
            {homecard.map((item, idx) => (
              <SwiperSlide
                href="#"
                className="flex-col bg-[#22252A] dark:bg-[#F2F2F2] w-[150px] h-[180px] lg:w-[240px] lg:h-[240px] card px-4 pb-2 rounded-lg lg:rounded-[15px]"
                key={idx}
              >
                <div className="flex flex-col justify-center items-center">
                  <span className="icon-container dark:text-black w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center">
                    {item.image}
                  </span>
                  <span className="text-white dark:text-black w-[150px] text-center lg:w-[240px] block font-medium mt-2 md:mt-[10px]">
                    {item.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  );
}
