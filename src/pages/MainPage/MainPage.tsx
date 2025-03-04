import { ChangeEvent, useState } from "react";
import Input from "../../UI/Input/Input";
import { useUser } from "../../store/useUser";
import { useNavigate } from "react-router-dom";

import "./MainPage.scss";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

const MainPage = () => {
  const { setUsername, user } = useUser();
  const [name, setName] = useState<string>(user?.username ? user.username : "");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setUsername(value);
  };

  return (
    <div className="page main-page">
      <AnimatedTitle />
      <Input
        type="text"
        placeholder="Username"
        value={name}
        onChange={handleChange}
      />
      <div className="main-page__controls">
        <button
          onClick={() => navigate(`f${(+new Date()).toString(16)}`)}
          disabled={!name.length}
        >
          Create Room
        </button>
        <button disabled={!name.length}>Join Room</button>
      </div>
    </div>
  );
};

export default MainPage;
