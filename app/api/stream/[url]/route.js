// This serverless function connects to an upstream websocket server and 
// streams messages to the client.

// Remove this line and the bug disappears
export const runtime = "edge";

const textEncorder = new TextEncoder();

export async function GET(_, { params }) {
  const decodedUrl = decodeURIComponent(params.url);

  console.log("Decoded URL:", decodedUrl);

  const ws = new WebSocket(decodedUrl);

  ws.addEventListener("error", function (errorEvent) {
    console.error("A WebSocket error occurred: ", errorEvent.message);
  });

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

  const customReadable = new ReadableStream({
    start(controller) {
        ws.addEventListener("message", function message(event) {
          console.log("received: %s", event.data);

          controller.enqueue(textEncorder.encode(`event: data\ndata: ${event.data}\n\n`));
        });
      },
    cancel() {
      ws.close();

      clearInterval(timer);
    }
  });

  return new Response(customReadable, {
    headers: {
      "Content-Type": "text/event-stream"
    }
  });

}
