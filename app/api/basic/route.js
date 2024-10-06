// This serverless function connects to a remote websocket echo server, sends 
// messages to it and logs any responses to the console.

// Remove this line and the bug disappears
export const runtime = "edge";

export async function GET(req) {
  const ws = new WebSocket("ws://localhost:3030");

  ws.addEventListener("error", console.error);

  let timer;

  ws.addEventListener("open", function open() {
    let counter = 0;

    timer = setInterval(() => {
      const message = counter.toString();

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
