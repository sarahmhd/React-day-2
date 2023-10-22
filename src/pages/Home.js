import "./home.css";

import About from "./About";
import Counter from "../components/counter/Counter";
import { useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div className="home">
      <div className="container">
        <h3 className="counter text-white pt-5">
          Counter: <span>{counter}</span>{" "}
        </h3>
        <About />
      </div>
    </div>
  );
};

export default Home;
