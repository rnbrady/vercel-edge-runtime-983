import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 3030, 
  
 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);

    ws.send(data.toString());

    console.log('sent: %s', data);
  });

  setInterval(() => {
    ws.ping();
    console.log('ping');
  }, 3000);

  ws.on('error', console.error);

  console.log('connection opened');
});

wss.on('close', function close() {
  console.log('connection closed');
});
