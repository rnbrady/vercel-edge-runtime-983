// Fulcrum is a Bitcoin indexer written in C++ (https://github.com/cculianu/Fulcrum)
// It sends a ping every 20 seconds, so you will need to wait 20 seconds to observe the bug

// Remove this line and the bug disappears
export const runtime = "edge";

export async function GET(req) {
  const ws = new WebSocket("ws://bch.imaginary.cash:50003");

  ws.addEventListener("error", console.error);

  let timer;

  ws.addEventListener("open", function open() {
    let counter = 0;

    setInterval(() => {
      const message = counter < 1 
        ? `{"id":0,"method":"server.version","params":["vercel/edge-runtime#983","1.5"]}`
        : `{"id":${counter.toString()},"method":"server.ping","params":[]}`;

      ws.send(message);

      console.log("sent: ", message);

      counter++;
    }, 1000);


  });

  ws.addEventListener("message", function message(event) {
    console.log("received: %s", event.data);
  });

  await new Promise((resolve) => setTimeout(resolve, 60000));

  clearInterval(timer);

  return new Response("Test complete after running for 60 seconds");
}
