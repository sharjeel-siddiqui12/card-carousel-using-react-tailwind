import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import carouselData from './carouselData'; // Ensure the path is correct
import '../App.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablet devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-3/4 m-auto mb-[60px]'>
      <div className="mt-20">
        <h1 className="text-black text-center font-bold text-[50px] mb-10 max-sd:text-[30px]">HOT DEALS</h1>
        <Slider {...settings}>
          {carouselData.map((d) => (
            <div 
              key={d.name} 
              className="bg-[#f5f5f5] mb-[20px] text-blue-950 rounded-xl text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div>
                <img 
                  src={d.img} 
                  alt={d.name} 
                  className="h-[100%] w-[100%] rounded" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
