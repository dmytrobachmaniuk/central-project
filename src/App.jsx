import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "@/pages/Homepage/Homepage.jsx"
import MonoHotelPage from "@/pages/MonoHotelPage/MonoHotelPage.jsx"
// import RestaurantHotelPage from "@/pages/RestaurantHotelPage/RestaurantHotelPage.jsx"
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";


export default function App() {
  return (
    <Router>
      <LiquidGlassFilter /> {/*Загальний виклик*/}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mono-hotel" element={<MonoHotelPage />} />
        {/*<Route path="/restaurant-hotel" element={<RestaurantHotelPage />} />*/}
      </Routes>
    </Router>
  )
}
