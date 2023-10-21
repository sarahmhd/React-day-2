import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Row from "./components/Row";
import Shop from "./pages/Shop";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/day1" element={<Row />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
