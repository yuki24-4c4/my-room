import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Router basename="/my-room">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
