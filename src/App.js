import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import About from "./About";
import Cart from "./Cart";
import Header from "./components/header/Header";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Row from "./components/Row";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/day1" element={<Row />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
