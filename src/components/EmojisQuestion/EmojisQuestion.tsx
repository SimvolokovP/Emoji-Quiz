import { FC } from "react";
import { IEmoji } from "../../models/IExercise";
import Emoji from "../Emoji/Emoji";

import "./EmojisQuestion.scss";

interface EmojisQuestionProps {
  step: number;
  emojis: IEmoji[];
}

const EmojisQuestion: FC<EmojisQuestionProps> = ({ emojis, step }) => {
  return (
    <div className="emojis-question">
      {emojis.slice(0, step).map((emoji, index) => (
        <div key={emoji.label + index} className="emojis-question__item">
          <Emoji label={emoji.label} symbol={emoji.symbol} fontSize={52} />
        </div>
      ))}
      {Array.from({ length: emojis.length - step }).map((_, index) => (
        <div key={index} className="emojis-question__item"></div>
      ))}
    </div>
  );
};

export default EmojisQuestion;
