const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8080});

let clients =[];

wss.on("connection", (ws) => {
    console.log("Client Connected");

    clients.push(ws);

    ws.on("message", (message) => {
        console.log("Received:", message.toString());

        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", ()=>{
        console.log("Client Disconnected");
        clients = clients.filter((client) => client !== ws);
    });
});

console.log("WebSocket server running on ws://localhost:8080");