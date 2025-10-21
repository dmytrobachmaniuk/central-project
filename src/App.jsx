import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "@/pages/Homepage/Homepage.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}
