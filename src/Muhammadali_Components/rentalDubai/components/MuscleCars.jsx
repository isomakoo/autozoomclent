import { FaChevronRight } from "react-icons/fa";

import img17 from "../../../assets/rental_dubai/img17.png";
import img18 from "../../../assets/rental_dubai/img18.png";

// Swiper modullarini import qilish
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const cars = [
  {
    id: 17,
    img: img17,
    name: "Ford Mustang",
    model: "AED 399",
    price: 110
  },
  { id: 18, img: img18, name: "Dodge Challenger", model: "AED 550", price: 153 }
];

const MuscleCars = () => {
  return (
    <div className="py-7">
      <div className=" py-10 w-full flex text-white font-medium items-center justify-between">
        <h1 className="text-[36px]">MUSCLE CARS RENTAL DUBAI</h1>
        <div className="flex items-center gap-3 text-[20px]">
          <p>SEE ALL</p>
          <Link to="#">
            <button className=" border-2 w-9 h-9 rounded-[50%] flex items-center justify-center">
              <FaChevronRight />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Swiper
          // Swiper modullarini o'rnatish
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {cars.map((car) => (
            <SwiperSlide
              key={car.id}
              className="hover:bg-slate-900 h-[430px] rounded-2xl p-5 flex flex-col items-center justify-around">
              <div className="w-[223px] h-[310px] flex items-center justify-center">
                <img src={car.img} alt={car.name} className="w-full" />
              </div>
              <div className="w-full space-y-2">
                <h2 className="w-full text-[24px]">{car.name}</h2>
                <hr />
                <div className="flex items-center justify-start text-white gap-1">
                  <p className="text-[18px] font-bold">{car.model} / </p>
                  <p className="text-[#9B9797] text-[16px]">
                    {" "}
                    $ {car.price} AED
                  </p>
                </div>
                <p className="text-[#9B9797] text-[14px]">per day</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MuscleCars;
