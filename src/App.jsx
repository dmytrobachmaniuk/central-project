import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "@/pages/Homepage/Homepage.jsx"
import MonoHotelPage from "@/pages/MonoHotelPage/MonoHotelPage.jsx"
import LiquidGlassFilter from "@/layouts/LiquidGlassFilter/LiquidGlassFilter.jsx";
import CentralHotelPage from "@/pages/CentralHotelPage/CentralHotelPage.jsx";
import BookMonoPage from "@/pages/BookMonoPage/BookMonoPage.jsx";
import BookCentralPage from "@/pages/BookCentralPage/BookCentralPage.jsx";
import ConditionsPage from "@/pages/ConditionsPage/ConditionsPage.jsx";
import AboutPage from "@/pages/AboutPage/AboutPage.jsx";
import ScrollToTop from "@/utils/ScrollToTop/ScrollToTop.jsx";
import ScrollToHash from "@/utils/ScrollToHash/ScrollToHash.jsx";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <LiquidGlassFilter />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToHash />
              <Homepage />
            </>
          }
        />
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
