import { Download, House } from "lucide-react";
import '../../assets/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SubNavbar = () => {
  const links = [
    { href: "/Exchange", label: "Exchange" },
    { href: "/Sports", label: "Sports" },
    { href: "/Casino", label: "Casino" },
    { href: "/Slots", label: "Slots" },
    { href: "/Crash", label: "Crash" },
    { href: "/Table", label: "Table" },
    { href: "/CardGame", label: "Card Game" },
    { href: "/Fishing", label: "Fishing" },
    { href: "/CockFlight", label: "Cock Flight" },
    { href: "/Racing", label: "Racing" },
    { href: "/Lottery", label: "Lottery" },
    { href: "/Bingo", label: "Bingo" },
    { href: "/Promotion", label: "Promotion" },
    { href: "/VIP", label: "VIP" },
  ];

  return (
    <div>
      <nav className="border-gray-200 text-white bg-[#22252A] dark:bg-[#F2F2F2] dark:border-gray-700">
        <div className="container mx-auto flex items-center ">
          {/* Fixed Icons */}
          <a href="/" className="mx-4 my-[10px] md:hidden">
            <House size={20} />
          </a>
          <a href="/" className="mx-4 my-[10px] md:hidden">
            <Download size={20} />
          </a>

          {/* Swipable Links */}
          <div className="md:hidden">
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
                  slidesPerView: 6,
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
                  slidesPerView: 16,
                  spaceBetween: 10,
                }
              }}
              centeredSlides={false}
              pagination={false}
              grabCursor={true}
              loop={true}
            >
              {links.map((link, index) => (
                <SwiperSlide key={index} className=" max-w-[60px] my-[10px] mt-[25px]">
                  <a href={link.href} className="py-2 px-3 md:p-0 text-white dark:text-black/70 rounded">
                    {link.label}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center my-[10px]">
            <a href="/" className="mx-2 my-[10px]">
              <House size={20} />
            </a>
            <a href="/" className="mx-2 my-[10px]">
              <Download size={20} />
            </a>

            {links.map((link, index) => (
              <div key={index} className=" flex items-center justify-center gap-2 max-w-max my-[10px] mt-[10px] mx-3">
                <a href={link.href} className="py-2 px-2 md:p-0 text-white dark:text-black/70 rounded">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SubNavbar;
