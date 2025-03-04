import { useEffect, useState } from "react";
import { getRandomEmoji } from "../../helpers/getRandomEmoji";
import Emoji from "../Emoji/Emoji";

import styles from "./AnimatedTitle.module.scss";

const AnimatedTitle = () => {
  const [emoji, setEmoji] = useState<string>(getRandomEmoji());
  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(getRandomEmoji());
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.title}>
      <h1>Guess the Movie by</h1>
      <Emoji symbol={emoji} label="random" fontSize={24}></Emoji>
    </div>
  );
};

export default AnimatedTitle;
