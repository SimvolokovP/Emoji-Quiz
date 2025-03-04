import { useEffect, useState, useRef } from "react";
import Quiz from "../../components/Quiz/Quiz";
import { useUser } from "../../store/useUser";
import SocketService from "../../api/SocketApi/SocketApi";

const QuizPage: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { user } = useUser();
  // const socketServiceRef = useRef<SocketService | null>(null);

  // useEffect(() => {
  //   if (user) {
  //     socketServiceRef.current = new SocketService(
  //       user,
  //       setIsConnected,
  //       setIsConnected,
  //       () => setIsStart(true)
  //     );
  //   }

  //   return () => {
  //     socketServiceRef.current?.close();
  //   };
  // }, [user]);

  // const handleStartClick = () => {
  //   socketServiceRef.current?.sendMessage("startGame");
  //   setIsStart(true);
  // };

  return (
    <div className="page">
      {isStart ? (
        <Quiz />
      ) : (
        <button onClick={() => setIsStart(true)}>Start</button>
      )}
    </div>
  );
};

export default QuizPage;
