import { FC } from "react";

import "./QuizStats.scss";
import { useTranslation } from "react-i18next";

interface QuizStatsProps {
  round: number;
  timer: number;
}

const QuizStats: FC<QuizStatsProps> = ({ round, timer }) => {
  const { t } = useTranslation();

  return (
    <div className="quiz-stats">
      <div className="quiz-stats__round">
        {t("round")} № {round}
      </div>
      <div className="quiz-stats__timer">⏳ {timer}</div>
    </div>
  );
};

export default QuizStats;
