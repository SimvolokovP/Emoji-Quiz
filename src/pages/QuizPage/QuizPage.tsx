import { useState } from "react";
import Quiz from "../../components/Quiz/Quiz";
import { useUser } from "../../store/useUser";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";

import "./QuizPage.scss";

import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const QuizPage: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const { user } = useUser();

  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <div className="page quiz-page">
        {isStart ? (
          <Quiz />
        ) : (
          <>
            <div className="quiz-page__username">{user?.username}</div>
            <Button onClick={() => setIsStart(true)}>{t("start")}</Button>
            <Button onClick={() => navigate("/")}>{t("back")}</Button>
          </>
        )}
      </div>
    </AnimatedPage>
  );
};

export default QuizPage;
