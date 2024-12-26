import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Student from "./components/Student";
import { RentManagment } from "./components/RentManagment";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/menu" element={<Student />} />
        <Route path="/location" element={<Student />} />
      </Routes>
      <RentManagment />
    </div>
  );
}

export default App;
