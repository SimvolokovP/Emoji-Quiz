import { useState } from "react";
import Quiz from "../../components/Quiz/Quiz";

const QuizPage = () => {
  const [isStart, setIsStart] = useState<boolean>(false);

  return (
    <div className="page">
      {isStart ? (
        <Quiz />
      ) : (
        <button onClick={() => setIsStart(true)}>Start</button>
      )}
    </div>
  );
};

export default QuizPage;
