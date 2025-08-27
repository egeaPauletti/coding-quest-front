import "./animations/animations.css";
import "./index.css";
//
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen";
//
//
//

function App() {
  return (
    <Routes>
      <Route path="/" element="" />
      <Route path="/about" element="" />
      <Route path="/login" element="" />
      <Route path="/register" element="" />
      <Route path="/home" element={<HomeScreen/>} />
      <Route path="/diaryChal" element="" />
      <Route path="/campaign" element="" />
      <Route path="/worlds/*" element="" />
    </Routes>
  );
}

export default App;
