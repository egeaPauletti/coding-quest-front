import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/InitialScreen/InitialScreen";
import LoginCard from "./pages/loginScreen/LoginCard";
import ChoseModeScreen from "./pages/choseMode/ChoseModeScreen";
import HistoryModeScreen from "./pages/historyModeScreen/HistoryModeScreen";
import HistoryModeChalScreen from "./pages/historyModeChalScreen/historyModeChalScreen";
import DiaryChallScreen from "./pages/diaryChalScreen/DiaryChalScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<InitialScreen />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/choseMode" element={<ChoseModeScreen />} />
          <Route path="/historyMode" element={<HistoryModeScreen />} />
          <Route path="/historyChal" element={<HistoryModeChalScreen />} />
          <Route path="/diaryChal" element={<DiaryChallScreen />} />
        </Routes>
      </Router>
      {/* <InitialScreen /> */}
      {/* <LoginCard /> */}
      {/* <ChoseModeScreen /> */}
      {/* <HistoryModeScreen /> */}
      {/* <HistoryModeChalScreen /> */}
      {/* <DiaryChallScreen /> */}
    </>
  );
}

export default App;
