
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../assets/banner1.jpg'; 
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Link } from 'react-router';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "বাগানের ফ্রেশ ও কেমিক্যালমুক্ত আম",
      subtitle: "সরাসরি রাজশাহীর বাগান থেকে আপনার দোরগোড়ায়।",
      img: banner1,
    },
    {
      id: 2,
      title: "ফরমালিন মুক্ত ১০০% নিরাপদ ফল",
      subtitle: "আমাদের প্রতিটি আম স্বাস্থ্যের জন্য নিরাপদ ও সুস্বাদু।",
      img: banner2,
    },
    {
      id: 3,
      title: "রাজশাহীর আসল আমের স্বাদ",
      subtitle: "হিমসাগর, ল্যাংড়া ও আম্রপালির সেরা কালেকশন।",
      img: banner3,
    }
  ];

  return (
    <div className="w-full h-125 md:h-150">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-3xl md:text-6xl font-black text-white mb-4 drop-shadow-lg leading-tight animate-fade-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-yellow-400 font-medium mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link to="/order">
                  <button type="button" className="bg-green-600 hover:bg-yellow-400 hover:text-green-950 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-xl border-2 border-transparent hover:border-white cursor-pointer">
                  এখনই অর্ডার করুন
                </button>
                </Link>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper custom styles */}
      <style>{`
        .swiper-button-next, .swiper-button-prev { color: #facc15 !important; }
        .swiper-pagination-bullet-active { background: #facc15 !important; }
      `}</style>
    </div>
  );
};

export default Banner;