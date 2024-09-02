import { FaChevronRight } from "react-icons/fa";
import img9 from "../../../assets/rental_dubai/img9.png";
import img10 from "../../../assets/rental_dubai/img10.png";
import img11 from "../../../assets/rental_dubai/img11.png";
import img12 from "../../../assets/rental_dubai/img12.png";
import img13 from "../../../assets/rental_dubai/img13.png";
import img14 from "../../../assets/rental_dubai/img14.png";
import img15 from "../../../assets/rental_dubai/img15.png";
import img16 from "../../../assets/rental_dubai/img16.png";

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
    id: 9,
    img: img9,
    name: "Rolls-Royce Cullinan",
    model: "AED 3000",
    price: 2500
  },
  {
    id: 10,
    img: img10,
    name: "Mercedes Benz E350",
    model: "AED 600",
    price: 167
  },
  {
    id: 11,
    img: img11,
    name: "Hyundai Sonata",
    model: "AED 180",
    price: 50
  },
  { id: 12, img: img12, name: "Kia K 5", model: "AED 220", price: 62 },
  {
    id: 13,
    img: img13,
    name: "Hyundai Sonata",
    model: "AED 180",
    price: 50
  },
  { id: 14, img: img14, name: "Nissan Altima", model: "AED 130", price: 36 },
  {
    id: 15,
    img: img15,
    name: "Nissan Sentra",
    model: "AED 140",
    price: 40
  },
  { id: 16, img: img16, name: "Nissan Altima", model: "AED 120", price: 35 }
];

const LuxuryCars = () => {
  return (
    <div className="py-7 container">
      <div className=" py-10 w-full flex text-white font-medium items-center justify-between">
        <h1 className="text-[36px]">LUXURY CARS RENTAL DUBAI</h1>
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
              className="hover:bg-slate-900 h-[430px] rounded-3xl p-5 flex flex-col items-center justify-around">
              <div className="w-[223px] h-[310px] flex items-center justify-center">
                <img src={car.img} alt={car.name} className="w-full" />
              </div>
              <div className="w-full space-y-2">
                <h2 className="w-full text-[24px]">{car.name}</h2>
                <hr />
                <div className="flex items-center justify-start text-white gap-1">
                  <p className="text-[18px] font-bold">{car.model} / </p>
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

export default LuxuryCars;
