import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import Button from "../../UI/Button/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import './CongratulationPage.scss';

const CongratulationPage = () => {
  const [record, setRecord] = useState<string>("");

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const localRecord = localStorage.getItem("record");
    localRecord && setRecord(localRecord);
  }, []);

  return (
    <AnimatedPage>
      <div className="page congratulation-page">
        <div className="congratulation-page__record">{record} 🎉</div>
        <Button onClick={() => navigate("/")}>{t("back")}</Button>
      </div>
    </AnimatedPage>
  );
};

export default CongratulationPage;
