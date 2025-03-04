import { FC } from "react";

import './QuizStats.scss'

interface QuizStatsProps {
  round: number;
  timer: number;
}

const QuizStats: FC<QuizStatsProps> = ({ round, timer }) => {
  return (
    <div className="quiz-stats">
      <div className="quiz-stats__round">Round № {round}</div>
      <span>/</span>
      <div className="quiz-stats__timer">{timer}</div>
    </div>
  );
};

export default QuizStats;
