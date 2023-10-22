import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import Row from "./components/Row";
import Shop from "./pages/Shop";
import Todo from "./pages/todo/Todo";
import Users from "./pages/Users";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<Users />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/day1" element={<Row />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
