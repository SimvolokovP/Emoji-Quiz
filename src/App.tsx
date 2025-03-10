import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import QuizPage from "./pages/QuizPage/QuizPage";

function App() {
  return (
    <main>
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<QuizPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
