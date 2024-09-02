import { FaChevronRight } from "react-icons/fa";
import img7 from "../../../assets/rental_dubai/img7.png";
import img8 from "../../../assets/rental_dubai/img8.png";

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
    id: 7,
    img: img7,
    name: "Dodge Challenger",
    model: "AED 600",
    price: 167
  },
  {
    id: 8,
    img: img8,
    name: "Ford Mustang",
    model: "AED 399",
    price: 110
  }
];

const SportCars = () => {
  return (
    <div className="py-7 container">
      <div className=" py-10 w-full flex text-white font-medium items-center justify-between">
        <h1 className="text-[36px]">SPORTS CARS RENTAL DUBAI</h1>
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
                  <p className="text-[18px]">{car.model} / </p>
                  <p className="text-[#9B9797] text-[16px]">
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

export default SportCars;
