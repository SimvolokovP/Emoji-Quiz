import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import QuizPage from "../pages/QuizPage/QuizPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route Component={MainPage} path="/" />
      <Route Component={QuizPage} path="/:id" />
    </Routes>
  );
};

export default AppRouter;
