import { FC, ReactElement } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  children: ReactElement | string;
  disable?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  disable = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={styles.button}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
