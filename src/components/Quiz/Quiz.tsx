import { ChangeEvent, useEffect, useState } from "react";
import { IExercise } from "../../models/IExercise";
import EmojisQuestion from "../EmojisQuestion/EmojisQuestion";

import "./Quiz.scss";
import Input from "../../UI/Input/Input";
import { FakeApi } from "../../api/ExercisesApi/FakeApi";
import QuizStats from "../QuizStats/QuizStats";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Quiz = () => {
  const [exercise, setExercise] = useState<IExercise | null>(null);
  const [step, setStep] = useState<number>(1);
  const [round, setRound] = useState<number>(1);
  const [targetAnswer, setTargetAnswer] = useState<string>("");
  const [timer, setTimer] = useState<number>(8);
  const [score, setScore] = useState<number>(0);

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const getExercise = async () => {
    const item = await FakeApi.fetchExercise();
    setExercise(item);
    setTimer(8);
    setStep(1);
  };

  useEffect(() => {
    getExercise();
  }, [round]);

  useEffect(() => {
    if (round >= 11) {
      localStorage.setItem("record", score.toString());
      navigate("/congratulation");
    }
  }, [round]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((time) => {
        if (time <= 1) {
          clearInterval(interval);
          setTimer(8);
          if (step < (exercise?.emojis.length || 0)) {
            setStep(step + 1);
          } else {
            const correctAnswer =
              i18n.language === "ru"
                ? exercise?.answer.answerRu
                : exercise?.answer.answerEng;

            toast.error(`${t("error")} "${correctAnswer}"`);
            setRound(round + 1);
            setStep(1);
          }

          return 8;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step, exercise]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTargetAnswer(value);

    if (
      value.toLowerCase() === exercise?.answer.answerRu.toLowerCase() ||
      value.toLowerCase() === exercise?.answer.answerEng.toLowerCase()
    ) {
      const correctAnswer =
        i18n.language === "ru"
          ? exercise?.answer.answerRu
          : exercise?.answer.answerEng;
      setRound((prev) => prev + 1);
      setStep(1);
      setTargetAnswer("");
      setScore((prev) => prev + (+exercise.emojis.length + 1 - step));
      toast.success(`"${correctAnswer}"`);
    }
  };

  return (
    <div className="quiz">
      <QuizStats round={round} timer={timer} />
      <div className="quiz__score">{score}</div>
      {exercise && <EmojisQuestion emojis={exercise?.emojis} step={step} />}

      <Input
        type="text"
        placeholder={t("answer")}
        value={targetAnswer}
        onChange={handleChange}
      />
      <ToastContainer />
    </div>
  );
};

export default Quiz;
