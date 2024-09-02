import React, { useEffect, useState } from 'react';
import './Cardetails.css';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams(); // URL dan ID ni olish
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        console.log(`ID: ${id} bo'yicha avtomobil ma'lumotlarini olish`);
        const response = await fetch(`https://api.autozoomrental.com/api/brands/${id}`);
        
        if (!response.ok) {
          const errorText = await response.text(); // Serverdan xatolik matnini olish
          throw new Error(`Tarmoq javobi to'g'ri emas: ${errorText}`);
        }

        const data = await response.json();
        console.log('Olingan avtomobil malumotlari:', data);
        setCar(data?.data); // API javobidagi ma'lumotlarni o'rnatish
      } catch (error) {
        console.log('Avtomobil malumotlarini olishda xatolik:', error.message);
        setError(error.message); // Xatolikni holatda saqlash
      }
    };

    fetchCarDetails();
  }, [id]);

  if (error) {
    return <p>Xatolik yuz berdi: {error}</p>;
  }

  if (!car) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <div>
      <h1>Avtomobil Ma'lumotlari</h1>
      <img
        src={`https://api.autozoomrental.com/api/uploads/images/${car.image_src}`}
        alt={car.title}
        style={{ width: '300px', height: 'auto' }}
      />
      <h2>{car.title}</h2>
      <p>ID: {car.id}</p>
      {/* Boshqa avtomobil ma'lumotlarini shu yerda ko'rsatish */}
    </div>
  );
};

export default CarDetails;
