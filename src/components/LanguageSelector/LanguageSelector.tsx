import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleLanguageChange} defaultValue={i18n.language}>
      <option value="en">English 🇬🇧</option>
      <option value="ru">Русский 🇷🇺</option>
    </select>
  );
};

export default LanguageSelector;
