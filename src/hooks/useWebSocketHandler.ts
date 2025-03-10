
import { useEffect } from "react";
import { toast } from "react-toastify";
import useWebSocket from "react-use-websocket";
import { useUser } from "../store/useUser";

interface UseWebSocketHandlerProps {
  onUserListUpdate: (users: string[]) => void;
  onUserStarted: (username: string) => void;
  onGameStarted: () => void;
}

const useWebSocketHandler = ({
  onUserListUpdate,
  onUserStarted,
  onGameStarted,
}: UseWebSocketHandlerProps) => {
  const { user } = useUser();
  const { sendMessage, lastMessage } = useWebSocket("ws://localhost:5000", {
    onOpen: () => {
      if (user && user.username) {
        const username = user.username;
        sendMessage(JSON.stringify({ type: "SET_USERNAME", username }));
      }
      console.log("WebSocket connection established.");
    },
  });

  useEffect(() => {
    if (lastMessage !== null) {
      const messageData = JSON.parse(lastMessage.data);
      if (messageData.type === "USER_EVENT") {
        toast.info(messageData.data.message);
      } else if (messageData.type === "USER_LIST") {
        onUserListUpdate(messageData.data.users);
      } else if (messageData.type === "USER_STARTED") {
        onUserStarted(messageData.data.username);
      } else if (messageData.type === "GAME_STARTED") {
        onGameStarted();
        toast.success(messageData.data.message);
      }
    }
  }, [lastMessage, onUserListUpdate, onUserStarted, onGameStarted]);

  const handleStartClick = () => {
    if (user?.username) {
      sendMessage(
        JSON.stringify({ type: "USER_STARTED", username: user.username })
      );
    }
  };

  return { handleStartClick };
};

export default useWebSocketHandler;
