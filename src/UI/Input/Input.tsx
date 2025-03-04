import { FC, useRef, useState } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: any;
  onChange: (e: any) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isPlaceholderActive = isFocused || (value && value.length > 0);

  return (
    <div className={styles.inputContainer}>
      <label
        className={`${styles.inputPlaceholder} ${
          isPlaceholderActive ? styles.inputPlaceholderActive : ""
        }`}
      >
        {placeholder}
      </label>
      <input
        className={styles.inputInput}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
      />
    </div>
  );
};

export default Input;
