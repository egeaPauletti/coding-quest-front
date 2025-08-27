import "./animations/animations.css";
import "./index.css";
//
import { Route, Routes } from "react-router-dom";
import AuthScreen from "./pages/authScreen";
import InitialScreen from "./pages/initialScreen";
import AboutScreen from "./pages/initialScreen/aboutScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialScreen/>}/>
      <Route path="/about" element={<AboutScreen/>} />
      <Route path="/login" element={<AuthScreen/>} />
      <Route path="/register" element="" />
      <Route path="/home" element="" />
      <Route path="/diaryChal" element="" />
      <Route path="/campaign" element="" />
      <Route path="/worlds/*" element="" />
    </Routes>
  );
}

export default App;
