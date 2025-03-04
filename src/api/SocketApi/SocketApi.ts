type MessageData = {
  username?: string;
  method: string;
};

type OnConnectionCallback = (isConnected: boolean) => void;
type OnStartGameCallback = () => void;

class SocketService {
  private socket: WebSocket;
  private user: { username?: string };

  constructor(
    user: { username?: string },
    onConnection: OnConnectionCallback,
    onDisconnection: OnConnectionCallback,
    onStartGame: OnStartGameCallback
  ) {
    this.user = user;
    this.socket = new WebSocket(`ws://localhost:5000/`);

    this.socket.onopen = () => {
      console.log("Подключение установлено");
      this.sendMessage("connection", { username: user.username });
      onConnection(true);
    };

    this.socket.onmessage = (event: MessageEvent) => {
      const msg: MessageData = JSON.parse(event.data);
      switch (msg.method) {
        case "connection":
          console.log(`пользователь ${msg.username} присоединился`);
          onConnection(true);
          break;
        case "disconnection":
          console.log(`пользователь ${msg.username} отключился`);
          onDisconnection(false);
          break;
        case "startGame":
          console.log("Игра началась!");
          onStartGame();
          break;
      }
    };

    this.socket.onclose = () => {
      console.log("Подключение закрыто");
      onDisconnection(false);
    };
  }

  sendMessage(method: string, data?: { username?: string }) {
    const message: MessageData = { method, ...data };
    this.socket.send(JSON.stringify(message));
  }

  close() {
    this.socket.close();
  }
}

export default SocketService;
