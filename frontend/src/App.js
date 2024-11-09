import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Home from "./components/Home"
import FoodChartPage from "./components/foodchartpage";
import Predict from "./components/predict";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/imports" element={<FoodChartPage />}></Route>
          <Route path="/yield" element={<Predict />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
