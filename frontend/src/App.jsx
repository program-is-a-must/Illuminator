import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/Abouts/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Package from "./pages/Packages/package";
import FamilyPackage from "./pages/booking/familyPackage/familyPackage";
import Kiddies from "./pages/booking/kiddies/kiddies";
import Maternity from "./pages/booking/maternity/maternity";
import NewBorn from "./pages/booking/newBorn/newBorn";
import Personal from "./pages/booking/personal/personal";
import PreWedding from "./pages/booking/preWedding/preWedding";
import Book from "./book/Book";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/familyPackage" element={<FamilyPackage />} />
        <Route path="/kiddies" element={<Kiddies />} />
        <Route path="/maternity" element={<Maternity />} />
        <Route path="/newBorn" element={<NewBorn />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/preWedding" element={<PreWedding />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
