import { FC } from "react";

interface EmojiProps {
  label: string;
  symbol: string;
  fontSize?: number;
}

const Emoji: FC<EmojiProps> = ({ label, symbol, fontSize = 14 }) => {
  return (
    <span
      style={{ fontSize: fontSize }}
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
