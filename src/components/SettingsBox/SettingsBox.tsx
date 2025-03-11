import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

import "./SettingsBox.scss";

const SettingsBox = () => {
  const { t } = useTranslation();

  return (
    <div className="settings-box">
      <div className="settings-box__title">{t("settings")}</div>
      <div className="settings-box__content">
        <div className="settings-box__content--item">
          <label>{t("appLang")}</label>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default SettingsBox;
