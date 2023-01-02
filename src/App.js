import Navbar from "./Components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import About from "./Components/About";
import Gaming from "./Components/Gaming";
import Laptop from "./Components/Laptop";
import Error from "./Components/Error";
import Product from "./Components/Product";
import Mobile from "./Components/Mobile";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/mobile" element={<Mobile />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
