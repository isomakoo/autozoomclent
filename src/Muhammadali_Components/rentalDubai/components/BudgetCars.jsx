import { FaChevronRight } from "react-icons/fa";
import img1 from "../../../assets/rental_dubai/img1.png";
import img2 from "../../../assets/rental_dubai/img2.png";
import img3 from "../../../assets/rental_dubai/img3.png";
import img4 from "../../../assets/rental_dubai/img4.png";
import img5 from "../../../assets/rental_dubai/img5.png";
import img6 from "../../../assets/rental_dubai/img6.png";

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
    id: 1,
    img: img1,
    name: "Mitsubishi Mirage",
    model: "AED 79",
    price: 25
  },
  {
    id: 2,
    img: img2,
    name: "Hyundai Elantra",
    model: "AED 160",
    price: 50
  },
  {
    id: 3,
    img: img3,
    name: "Hyundai Elantra",
    model: "AED 160",
    price: 50
  },
  { id: 4, img: img4, name: "Kia K 5", model: "AED 180", price: 50 },
  {
    id: 5,
    img: img5,
    name: "Hyundai Elantra",
    model: "AED 160",
    price: 50
  },
  { id: 6, img: img6, name: "Kia Forte", model: "AED 140", price: 40 }
];

const BudgetCars = () => {
  return (
    <div className="py-7">
      <div className=" py-10 w-full flex text-white font-medium items-center justify-between">
        <h1 className="text-[36px]">BUDGET CARS RENTAL DUBAI</h1>
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

export default BudgetCars;
