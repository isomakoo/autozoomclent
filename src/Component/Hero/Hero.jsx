import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import logo1 from "../../../autozoom.svg";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import En from "../../assets/en.png";
import Ru from "../../assets/ru.png";
import Mers from "../../assets/mers.png";
import Lambo from "../../assets/lambo.png";
import Rols from "../../assets/rols.png";
import Audi from "../../assets/audi.png";
import PrevImg from "../../assets/rigth.svg"; // Image for previous button
import NextImg from "../../assets/left.svg"; // Image for next button
import Btn from "../../assets/btn.svg"; // Image for reload button
import { Link } from "react-router-dom";

function Hero() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch car data from the API
    fetch("https://api.autozoomrental.com/api/brands")
      .then((response) => response.json())
      .then((data) => {
        setCars(data?.data || []);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const slides = [];
  const carsPerSlide = 2; // Adjust as needed

  // Split cars into groups for each slide
  for (let i = 0; i < cars.length; i += carsPerSlide) {
    slides.push(cars.slice(i, i + carsPerSlide));
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-list">
          <nav className="lnges">
            <img src={En} className="hero-icon" alt="English" />
            <img src={Ru} className="hero-icon" alt="Russian" />
            <input type="text" placeholder="Search" className="hero-input" />
          </nav>
          <img src={logo1} alt="Logo" className="hero-logo" />
          <nav className="hero-nav">
            <ul className="hero-navbar">
              <li className="hero-item">
                <a href="/" className="hero-link">
                  CARS
                </a>
              </li>
              <li className="hero-item">
                <a href="/" className="hero-link">
                  BRAND
                </a>
              </li>
              <li className="hero-item">
                <a href="/" className="hero-link">
                  SERVICE
                </a>
              </li>
              <li className="hero-item">
                <a href="/" className="hero-link">
                  ABOUT US
                </a>
              </li>
              <li className="hero-item">
                <a href="/" className="hero-link">
                  CONTACT
                </a>
              </li>
              <li className="hero-item">
                <a href="/" className="hero-link">
                  BLOG
                </a>
              </li>
            </ul>
            <a href="tel:+971527030189" className="hero-link">
              +971 52 7030189
            </a>
          </nav>
        </div>
        <h1 className="hero-title">TOP LUXURY CAR RENTAL DUBAI</h1>
        <p className="hero-text">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai at cheap prices.
        </p>
        <span className="hero-home">
          <b className="hero-texts">RENT A CAR DUBAI CATALOG</b>
          <button className="hero-btnes" onClick={handleReload}>
            <img src={Btn} alt="Reload" />
          </button>
        </span>
      </div>

      {/* Main Image Slider */}
      <div className="swiper-container">
        <Swiper
          className="swiper-comp"
          speed={1500}
          spaceBetween={30}
          navigation={false}
          pagination={false}
          loop={true}
          modules={[Navigation]}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className="car-slide">
              <Link to="/cars">
              <img src={Mers} alt="Mercedes" className="hero-images" />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-slide">
            <Link to="/cars">
              <img src={Lambo} alt="Lamborghini" className="hero-images" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="car-slide">
            <Link to="/cars">
              <img src={Rols} alt="Rolls Royce" className="hero-images" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="car-slide">
            <Link to="/cars">
              <img src={Audi} alt="Audi" className="hero-images" />
              </Link>
            </div>
          </SwiperSlide>
          <div className="hero-icons">
            <button onClick={handlePrev} className="nav-button prev-button">
              <img src={NextImg} alt="Previous" />
            </button>
            <button onClick={handleNext} className="nav-button next-button">
              <img src={PrevImg} alt="Next" />
            </button>
          </div>
        </Swiper>
        {/* Navigation buttons */}
      </div>

      {/* Cars from API */}
      <div className="container">
        <h1 className="hero-title">BRANDS</h1>
        <Swiper spaceBetween={10} slidesPerView={5} style={{ width: "1140px" }}>
          {slides.map((slideCars, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="car-grid">
                {slideCars.map((car, index) => (
                  <div key={index} className="car-item">
                    <Link
                      to={`/cars/${car.id}/${encodeURIComponent(car.title)}`}
                    >
                      <img
                        src={`https://api.autozoomrental.com/api/uploads/images/${car?.image_src}`}
                        alt={car.title}
                        style={{ width: "80px", height: "60px" }}
                      />
                      <h2>{car?.title}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
