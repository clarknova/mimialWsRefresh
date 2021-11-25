import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    ws.send(JSON.stringify(["dog"]));
  });
}, 1000);

wss.on("close", function close() {
  clearInterval(interval);
});
