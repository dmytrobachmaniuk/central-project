import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "@/pages/Homepage/Homepage.jsx"
import MonoHotelPage from "@/pages/MonoHotelPage/MonoHotelPage.jsx"
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";
import CentralHotelPage from "@/pages/CentralHotelPage/CentralHotelPage.jsx";
import BookMonoPage from "@/pages/BookMonoPage/BookMonoPage.jsx";
import BookCentralPage from "@/pages/BookCentralPage/BookCentralPage.jsx";
import ConditionsPage from "@/pages/ConditionsPage/ConditionsPage.jsx";
import AboutPage from "@/pages/AboutPage/AboutPage.jsx";


export default function App() {
  return (
    <Router>
      <LiquidGlassFilter /> {/*Загальний виклик*/}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mono-hotel" element={<MonoHotelPage />} />
        <Route path="/central-hotel" element={<CentralHotelPage />} />
        <Route path="/mono-book" element={<BookMonoPage />} />
        <Route path="/central-book" element={<BookCentralPage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}
