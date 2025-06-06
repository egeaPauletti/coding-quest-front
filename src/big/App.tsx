import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ChoseModeScreen from "./pages/choseMode/ChoseModeScreen";
import DiaryChallScreen from "./pages/diaryChalScreen/DiaryChalScreen";
import HistoryModeChalScreen from "./pages/historyModeChalScreen/historyModeChalScreen";
import HistoryModeScreen from "./pages/historyModeScreen/HistoryModeScreen";
import InitialScreen from "./pages/InitialScreen/InitialScreen";
import LoginCard from "./pages/loginScreen/LoginCard";
import ProtectedRoute from "./pages/protectedScreen/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<InitialScreen />} />
        <Route path="/login" element={<LoginCard />} />

        {/* Rotas protegidas */}
        <Route
          path="/choseMode"
          element={
            <ProtectedRoute>
              <ChoseModeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historyMode"
          element={
            <ProtectedRoute>
              <HistoryModeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historyChal"
          element={
            <ProtectedRoute>
              <HistoryModeChalScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/diaryChal"
          element={
            <ProtectedRoute>
              <DiaryChallScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
