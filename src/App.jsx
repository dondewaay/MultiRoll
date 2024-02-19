import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Roll from "./pages/Roll";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roll" element={<Roll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
