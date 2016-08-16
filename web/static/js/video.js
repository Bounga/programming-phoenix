import Player from "./player";

let Video = {
  init(socket, element) {
    if (!element) { return; }

    const playerId = element.dataset.playerId;
    const videoId = element.dataset.id;

    socket.connect();

    Player.init(element.id, playerId, () => {
      this.onReady(videoId, socket);
    });
  },

  onReady(videoId, socket) {
    const msgContainer = document.getElementById("msg-container");
    const msgInput = document.getElementById("msg-input");
    const msgSubmit = document.getElementById("msg-submit");
    const vidChannel = socket.channel("videos:" + videoId);
    // TODO: join the vidChannel
  }
};

export default Video;
