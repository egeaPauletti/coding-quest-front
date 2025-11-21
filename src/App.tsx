import "./animations/animations.css";
import "./index.css";
//
import { Route, Routes } from "react-router-dom";
//
import AuthScreen from "./pages/authScreen";
import ChoseWorld from "./pages/choseWorldScreen";
import DiaryChal from "./pages/diaryChal";
import HomeScreen from "./pages/homeScreen";
import InitialScreen from "./pages/initialScreen";
import WorldScreen from "./pages/worldScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialScreen />} />
      <Route path="/login" element={<AuthScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/diaryChal" element={<DiaryChal />} />
      <Route path="/campaign" element={<ChoseWorld />} />
      <Route path="/worlds/*" element={<WorldScreen />} />
    </Routes>
  );
}

export default App;
