import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import CongratulationPage from "./pages/CongratulationPage/CongratulationPage";

function App() {
  return (
    <main>
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<QuizPage />} />
            <Route path="/congratulation" element={<CongratulationPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
