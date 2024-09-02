import { useEffect, useState } from 'react';
import './App.css';
import Foother from './Component/Foother/Foother';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Main from './Component/Main/Main';
import Sidebar from './Component/Sidebar/Sidebar';
import LoadingScreen from './Component/loading/Loadingscren';
import CarDetails from './Component/Carddetalis/Carddetailes';
import { Route, Routes } from 'react-router-dom';
import Cars from './Component/Cars/Cars';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (e.g., API calls, data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Routes>
        <Route path="/cars/:id/:title" element={<CarDetails />} />
        <Route path="/" element={<Hero />} />
        <Route path="/cars" element={<Cars></Cars>} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;
