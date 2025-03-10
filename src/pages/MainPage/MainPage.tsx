import { ChangeEvent, useState } from "react";
import Input from "../../UI/Input/Input";
import { useUser } from "../../store/useUser";
import { useNavigate } from "react-router-dom";

import "./MainPage.scss";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import Button from "../../UI/Button/Button";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import Modal from "../../UI/Modal/Modal";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

const MainPage = () => {
  const { setUsername, user } = useUser();
  const [name, setName] = useState<string>(user?.username ? user.username : "");

  const { t } = useTranslation();

  const [modal, setModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setUsername(value);
  };

  return (
    <>
      <AnimatedPage>
        <div className="page main-page">
          <AnimatedTitle />
          <Input
            type="text"
            placeholder={t("username")}
            value={name}
            onChange={handleChange}
          />
          <div className="main-page__controls">
            <Button
              onClick={() => navigate(`${Date.now()}`)}
              disable={!name.length}
            >
              <span>{t("start")} 🚀</span>
            </Button>
            <Button onClick={() => setModal(true)}>
              <span>{t("settings")} ⚙️</span>
            </Button>
          </div>
        </div>
      </AnimatedPage>
      {modal && (
        <Modal isOpen={modal} setOpen={setModal}>
          <LanguageSelector />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
