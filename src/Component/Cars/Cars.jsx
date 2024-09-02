import './Cars.css'
import '../Hero/Hero.css'
import En from "../../assets/en.png";
import Ru from "../../assets/ru.png";
import logo1 from "../../../autozoom.svg";
import { useEffect, useState } from 'react';

function Cars() {
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchCarDetails = async () => {
        try {
          console.log(`ID: ${id} bo'yicha avtomobil ma'lumotlarini olish`);
          const response = await fetch(`https://api.autozoomrental.com/api/cars`);
          
          if (!response.ok) {
            const errorText = await response.text(); // Serverdan xatolik matnini olish
            throw new Error(`Tarmoq javobi to'g'ri emas: ${errorText}`);
          }
  
          const data = await response.json();
          console.log('Olingan avtomobil malumotlari:', data);
          // Ma'lumotlarni o'rnatish uchun setState funksiyasidan foydalaning, agar kerak bo'lsa
        } catch (error) {
          console.log('Avtomobil malumotlarini olishda xatolik:', error.message);
          setError(error.message); // Xatolikni holatda saqlash
        }
      };
  
      fetchCarDetails();
    }, []);
    

  return (
    <>
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

    </>
  )
}

export default Cars