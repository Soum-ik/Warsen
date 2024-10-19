import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';

import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import top1 from "../../assets/img/topimg1.webp"
import top2 from "../../assets/img/topimg2.webp"
import top3 from "../../assets/img/topimg3.webp"
import top4 from "../../assets/img/topimg4.webp"
import top5 from "../../assets/img/topimg5.webp"
import top6 from "../../assets/img/topimg6.webp"
import top7 from "../../assets/img/topimg7.webp"

export default function ToGame() {
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
            title: "Dream Catcher",
            image: top1
        },
        {
            title: "Dream Catcher",
            image: top2
        },
        {
            title: "MONOPOLY Live",
            image: top3
        },
        {
            title: "XXXtreme Lightning Roulette",
            image: top4
        },
        {
            title: "Roulette Live",
            image: top5
        },
        {
            title: "Lightning Roulette",
            image: top6
        },
        {
            title: "MONOPOLY Big Baller",
            image: top7
        },

    ]
    return (
        <div className="topgame mt-4 lg:mt-5">
            <div className="container mx-auto z-[1]">
                <div className=' mb-3 flex items-center justify-between'>
                    <p className="text-white dark:text-black text-sm">Top Games</p>
                    <div className="swiper-nav  flex  gap-2 " data-aos="fade-up" data-aos-duration="" data-aos-delay="" data-aos-offset="0">
                        <button className="flex items-center justify-center me-1 p-0 " title='previous' onClick={prevSlide} disabled={isPrevSlide}>
                            <MdOutlineArrowBackIosNew />
                        </button>
                        <button className="flex  items-center justify-center p-0" title='previous' onClick={nextSlide} disabled={isNextSlide}>
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>

                </div>
                <div data-aos="fade-up" data-aos-duration="" data-aos-delay="" data-aos-offset="0">
                    <Swiper
                        className='testimonial-slider'
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
                            }
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
                                <div className="relative z-[1] h-[153px] w-full ">
                                    <img className=' h-full w-full rounded-lg' src={item.image} alt="" />
                                    <p className='whitetext p-[6px] bg-[#3F4142] dark:bg-[#F2F2F2]  dark:text-black rounded-b-lg w-full  absolute z-10 bottom-0 left-0'>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </div>
    )
}
